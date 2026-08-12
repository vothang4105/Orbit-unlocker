/**
 * Orbit Unlocker - Web Audio API Sound Generator & Background Music System
 * Supports afWlg9a8kLTH.128.mp3 BGM with Sync Toggle (Mute/Unmute)
 */

class SoundSystem {
    constructor() {
        this.ctx = null;
        this.muted = false;
        this.initialized = false;

        // Background Music (BGM) setup
        try {
            this.bgm = new Audio('Sound/afWlg9a8kLTH.128.mp3');
            this.bgm.loop = true;
            this.bgm.volume = 0.35;
            this.bgm.preload = 'auto';
        } catch (e) {
            console.warn("Audio element loading failed:", e);
            this.bgm = null;
        }

        // Auto-bind first user interaction to unlock browser autoplay policy
        this.bindUserInteraction();
    }

    /**
     * Unlock AudioContext and BGM on first user gesture (click/keypress/touch)
     */
    bindUserInteraction() {
        const unlockAudio = () => {
            this.init();
            this.ensureResume();
            if (!this.muted && this.bgm && this.bgm.paused) {
                this.startBGM();
            }
        };

        window.addEventListener('click', unlockAudio, { once: true });
        window.addEventListener('keydown', unlockAudio, { once: true });
        window.addEventListener('pointerdown', unlockAudio, { once: true });
        window.addEventListener('touchstart', unlockAudio, { once: true });
    }

    init() {
        if (this.initialized) return;
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (AudioCtx) {
                this.ctx = new AudioCtx();
                this.initialized = true;
            }
        } catch (e) {
            console.warn("Web Audio API not supported:", e);
        }
    }

    ensureResume() {
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    /**
     * Start playing background music if not muted
     */
    startBGM() {
        this.init();
        this.ensureResume();
        if (this.muted || !this.bgm) return;

        if (this.bgm.paused) {
            this.bgm.play().catch(err => {
                console.log("BGM playback waiting for user interaction:", err);
            });
        }
    }

    /**
     * Pause background music
     */
    pauseBGM() {
        if (this.bgm && !this.bgm.paused) {
            this.bgm.pause();
        }
    }

    /**
     * Toggle Mute/Unmute for BOTH SFX & BGM simultaneously
     */
    toggleMute() {
        this.muted = !this.muted;
        if (this.muted) {
            this.pauseBGM();
        } else {
            this.startBGM();
        }
        return this.muted;
    }

    // Mechanical Rotate / UI Click Sound
    playClick() {
        if (this.muted) return;
        this.init();
        this.ensureResume();
        if (!this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.04);

        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.04);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.04);
    }

    // Ring Lock Success Chime
    playLockSuccess() {
        if (this.muted) return;
        this.init();
        this.ensureResume();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const frequencies = [523.25, 659.25, 783.99]; // C5, E5, G5

        frequencies.forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + idx * 0.06);

            gain.gain.setValueAtTime(0, now + idx * 0.06);
            gain.gain.linearRampToValueAtTime(0.2, now + idx * 0.06 + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.25);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now + idx * 0.06);
            osc.stop(now + idx * 0.06 + 0.25);
        });
    }

    // Hit Error / Misalignment Buzz
    playError() {
        if (this.muted) return;
        this.init();
        this.ensureResume();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.setValueAtTime(110, now + 0.1);

        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.25);
    }

    // Stage Clear Victory Fanfare
    playWin() {
        if (this.muted) return;
        this.init();
        this.ensureResume();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const notes = [440, 554.37, 659.25, 880]; // A4, C#5, E5, A5

        notes.forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + idx * 0.08);

            gain.gain.setValueAtTime(0.25, now + idx * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.4);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now + idx * 0.08);
            osc.stop(now + idx * 0.08 + 0.4);
        });
    }
}

if (typeof window !== 'undefined') {
    window.SoundSystem = SoundSystem;
}
