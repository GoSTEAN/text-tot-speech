const voiceSelect = document.getElementById('voice-select');

const synth = window.speechSynthesis;

function addVoicesToSelect() {
  const voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option  = document.createElement('option');
    option.textContent = `${voices[i].name}`;

    if (voices[i].default) {
      option.textContent += ' - DEFAULT'
    }

    option.setAttribute('data-lang')
  }
}

function onSubmit(e) {
  e.preventDefault();

  const textInput = document.getElementById('text-input');

  const  utterThis = new SpeechSynthesisUtterance(textInput.value);

  synth.speak(utterThis);
}

document.getElementById('form').addEventListener('submit', onSubmit);








