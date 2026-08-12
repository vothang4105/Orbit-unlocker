/**
 * Orbit Unlocker - Player & Leaderboard Manager (localStorage)
 */

class PlayerManager {
    constructor() {
        this.STORAGE_KEY = 'orbit_unlocker_profiles';
        this.activePlayerId = null;
        this.players = this.loadPlayers();
    }

    loadPlayers() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error("Failed to load player profiles:", e);
            return [];
        }
    }

    savePlayers() {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.players));
        } catch (e) {
            console.error("Failed to save player profiles:", e);
        }
    }

    getPlayers() {
        return this.players;
    }

    getActivePlayer() {
        return this.players.find(p => p.id === this.activePlayerId) || null;
    }

    setActivePlayer(id) {
        this.activePlayerId = id;
    }

    addPlayer(name) {
        const trimmed = (name || '').trim();
        if (!trimmed) return null;

        // Check if player already exists
        let existing = this.players.find(p => p.name.toLowerCase() === trimmed.toLowerCase());
        if (existing) {
            this.activePlayerId = existing.id;
            return existing;
        }

        const newPlayer = {
            id: 'player_' + Date.now(),
            name: trimmed,
            highScore: 0,
            maxLevel: 1,
            totalGames: 0,
            createdAt: new Date().toLocaleDateString('vi-VN')
        };

        this.players.push(newPlayer);
        this.savePlayers();
        this.activePlayerId = newPlayer.id;
        return newPlayer;
    }

    updatePlayerStats(score, levelReached) {
        const player = this.getActivePlayer();
        if (!player) return;

        player.totalGames += 1;
        if (score > player.highScore) {
            player.highScore = score;
        }
        if (levelReached > player.maxLevel) {
            player.maxLevel = levelReached;
        }

        this.savePlayers();
    }

    getLeaderboard() {
        // Return players sorted by highScore descending
        return [...this.players].sort((a, b) => b.highScore - a.highScore);
    }
}

if (typeof window !== 'undefined') {
    window.PlayerManager = PlayerManager;
}
