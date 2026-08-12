/**
 * Orbit Unlocker - Arc Entity (Target Destination Area)
 */

class Arc {
    /**
     * @param {Object} data
     * @param {string} data.color - Color key
     * @param {number} data.startAngle - Fixed position start angle on orbit (degrees)
     * @param {number} data.arcWidth - Angular width of arc (degrees)
     * @param {number} [data.thickness=8] - Visual thickness of stroke
     */
    constructor(data) {
        this.colorKey = data.color || 'yellow';
        this.startAngle = data.startAngle || 0;
        this.arcWidth = data.arcWidth || 60;
        this.thickness = data.thickness || 7;
    }

    /**
     * Get start and end angles in normalized degrees
     */
    getStartAngle() {
        return Utils.normalizeAngle(this.startAngle);
    }

    getEndAngle() {
        return Utils.normalizeAngle(this.startAngle + this.arcWidth);
    }

    /**
     * Render arc segment on canvas
     */
    render(ctx, cx, cy, ringRadius, isRingLocked, isActiveRing) {
        const colorHex = Utils.getColorHex(this.colorKey);

        const startRad = Utils.degToRad(this.startAngle);
        const endRad = Utils.degToRad(this.startAngle + this.arcWidth);

        ctx.save();

        // Glow effects
        ctx.shadowColor = colorHex;
        ctx.shadowBlur = isRingLocked ? 18 : (isActiveRing ? 12 : 6);

        // Arc Segment Line
        ctx.beginPath();
        ctx.arc(cx, cy, ringRadius, startRad, endRad, false);
        ctx.strokeStyle = colorHex;
        ctx.lineWidth = isRingLocked ? this.thickness + 2 : (isActiveRing ? this.thickness + 1 : this.thickness);
        ctx.lineCap = 'round';
        ctx.stroke();

        // End Cap Accents (Small circular indicators at arc tips for premium Sci-Fi feel)
        const startPos = Utils.polarToCartesian(cx, cy, ringRadius, this.startAngle);
        const endPos = Utils.polarToCartesian(cx, cy, ringRadius, this.startAngle + this.arcWidth);

        ctx.beginPath();
        ctx.arc(startPos.x, startPos.y, this.thickness / 2.5, 0, Math.PI * 2);
        ctx.arc(endPos.x, endPos.y, this.thickness / 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();

        ctx.restore();
    }
}

if (typeof window !== 'undefined') {
    window.Arc = Arc;
}
