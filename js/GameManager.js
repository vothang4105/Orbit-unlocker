/**
 * Orbit Unlocker - Main Game Manager & State Machine
 * 3-Lives Fail System, Penalties, BGM Sync & Cyber/Fruit Modes
 * Supports 18 Random Victory Praise & Troll Phrases
 */

class GameManager {
    constructor() {
        this.state = 'MENU'; // MENU, PLAYING, LEVEL_COMPLETE, GAME_OVER
        this.currentTheme = CONFIG.THEMES.CYBER;
        this.currentLevelIndex = 0;

        this.rings = [];
        this.groups = [];
        this.activeGroupIndex = 0;

        this.score = 0;
        this.combo = 1;
        this.lives = CONFIG.MAX_LIVES;
        this.mistakes = 0;

        this.timer = 0;
        this.timerInterval = null;

        this.playerMgr = new PlayerManager();
        this.imageLoader = new ImageLoader();
        this.sound = new SoundSystem();
        this.particles = [];
        this.screenShakeTime = 0;

        // DOM Elements Cache
        this.dom = {
            appLogo: document.getElementById('app-logo'),
            menuLogoDisplay: document.getElementById('menu-logo-display'),
            levelDisplay: document.getElementById('level-display'),
            livesDisplay: document.getElementById('lives-display'),
            scoreDisplay: document.getElementById('score-display'),
            comboDisplay: document.getElementById('combo-display'),
            playerNameDisplay: document.getElementById('player-name-display'),
            activeRingIndex: document.getElementById('active-ring-index'),
            ringStatusOverlay: document.getElementById('ring-status'),
            btnSound: document.getElementById('btn-sound'),
            btnMenu: document.getElementById('btn-menu'),
            unlockBtnText: document.getElementById('unlock-btn-text'),
            
            // Mode Tabs
            tabModeCyber: document.getElementById('tab-mode-cyber'),
            tabModeFruit: document.getElementById('tab-mode-fruit'),

            // Main Menu
            mainMenuModal: document.getElementById('main-menu-modal'),
            btnMenuStart: document.getElementById('btn-menu-start'),
            btnMenuLeaderboard: document.getElementById('btn-menu-leaderboard'),
            btnMenuHelp: document.getElementById('btn-menu-help'),

            // Player Selection Modal
            playerModal: document.getElementById('player-modal'),
            inputPlayerName: document.getElementById('input-player-name'),
            btnCreatePlayer: document.getElementById('btn-create-player'),
            selectExistingPlayer: document.getElementById('select-existing-player'),
            btnSelectPlayer: document.getElementById('btn-select-player'),
            btnClosePlayerModal: document.getElementById('btn-close-player-modal'),

            // Leaderboard Modal
            leaderboardModal: document.getElementById('leaderboard-modal'),
            leaderboardTbody: document.getElementById('leaderboard-tbody'),
            btnCloseLeaderboard: document.getElementById('btn-close-leaderboard'),

            // Help Modal
            helpModal: document.getElementById('help-modal'),
            btnCloseHelp: document.getElementById('btn-close-help'),

            // Game Over / Win Modal
            gameOverModal: document.getElementById('game-over-modal'),
            gameOverCard: document.getElementById('game-over-card'),
            goModalTitle: document.getElementById('go-modal-title'),
            goModalDesc: document.getElementById('go-modal-desc'),
            goMPlayer: document.getElementById('go-m-player'),
            goMScore: document.getElementById('go-m-score'),
            goMTime: document.getElementById('go-m-time'),
            goMMistakes: document.getElementById('go-m-mistakes'),
            goBtnNext: document.getElementById('go-btn-next'),
            goBtnMenu: document.getElementById('go-btn-menu')
        };
    }

    init() {
        this.imageLoader.preloadAll(() => {
            console.log("Fruit & Rau má images preloaded successfully!");
        });

        this.setupEventListeners();
        this.showMainMenu();
    }

