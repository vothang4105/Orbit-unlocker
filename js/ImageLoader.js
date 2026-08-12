/**
 * Orbit Unlocker - Fruit Image Asset Loader
 * Preloads transparent PNG fruit icons: Dâu, Nho, Thơm, Đào, Rau má
 */

class ImageLoader {
    constructor() {
        this.images = {};
        this.loadedCount = 0;
        this.totalCount = 0;
        this.isLoaded = false;

        this.fruitPaths = {
            'dau': 'js/Icon/Fruits/Dâu.png',
            'nho': 'js/Icon/Fruits/Nho.png',
            'thom': 'js/Icon/Fruits/Thơm.png',
            'dao': 'js/Icon/Fruits/Đào.png',
            'rauma': 'js/Icon/Fruits/RauMa.png'
        };
    }

    preloadAll(onComplete) {
        const keys = Object.keys(this.fruitPaths);
        this.totalCount = keys.length;

        if (this.totalCount === 0) {
            this.isLoaded = true;
            if (onComplete) onComplete();
            return;
        }

        keys.forEach(key => {
            const img = new Image();
            img.src = this.fruitPaths[key];
            img.onload = () => {
                this.images[key] = img;
                this.loadedCount++;
                if (this.loadedCount >= this.totalCount) {
                    this.isLoaded = true;
                    if (onComplete) onComplete();
                }
            };
            img.onerror = (e) => {
                console.warn(`Failed to load fruit image: ${key}`, e);
                this.loadedCount++;
                if (this.loadedCount >= this.totalCount) {
                    this.isLoaded = true;
                    if (onComplete) onComplete();
                }
            };
        });
    }

    getImage(key) {
        return this.images[key] || null;
    }
}

if (typeof window !== 'undefined') {
    window.ImageLoader = ImageLoader;
}
