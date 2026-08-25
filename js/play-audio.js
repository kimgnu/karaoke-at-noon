function getParams(paramNames) {
    const urlParams = new URLSearchParams(window.location.search);
    let obj = {};
    for (let i = 0; i < paramNames.length; i++) {
        let key = paramNames[i];
        let value = urlParams.get(key);
        obj[key] = value;
    }
    return obj;
}

function renderTitle(title) {
    let lines = title.split(" ")
    let container = document.querySelector("#title-wrapper");
    container.innerHTML = `<h3></h3><h1>${lines[0] || ""}</h1><h3>${lines[1] || ""}</h3>`
}

function playAudio(audiofile) {
    let filenames = audiofile.split(".")
    let ext = filenames[filenames.length - 1];
    let source = `<source src="${audiofile}" type="audio/${ext}">`;
    let audio = document.querySelector("#audio-wrapper audio");
    audio.innerHTML = source;
}

window.onload = function() {
    let { title, audio } = getParams(['title', 'audio']);
    renderTitle(title);
    playAudio(audio);
}