    setupEventListeners() {
        this.dom.btnSound.addEventListener('click', () => {
            const isMuted = this.sound.toggleMute();
            this.dom.btnSound.textContent = isMuted ? '🔇' : '🔊';
        });

        this.dom.btnMenu.addEventListener('click', () => {
            this.showMainMenu();
        });

        this.dom.tabModeCyber.addEventListener('click', () => {
            this.setThemeMode(CONFIG.THEMES.CYBER);
        });

        this.dom.tabModeFruit.addEventListener('click', () => {
            this.setThemeMode(CONFIG.THEMES.FRUIT);
        });

        this.dom.btnMenuStart.addEventListener('click', () => {
            this.sound.startBGM();
            this.openPlayerModal();
        });

        this.dom.btnMenuLeaderboard.addEventListener('click', () => {
            this.openLeaderboardModal();
        });

        this.dom.btnMenuHelp.addEventListener('click', () => {
            this.dom.helpModal.classList.remove('hidden');
        });

        this.dom.btnCloseHelp.addEventListener('click', () => {
            this.dom.helpModal.classList.add('hidden');
        });

        this.dom.btnCreatePlayer.addEventListener('click', () => {
            this.sound.startBGM();
            const name = this.dom.inputPlayerName.value;
            const player = this.playerMgr.addPlayer(name);
            if (player) {
                this.dom.inputPlayerName.value = '';
                this.dom.playerModal.classList.add('hidden');
                this.dom.mainMenuModal.classList.add('hidden');
                this.startLevel(0);
            } else {
                alert("Vui lòng nhập tên người chơi!");
            }
        });

        this.dom.btnSelectPlayer.addEventListener('click', () => {
            this.sound.startBGM();
            const selectedId = this.dom.selectExistingPlayer.value;
            if (selectedId) {
                this.playerMgr.setActivePlayer(selectedId);
                this.dom.playerModal.classList.add('hidden');
                this.dom.mainMenuModal.classList.add('hidden');
                this.startLevel(0);
            } else {
                alert("Vui lòng chọn 1 người chơi từ danh sách hoặc nhập tên mới!");
            }
        });

        this.dom.btnClosePlayerModal.addEventListener('click', () => {
            this.dom.playerModal.classList.add('hidden');
        });

        this.dom.btnCloseLeaderboard.addEventListener('click', () => {
            this.dom.leaderboardModal.classList.add('hidden');
        });

        this.dom.goBtnNext.addEventListener('click', () => {
            this.sound.startBGM();
            this.dom.gameOverModal.classList.add('hidden');
            if (this.state === 'LEVEL_COMPLETE') {
                const levels = this.getCurrentLevels();
                const nextLvl = (this.currentLevelIndex + 1) % levels.length;
                this.startLevel(nextLvl);
            } else {
                this.startLevel(this.currentLevelIndex);
            }
        });

        this.dom.goBtnMenu.addEventListener('click', () => {
            this.dom.gameOverModal.classList.add('hidden');
            this.showMainMenu();
        });
    }

    setThemeMode(theme) {
        this.currentTheme = theme;
        if (theme === CONFIG.THEMES.FRUIT) {
            document.body.className = 'fruit-theme';
            this.dom.tabModeFruit.classList.add('active');
            this.dom.tabModeCyber.classList.remove('active');
            this.dom.appLogo.innerHTML = `<span style="color:#ff3366;">FRUIT</span> <span style="color:#70e000;">PARADISE</span>`;
            this.dom.menuLogoDisplay.innerHTML = `<span style="color:#ff3366;">FRUIT</span> <span style="color:#70e000;">PARADISE</span>`;
            this.dom.unlockBtnText.textContent = "THU HOẠCH QUẢ";
        } else {
            document.body.className = 'cyber-theme';
            this.dom.tabModeCyber.classList.add('active');
            this.dom.tabModeFruit.classList.remove('active');
            this.dom.appLogo.innerHTML = `<span class="neon-text-cyan">ORBIT</span> <span class="neon-text-pink">UNLOCKER</span>`;
            this.dom.menuLogoDisplay.innerHTML = `<span class="neon-text-cyan">ORBIT</span> <span class="neon-text-pink">UNLOCKER</span>`;
            this.dom.unlockBtnText.textContent = "LỤM";
        }
    }

    getCurrentLevels() {
        return this.currentTheme === CONFIG.THEMES.FRUIT ? CONFIG.FRUIT_LEVELS : CONFIG.LEVELS;
    }

    showMainMenu() {
        this.state = 'MENU';
        if (this.timerInterval) clearInterval(this.timerInterval);

        this.dom.playerModal.classList.add('hidden');
        this.dom.leaderboardModal.classList.add('hidden');
        this.dom.helpModal.classList.add('hidden');
        this.dom.gameOverModal.classList.add('hidden');
        this.dom.ringStatusOverlay.classList.add('hidden');

        this.dom.mainMenuModal.classList.remove('hidden');

        const activePlayer = this.playerMgr.getActivePlayer();
        this.dom.playerNameDisplay.textContent = activePlayer ? activePlayer.name : 'GUEST';
    }

