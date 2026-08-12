/**
 * Orbit Unlocker - Dot Entity
 * Supports Neon Glowing Dots & Fruit Image Icons
 */

class Dot {
    /**
     * @param {Object} data
     * @param {string} data.color - Name of color key from CONFIG.COLORS
     * @param {string} [data.fruitKey] - Optional fruit key ('dau', 'nho', 'thom', 'dao')
     * @param {number} data.angleOffset - Angle offset relative to parent ring (degrees)
     * @param {number} [data.radius=7] - Visual radius of dot
     */
    constructor(data) {
        this.colorKey = data.color || 'yellow';
        this.fruitKey = data.fruitKey || null;
        this.angleOffset = data.angleOffset || 0;
        this.radius = data.radius || 7;
        this.pulsePhase = Math.random() * Math.PI * 2;
    }

    getGlobalAngle(ringCurrentAngle) {
        return Utils.normalizeAngle(ringCurrentAngle + this.angleOffset);
    }

    render(ctx, cx, cy, ringRadius, ringCurrentAngle, isRingLocked, isActiveRing, imageLoader = null) {
        const globalAngle = this.getGlobalAngle(ringCurrentAngle);
        const pos = Utils.polarToCartesian(cx, cy, ringRadius, globalAngle);
        const colorHex = Utils.getColorHex(this.colorKey);

        ctx.save();

        this.pulsePhase += 0.05;
        const glowScale = isActiveRing ? 1 + Math.sin(this.pulsePhase) * 0.18 : 1;
        const currentRadius = this.radius * glowScale;

        // Check if drawing Fruit Image Icon
        let fruitImg = null;
        if (this.fruitKey && imageLoader) {
            fruitImg = imageLoader.getImage(this.fruitKey);
        }

        if (fruitImg) {
            // Render Fruit PNG Icon
            const imgSize = (currentRadius + 8) * 2;
            
            // Subtle glowing backing circle
            ctx.shadowColor = colorHex;
            ctx.shadowBlur = isRingLocked ? 15 : (isActiveRing ? 12 : 6);

            ctx.beginPath();
            ctx.arc(pos.x, pos.y, currentRadius + 5, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(12, 20, 36, 0.7)';
            ctx.fill();

            if (isRingLocked) {
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 2;
                ctx.stroke();
            }

            // Draw Fruit PNG centered
            ctx.drawImage(
                fruitImg,
                pos.x - imgSize / 2,
                pos.y - imgSize / 2,
                imgSize,
                imgSize
            );
        } else {
            // Standard Cyber Neon Glowing Circle
            ctx.shadowColor = colorHex;
            ctx.shadowBlur = isRingLocked ? 16 : (isActiveRing ? 12 : 6);

            // Outer ring
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, currentRadius + 3, 0, Math.PI * 2);
            ctx.strokeStyle = isRingLocked ? '#ffffff' : colorHex;
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Inner circle fill
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, currentRadius, 0, Math.PI * 2);
            ctx.fillStyle = colorHex;
            ctx.fill();

            // Center White Core
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, currentRadius * 0.4, 0, Math.PI * 2);
            ctx.fillStyle = '#ffffff';
            ctx.fill();
        }

        ctx.restore();
    }
}

if (typeof window !== 'undefined') {
    window.Dot = Dot;
}
