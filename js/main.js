/**
 * Orbit Unlocker - Entry Point & High-DPI Responsive Canvas Setup
 */

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('game-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const gameManager = new GameManager();

    // High-DPI Responsive Canvas Resize Handler
    function resizeCanvas() {
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        const displayWidth = rect.width || 400;
        const displayHeight = rect.height || 400;

        // Set actual resolution equal to high-DPI scaled base size
        canvas.width = CONFIG.CANVAS_BASE_SIZE * dpr;
        canvas.height = CONFIG.CANVAS_BASE_SIZE * dpr;

        ctx.scale(dpr, dpr);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('orientationchange', () => {
        setTimeout(resizeCanvas, 150);
    });

    // Initialize Game Manager
    gameManager.init();

    // ------------------------------------------------------------------
    // Key & Touch Input Listeners (SPACE / ENTER / Click / Touch)
    // ------------------------------------------------------------------
    const btnUnlock = document.getElementById('btn-unlock');
    let lastUnlockTime = 0;

    function triggerUnlock(e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }

        const now = performance.now();
        if (now - lastUnlockTime < 100) return; // Prevent duplicate rapid touch/click events
        lastUnlockTime = now;

        gameManager.attemptUnlock();

        if (btnUnlock) {
            btnUnlock.classList.add('active-press');
            setTimeout(() => btnUnlock.classList.remove('active-press'), 120);
        }
    }

    // Keyboard triggers (Space / Enter)
    window.addEventListener('keydown', (e) => {
        if (e.code === 'Space' || e.code === 'Enter') {
            triggerUnlock(e);
        }
    });

    // Touch / Pointer on Canvas
    canvas.addEventListener('pointerdown', (e) => {
        triggerUnlock(e);
    });

    // Button click / touch
    if (btnUnlock) {
        btnUnlock.addEventListener('pointerdown', (e) => {
            triggerUnlock(e);
        });
    }

    // ------------------------------------------------------------------
    // Main Game Loop (requestAnimationFrame)
    // ------------------------------------------------------------------
    let lastTime = performance.now();

    function gameLoop(currentTime) {
        const deltaTime = Math.min((currentTime - lastTime) / 1000, 0.1);
        lastTime = currentTime;

        gameManager.update(deltaTime);
        gameManager.render(ctx);

        requestAnimationFrame(gameLoop);
    }

    requestAnimationFrame(gameLoop);
});
