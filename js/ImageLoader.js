/**
 * Orbit Unlocker - Image Loader Utility for Fruit Mode
 */

class ImageLoader {
    constructor() {
        this.images = {};
        this.loadedCount = 0;
        this.totalImages = 0;
        this.isReady = false;

        this.FRUIT_PATHS = {
            dau: 'js/Icon/Fruits/Dâu.png',
            nho: 'js/Icon/Fruits/Nho.png',
            thom: 'js/Icon/Fruits/Thơm.png',
            dao: 'js/Icon/Fruits/Đào.png'
        };
    }

    preloadAll(onComplete) {
        const keys = Object.keys(this.FRUIT_PATHS);
        this.totalImages = keys.length;

        if (this.totalImages === 0) {
            this.isReady = true;
            if (onComplete) onComplete();
            return;
        }

        keys.forEach(key => {
            const img = new Image();
            img.onload = () => {
                this.loadedCount++;
                if (this.loadedCount >= this.totalImages) {
                    this.isReady = true;
                    if (onComplete) onComplete();
                }
            };
            img.onerror = (err) => {
                console.warn(`Failed to load fruit image for ${key}:`, err);
                this.loadedCount++;
                if (this.loadedCount >= this.totalImages) {
                    this.isReady = true;
                    if (onComplete) onComplete();
                }
            };
            img.src = this.FRUIT_PATHS[key];
            this.images[key] = img;
        });
    }

    getImage(fruitKey) {
        return this.images[fruitKey] || null;
    }
}

if (typeof window !== 'undefined') {
    window.ImageLoader = ImageLoader;
}
