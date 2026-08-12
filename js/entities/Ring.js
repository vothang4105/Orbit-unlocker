/**
 * Orbit Unlocker - Ring Entity (Concentric Orbit Ring)
 */

class Ring {
    /**
     * @param {Object} data
     * @param {number} data.radius - Orbital radius from center
     * @param {number} [data.rotationSpeed=60] - Speed in deg/sec
     * @param {number} [data.direction=1] - 1 = Clockwise, -1 = Counter-clockwise
     * @param {Array<Object>} data.arcs - Arc data configs
     * @param {Array<Object>} data.dots - Dot data configs
     * @param {number} [data.index=0] - Ring index (0 = Innermost)
     */
    constructor(data, index = 0) {
        this.index = index;
        this.radius = data.radius;
        this.rotationSpeed = data.rotationSpeed || 60;
        this.direction = data.direction || 1;
        this.currentAngle = Math.floor(Math.random() * 360);
        this.locked = false;
        this.isSpinning = false;

        // Instantiate Arcs & Dots
        this.arcs = (data.arcs || []).map(a => new Arc(a));
        this.dots = (data.dots || []).map(d => new Dot(d));
    }

    update(deltaTime) {
        if (this.locked || !this.isSpinning) return;
        const deltaAngle = this.rotationSpeed * this.direction * deltaTime;
        this.currentAngle = Utils.normalizeAngle(this.currentAngle + deltaAngle);
    }

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

        // 1. Draw Circular Orbit Path
        ctx.beginPath();
        ctx.arc(cx, cy, this.radius, 0, Math.PI * 2);
        
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