    openPlayerModal() {
        const players = this.playerMgr.getPlayers();
        this.dom.selectExistingPlayer.innerHTML = '<option value="">-- Chọn người chơi sẵn có --</option>';

        players.forEach(p => {
            const opt = document.createElement('option');
            opt.value = p.id;
            opt.textContent = `${p.name} | ${p.highScore}đ - Lv${p.maxLevel}`;
            if (p.id === this.playerMgr.activePlayerId) {
                opt.selected = true;
            }
            this.dom.selectExistingPlayer.appendChild(opt);
        });

        this.dom.playerModal.classList.remove('hidden');
    }

    openLeaderboardModal() {
        const leaderboard = this.playerMgr.getLeaderboard();
        this.dom.leaderboardTbody.innerHTML = '';

        if (leaderboard.length === 0) {
            this.dom.leaderboardTbody.innerHTML = '<tr><td colspan="4" style="text-align:center; color:#64748b;">Chưa có dữ liệu người chơi</td></tr>';
        } else {
            leaderboard.forEach((p, idx) => {
                const tr = document.createElement('tr');
                const rankClass = idx < 3 ? `rank-${idx + 1}` : '';
                tr.innerHTML = `
                    <td><span class="rank-badge ${rankClass}">${idx + 1}</span></td>
                    <td><strong>${p.name}</strong></td>
                    <td style="color:#f5d020; font-weight:700;">${p.highScore}</td>
                    <td>Lv ${p.maxLevel}</td>
                `;
                this.dom.leaderboardTbody.appendChild(tr);
            });
        }

        this.dom.leaderboardModal.classList.remove('hidden');
    }

    startLevel(levelIndex) {
        this.sound.startBGM();

        this.currentLevelIndex = levelIndex;
        const levels = this.getCurrentLevels();
        const levelData = levels[levelIndex] || levels[0];

        this.rings = levelData.rings.map((rData, idx) => new Ring(rData, idx));
        this.groups = levelData.groups || [[0]];
        this.activeGroupIndex = 0;

        this.combo = 1;
        this.lives = CONFIG.MAX_LIVES;
        this.mistakes = 0;
        this.timer = 0;
        this.state = 'PLAYING';

        this.updateSpinningStates();

        this.dom.mainMenuModal.classList.add('hidden');
        this.dom.gameOverModal.classList.add('hidden');
        this.dom.ringStatusOverlay.classList.remove('hidden');

        if (this.timerInterval) clearInterval(this.timerInterval);
        this.timerInterval = setInterval(() => {
            if (this.state === 'PLAYING') {
                this.timer++;
            }
        }, 1000);

        this.updateHUD();
    }

    getActiveGroup() {
        return this.groups[this.activeGroupIndex] || [];
    }

    updateSpinningStates() {
        const activeSet = new Set(this.getActiveGroup());
        this.rings.forEach((ring, idx) => {
            if (ring.locked) {
                ring.isSpinning = false;
            } else {
                ring.isSpinning = activeSet.has(idx);
            }
        });
    }

    updateHUD() {
        const levels = this.getCurrentLevels();
        const levelData = levels[this.currentLevelIndex];
        const activePlayer = this.playerMgr.getActivePlayer();

        this.dom.playerNameDisplay.textContent = activePlayer ? activePlayer.name : 'GUEST';
        this.dom.levelDisplay.textContent = `LV ${levelData.id}`;
        this.dom.scoreDisplay.textContent = this.score.toString().padStart(4, '0');
        this.dom.comboDisplay.textContent = `x${this.combo}`;

        let heartsStr = '';
        for (let i = 0; i < CONFIG.MAX_LIVES; i++) {
            heartsStr += i < this.lives ? '❤️' : '🖤';
        }
        this.dom.livesDisplay.textContent = heartsStr;

        const activeGroup = this.getActiveGroup();
        const displayGroupStr = activeGroup.map(i => i + 1).join(' & ');
        this.dom.activeRingIndex.textContent = `Vòng ${displayGroupStr} / ${this.rings.length}`;
    }

