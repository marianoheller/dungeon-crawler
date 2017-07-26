
export function startGame(dungeon, playerStats) {
    return {
        type: 'GAME_HAS_STARTED',
        gameHasStarted: true,
        dungeon: dungeon,
        playerStats: playerStats
    };
}

export function finishGame() {
    return {
        type: 'GAME_HAS_FINISHED',
        gameHasStarted: false,
    };
}

export function keyPress(afterKeyDungeon) {
    return {
        type: 'KEY_PRESS',
        afterKeyDungeon,
    };
}