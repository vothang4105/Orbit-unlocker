/**
 * Orbit Unlocker - Math & Helper Utilities
 */

const Utils = {
    /**
     * Convert degrees to radians
     */
    degToRad(deg) {
        return (deg * Math.PI) / 180;
    },

    /**
     * Convert radians to degrees
     */
    radToDeg(rad) {
        return (rad * 180) / Math.PI;
    },

    /**
     * Normalize an angle in degrees to [0, 360)
     */
    normalizeAngle(deg) {
        let angle = deg % 360;
        if (angle < 0) {
            angle += 360;
        }
        return angle;
    },

    /**
     * Check if a Dot at dotAngle falls within the range [arcStartAngle, arcEndAngle]
     * Correctly handles 0 / 360 degree boundary wrap-around!
     * @param {number} dotAngle - Current global angle of the dot in degrees [0, 360)
     * @param {number} arcStart - Start angle of the arc in degrees
     * @param {number} arcWidth - Angular width of the arc in degrees
     * @param {number} tolerance - Additional allowed error margin in degrees
     * @returns {boolean} True if dot is within arc range
     */
    isDotInArc(dotAngle, arcStart, arcWidth, tolerance = 0) {
        const normDot = this.normalizeAngle(dotAngle);
        const normStart = this.normalizeAngle(arcStart - tolerance);
        const totalSpan = arcWidth + (tolerance * 2);

        // Calculate end angle in normalized degrees
        const normEnd = (normStart + totalSpan);

        if (normEnd < 360) {
            // Standard continuous range within [0, 360)
            return normDot >= normStart && normDot <= normEnd;
        } else {
            // Wrapped range across 0 degrees (e.g. 350 deg to 30 deg)
            const wrappedEnd = normEnd % 360;
            return normDot >= normStart || normDot <= wrappedEnd;
        }
    },

    /**
     * Get hex color or default theme color map
     */
    getColorHex(colorName) {
        if (CONFIG && CONFIG.COLORS && CONFIG.COLORS[colorName]) {
            return CONFIG.COLORS[colorName];
        }
        return colorName || '#00f5d4';
    },

    /**
     * Convert Polar Coordinates (radius, angleDeg) to Cartesian (x, y)
     * relative to center (cx, cy)
     */
    polarToCartesian(cx, cy, radius, angleDeg) {
        const rad = this.degToRad(angleDeg);
        return {
            x: cx + radius * Math.cos(rad),
            y: cy + radius * Math.sin(rad)
        };
    },

    /**
     * Linear interpolation helper
     */
    lerp(start, end, amt) {
        return (1 - amt) * start + amt * end;
    },

    /**
     * Format seconds to MM:SS
     */
    formatTime(seconds) {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = Math.floor(seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    }
};

if (typeof window !== 'undefined') {
    window.Utils = Utils;
}
