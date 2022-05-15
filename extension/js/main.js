const keysPressed = [];

function handleKeyDown(e) {
    const key = e.key;
    saveKeyPressed(key);
    console.log(`[${keysPressed[keysPressed.length - 1].keyPressed}]`, keysPressed[keysPressed.length - 1].date);

}


function saveKeyPressed(keyPressed) {

    const key = {
        keyPressed,
        date: new Date(),
    }

    keysPressed.push(key);
}


window.addEventListener('keydown', handleKeyDown);