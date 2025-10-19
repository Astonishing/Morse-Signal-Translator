const morseCode = {
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 
  'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
  'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
  'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
  'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
  'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
  '3': '...--', '4': '....-', '5': '.....', '6': '-....',
  '7': '--...', '8': '---..', '9': '----.', ' ': '/'
};


const textCode = Object.fromEntries(
  Object.entries(morseCode).map(([letter, code]) => [code, letter])
);

// English to morseee
function toMorse() {
  const input = document.getElementById('eng-input').value.toUpperCase();
  const output = document.getElementById('morse-output');

  const translated = input
    .split('')
    .map(ch => morseCode[ch] || '')
    .join(' ');

  output.value = translated || "⚠️ Enter valid English text!";
}

// Morse to Eng
function toEnglish() {
  const input = document.getElementById('morse-input').value.trim();
  const output = document.getElementById('eng-output');

  const translated = input
    .split(' ')
    .map(code => textCode[code] || '')
    .join('');

  output.value = translated || "⚠️ Enter valid Morse code!";
}
