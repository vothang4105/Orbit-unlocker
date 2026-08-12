/**
 * Orbit Unlocker - Entry Point & Game Loop Setup
 * Pure Auto-Rotation Timing Controls
 */

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('game-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const gameManager = new GameManager();

    // Responsive High-DPI Canvas Scaling
    function resizeCanvas() {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = CONFIG.CANVAS_BASE_SIZE * dpr;
        canvas.height = CONFIG.CANVAS_BASE_SIZE * dpr;
        ctx.scale(dpr, dpr);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize Game Manager
    gameManager.init();

    // ------------------------------------------------------------------
    // Key & Input Listener (SPACE / ENTER / Click / Touch)
    // ------------------------------------------------------------------
    const btnUnlock = document.getElementById('btn-unlock');

    function triggerUnlock() {
        gameManager.attemptUnlock();
        if (btnUnlock) {
            btnUnlock.classList.add('active-press');
            setTimeout(() => btnUnlock.classList.remove('active-press'), 120);
        }
    }

    // Keyboard trigger (Space / Enter)
    window.addEventListener('keydown', (e) => {
        if (e.code === 'Space' || e.code === 'Enter') {
            e.preventDefault();
            triggerUnlock();
        }
    });

    // Touch / Click on Canvas trigger
    canvas.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        triggerUnlock();
    });

    // Button trigger
    if (btnUnlock) {
        btnUnlock.addEventListener('click', (e) => {
            e.preventDefault();
            triggerUnlock();
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
