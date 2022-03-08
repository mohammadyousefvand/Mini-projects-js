const textarea = document.querySelector("textarea"),
    voiceList = document.querySelector("select"),
    speechBtn = document.querySelector("button");

let sound = speechSynthesis,
    isSpeaking = true;

voiseHandler()

function voiseHandler() {
    for (let voise of sound.getVoices()) {
        let selected = voise.name === 'Google US English' ? 'selected' : ''
        let optionElem = `<option value="${voise.name}" ${selected}>${voise.name} (${voise.lang})</option>`
        voiceList.insertAdjacentHTML('beforeend', optionElem)
    }
}
sound.addEventListener('voiceschanged', voiseHandler)

function textSpeechHandler(text) {
    let textSpeech = new SpeechSynthesisUtterance(text)
    console.log(textSpeech)
    for (let voise of sound.getVoices()) {
        if (voise.name === voiceList.value) {
            textSpeech.voice = voise
        }
    }
    sound.speak(textSpeech)
}

speechBtn.addEventListener('click', function (e) {
    e.preventDefault()
    if (textarea.value !== '') {
        if (!sound.speaking) {
            textSpeechHandler(textarea.value)
        }
    }
})