    attemptUnlock() {
        this.sound.startBGM();

        if (this.state !== 'PLAYING') return;

        const activeGroup = this.getActiveGroup();
        if (activeGroup.length === 0) return;

        const allHit = activeGroup.every(ringIdx => this.rings[ringIdx].checkHit());

        if (allHit) {
            activeGroup.forEach(ringIdx => {
                const ring = this.rings[ringIdx];
                ring.setLocked(true);
                this.createUnlockParticles(ring.radius);
            });

            this.sound.playLockSuccess();
            this.score += 200 * activeGroup.length * this.combo;
            this.combo++;

            this.activeGroupIndex++;

            if (this.activeGroupIndex >= this.groups.length) {
                this.handleLevelComplete();
            } else {
                this.updateSpinningStates();
                this.updateHUD();
            }
        } else {
            this.sound.playError();
            this.screenShakeTime = 0.3;
            this.combo = 1;

            this.score = Math.max(0, this.score - CONFIG.MISS_PENALTY_SCORE);
            this.mistakes++;
            this.lives--;

            this.updateHUD();

            if (this.mistakes >= CONFIG.MAX_LIVES || this.lives <= 0) {
                this.handleGameOver("Bạn đã bấm sai 3 lần quá số lượt cho phép!");
            }
        }
    }

    handleGameOver(reasonMessage) {
        this.state = 'GAME_OVER';
        if (this.timerInterval) clearInterval(this.timerInterval);

        const activePlayer = this.playerMgr.getActivePlayer();
        if (activePlayer) {
            this.playerMgr.updatePlayerStats(this.score, CONFIG.LEVELS[this.currentLevelIndex].id);
        }

        setTimeout(() => {
            this.dom.gameOverModal.classList.remove('hidden');
            this.dom.goModalTitle.textContent = "THUA CUỘC! (GAME OVER)";
            this.dom.goModalTitle.className = "modal-title game-over-title";
            this.dom.goModalDesc.textContent = reasonMessage || "Rất tiếc! Bạn đã hết lượt thử.";
            
            this.dom.goMPlayer.textContent = activePlayer ? activePlayer.name : 'Guest';
            this.dom.goMScore.textContent = this.score;
            this.dom.goMTime.textContent = Utils.formatTime(this.timer);
            this.dom.goMMistakes.textContent = `${this.mistakes}/${CONFIG.MAX_LIVES}`;

            this.dom.goBtnNext.textContent = "CHƠI LẠI MÀN NÀY";
        }, 300);
    }

    handleLevelComplete() {
        this.state = 'LEVEL_COMPLETE';
        this.sound.playWin();

        if (this.timerInterval) clearInterval(this.timerInterval);

        const activePlayer = this.playerMgr.getActivePlayer();
        this.playerMgr.updatePlayerStats(this.score, CONFIG.LEVELS[this.currentLevelIndex].id);

        const victoryPhrases = [
            "Giảm sức mạnh con tướng này giúp em!",
            "Trí thông minh giản dị.",
            "Đúng là hệ điều hành lỗi, nhưng lỗi này thông minh quá.",
            "Đúng là con zai của ta !",
            "Đỉnh thế này thì nhà phát hành game chuẩn bị nerf (giảm sức mạnh) là cái chắc.",
            "Ê, hack game đúng không? Khai thật đi chứ người bình thường sao làm được thế này!",
            "Gánh team còng cả lưng, để em mua cho anh/chị cái đai chống gù nhé.",
            "Chúa tể chạy deadline, chiến thần xử lý khủng hoảng!",
            "Năng lực này là do lỗi hệ thống à? Sao mượt mà một cách vô lý thế nhờ!",
            "Gì mà đỉnh cả cụm, nghệ cả củ, giỏi cả vũ trụ thế này!",
            "Bàn tay này chắc chắn được kích hoạt chế độ 'bàn tay Midas', chạm vào đâu là thành vàng ở đó.",
            "Xin lỗi vì đã thở chung bầu không khí với một người quá xuất chúng như thế này.",
            "Bộ não này chắc chắn chạy chip siêu máy tính của NASA chứ người thường không làm thế.",
            "Gen gì mà trội kinh khủng khiếp vậy, chia bớt cho người ta chút đi!",
            "Biết là giỏi rồi nhưng cũng vừa vừa phai phải thôi, chừa đường sống cho người khác với.",
            "Lần sau làm dở đi một tí nhé, giỏi quá nhìn phát ghét á!",
            "Giỏi thế này rồi ai làm lại anh/chị nữa, tính một mình độc chiếm thế giới hay gì?",
            "Bớt thông minh lại giùm cái, lóa hết cả mắt em rồi."
        ];

        const randomPhrase = victoryPhrases[Math.floor(Math.random() * victoryPhrases.length)];

        setTimeout(() => {
            this.dom.gameOverModal.classList.remove('hidden');
            this.dom.goModalTitle.textContent = "GIẢI MÃ THÀNH CÔNG!";
            this.dom.goModalTitle.className = "modal-title";
            this.dom.goModalDesc.textContent = randomPhrase;
            
            this.dom.goMPlayer.textContent = activePlayer ? activePlayer.name : 'Guest';
            this.dom.goMScore.textContent = this.score;
            this.dom.goMTime.textContent = Utils.formatTime(this.timer);
            this.dom.goMMistakes.textContent = `${this.mistakes}/${CONFIG.MAX_LIVES}`;

            this.dom.goBtnNext.textContent = "MÀN TIẾP THEO";
        }, 400);
    }

