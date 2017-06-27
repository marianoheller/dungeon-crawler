
export function startGame() {
    return {
        type: 'GAME_HAS_STARTED',
        gameHasStarted: true,
    };
}

export function finishGame() {
    return {
        type: 'GAME_HAS_FINISHED',
        gameHasStarted: false,
    };
}

export function keyPress(key) {
    return {
        type: 'KEY_PRESS',
        key: key,
    };
}