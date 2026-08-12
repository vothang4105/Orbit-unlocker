/**
 * Orbit Unlocker - Ring Entity (Concentric Orbit Ring)
 * Supports Full 360° Orbits & Partial Oscillating Rings (Ping-Pong Bounce)
 */

class Ring {
    /**
     * @param {Object} data
     * @param {number} data.radius - Orbital radius from center
     * @param {number} [data.rotationSpeed=60] - Speed in deg/sec
     * @param {number} [data.direction=1] - 1 = Clockwise, -1 = Counter-clockwise
     * @param {boolean} [data.isPartial=false] - True if ring is an incomplete arc orbit that bounces
     * @param {number} [data.minAngle=30] - Start boundary of partial ring (degrees)
     * @param {number} [data.maxAngle=310] - End boundary of partial ring (degrees)
     * @param {Array<Object>} data.arcs - Arc data configs
     * @param {Array<Object>} data.dots - Dot data configs
     * @param {number} [data.index=0] - Ring index (0 = Innermost)
     */
    constructor(data, index = 0) {
        this.index = index;
        this.radius = data.radius;
        // Always enforce positive scalar speed
        this.rotationSpeed = Math.abs(data.rotationSpeed || 60);
        this.direction = data.direction < 0 ? -1 : 1;

        this.isPartial = data.isPartial || false;
        this.minAngle = data.minAngle !== undefined ? data.minAngle : 30;
        this.maxAngle = data.maxAngle !== undefined ? data.maxAngle : 310;

        // Set initial angle safely within min/max bounds if partial
        if (this.isPartial) {
            const midAngle = (this.minAngle + this.maxAngle) / 2;
            this.currentAngle = midAngle;
        } else {
            this.currentAngle = Math.floor(Math.random() * 360);
        }

        this.locked = false;
        this.isSpinning = false;

        // Instantiate Arcs & Dots
        this.arcs = (data.arcs || []).map(a => new Arc(a));
        this.dots = (data.dots || []).map(d => new Dot(d));
    }

    /**
     * Continuous rotation & ping-pong bounce update loop
     */
    update(deltaTime) {
        if (this.locked || !this.isSpinning) return;

        const speed = Math.abs(this.rotationSpeed);

        if (this.isPartial) {
            const step = speed * this.direction * deltaTime;
            let nextAngle = this.currentAngle + step;

            if (this.direction > 0 && nextAngle >= this.maxAngle) {
                this.currentAngle = this.maxAngle;
                this.direction = -1; // Reverse & Bounce backwards!
            } else if (this.direction < 0 && nextAngle <= this.minAngle) {
                this.currentAngle = this.minAngle;
                this.direction = 1; // Reverse & Bounce forwards!
            } else {
                this.currentAngle = nextAngle;
            }
        } else {
            const deltaAngle = speed * this.direction * deltaTime;
            this.currentAngle = Utils.normalizeAngle(this.currentAngle + deltaAngle);
        }
    }

    /**
     * Check Hit Condition for this Ring
     */
    checkHit() {
        if (this.dots.length === 0) return true;

        for (let dot of this.dots) {
            const dotGlobalAngle = dot.getGlobalAngle(this.currentAngle);
            const matchingArcs = this.arcs.filter(arc => arc.colorKey === dot.colorKey);

            if (matchingArcs.length === 0) {
                const hitAny = this.arcs.some(arc =>
                    Utils.isDotInArc(dotGlobalAngle, arc.startAngle, arc.arcWidth, CONFIG.HIT_TOLERANCE_DEG)
                );
                if (!hitAny) return false;
            } else {
                const hitMatching = matchingArcs.some(arc =>
                    Utils.isDotInArc(dotGlobalAngle, arc.startAngle, arc.arcWidth, CONFIG.HIT_TOLERANCE_DEG)
                );
                if (!hitMatching) return false;
            }
        }

        return true;
    }

    setLocked(lockedState = true) {
        this.locked = lockedState;
        if (lockedState) {
            this.isSpinning = false;
        }
    }

    render(ctx, cx, cy, isActiveRing, imageLoader = null) {
        ctx.save();

        // 1. Draw Circular / Partial Orbit Path
        ctx.beginPath();
        if (this.isPartial) {
            const startRad = Utils.degToRad(this.minAngle);
            const endRad = Utils.degToRad(this.maxAngle);
            ctx.arc(cx, cy, this.radius, startRad, endRad, false);
        } else {
            ctx.arc(cx, cy, this.radius, 0, Math.PI * 2);
        }

        if (this.locked) {
            ctx.strokeStyle = CONFIG.COLORS.lockedTrack;
            ctx.lineWidth = 3;
            ctx.shadowColor = CONFIG.COLORS.cyan;
            ctx.shadowBlur = 14;
        } else if (this.isSpinning) {
            ctx.strokeStyle = CONFIG.COLORS.activeTrack;
            ctx.lineWidth = 2.4;
            ctx.shadowColor = CONFIG.COLORS.cyan;
            ctx.shadowBlur = 10;
        } else {
            ctx.strokeStyle = CONFIG.COLORS.inactiveTrack;
            ctx.lineWidth = 1.2;
            ctx.shadowBlur = 0;
        }
        ctx.stroke();

        // If Partial Ring, draw boundary cap stoppers at minAngle and maxAngle
        if (this.isPartial) {
            const pMin = Utils.polarToCartesian(cx, cy, this.radius, this.minAngle);
            const pMax = Utils.polarToCartesian(cx, cy, this.radius, this.maxAngle);

            ctx.save();
            ctx.shadowColor = CONFIG.COLORS.pink;
            ctx.shadowBlur = 8;
            ctx.fillStyle = CONFIG.COLORS.pink;

            ctx.beginPath();
            ctx.arc(pMin.x, pMin.y, 4.5, 0, Math.PI * 2);
            ctx.arc(pMax.x, pMax.y, 4.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }

        // 2. Render Arcs
        this.arcs.forEach(arc => {
            arc.render(ctx, cx, cy, this.radius, this.locked, this.isSpinning);
        });

        // 3. Render Dots
        this.dots.forEach(dot => {
            dot.render(ctx, cx, cy, this.radius, this.currentAngle, this.locked, this.isSpinning, imageLoader);
        });

        ctx.restore();
    }
}

if (typeof window !== 'undefined') {
    window.Ring = Ring;
}
