const startFreq = 65.406; // C2
const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const labels = ['Sa', 're', 'Re', 'ga', 'Ga', 'Ma', 'ma', 'Pa', 'dha', 'Dha', 'ni', 'Ni'];
const keys = [
  'z', 's', 'x', 'd', 'c', 'v', 'g', 'b', 'h', 'n', 'j', 'm', // Octave 2
  ',', 'l', '.', ';', '/', 'q', '2', 'w', '3', 'e', 'r', '5', // Octave 3 (wait, too few standard keys)
];

const allKeys = 'z s x d c v g b h n j m , l . ; / q 2 w 3 e r 5 t 6 y 7 u i 9 o 0 p [ = ] \\'.split(' ');
let result = [];
let freq = startFreq;
for (let i = 0; i < 37; i++) {
  const octave = Math.floor(i / 12) + 2;
  const noteIdx = i % 12;
  const noteName = notes[noteIdx] + octave;
  const type = noteName.includes('#') ? 'black' : 'white';
  const label = labels[noteIdx];
  const key = allKeys[i] || '';
  
  result.push(`  { name: '${noteName}', freq: ${freq.toFixed(2)}, key: '${key}', type: '${type}', label: '${label}' }`);
  freq *= Math.pow(2, 1/12);
}
console.log(result.join(',\n'));