    createUnlockParticles(ringRadius) {
        const cx = CONFIG.CANVAS_BASE_SIZE / 2;
        const cy = CONFIG.CANVAS_BASE_SIZE / 2;
        const count = 35;
        const pColor = CONFIG.COLORS.cyan;

        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2;
            const speed = 2 + Math.random() * 4.5;
            this.particles.push({
                x: cx + ringRadius * Math.cos(angle),
                y: cy + ringRadius * Math.sin(angle),
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                color: pColor,
                size: 2 + Math.random() * 3,
                life: 1.0
            });
        }
    }

    update(deltaTime) {
        if (this.state === 'PLAYING') {
            this.rings.forEach(ring => ring.update(deltaTime));
        }

        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.life -= deltaTime * 2;
            if (p.life <= 0) {
                this.particles.splice(i, 1);
            }
        }

        if (this.screenShakeTime > 0) {
            this.screenShakeTime -= deltaTime;
        }
    }

    render(ctx) {
        const size = CONFIG.CANVAS_BASE_SIZE;
        const cx = size / 2;
        const cy = size / 2;

        ctx.save();

        if (this.screenShakeTime > 0) {
            const shakeX = (Math.random() - 0.5) * 12;
            const shakeY = (Math.random() - 0.5) * 12;
            ctx.translate(shakeX, shakeY);
        }

        ctx.clearRect(0, 0, size, size);

        this.renderSpokes(ctx, cx, cy);
        this.renderCenterCore(ctx, cx, cy);

        const activeSet = new Set(this.getActiveGroup());
        this.rings.forEach((ring, idx) => {
            const isActiveRing = activeSet.has(idx) && this.state === 'PLAYING';
            ring.render(ctx, cx, cy, isActiveRing, this.imageLoader);
        });

        this.renderParticles(ctx);

        ctx.restore();
    }

    renderSpokes(ctx, cx, cy) {
        const count = CONFIG.SPOKES_COUNT;
        const outerRadius = 240;

        ctx.save();
        for (let i = 0; i < count; i++) {
            const angleRad = (i / count) * Math.PI * 2;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + outerRadius * Math.cos(angleRad), cy + outerRadius * Math.sin(angleRad));
            ctx.strokeStyle = this.currentTheme === CONFIG.THEMES.FRUIT ? 'rgba(112, 224, 0, 0.1)' : CONFIG.COLORS.spokeLine;
            ctx.lineWidth = 1;
            ctx.stroke();
        }
        ctx.restore();
    }

    renderCenterCore(ctx, cx, cy) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, CONFIG.INNER_CENTER_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = this.currentTheme === CONFIG.THEMES.FRUIT ? 'rgba(112, 224, 0, 0.1)' : 'rgba(0, 245, 212, 0.08)';
        ctx.strokeStyle = CONFIG.COLORS.cyan;
        ctx.lineWidth = 1.5;
        ctx.shadowColor = CONFIG.COLORS.cyan;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(cx, cy, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = CONFIG.COLORS.cyan;
        ctx.fill();
        ctx.restore();
    }

    renderParticles(ctx) {
        ctx.save();
        this.particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = Math.max(0, p.life);
            ctx.fill();
        });
        ctx.restore();
    }
}

if (typeof window !== 'undefined') {
    window.GameManager = GameManager;
}
