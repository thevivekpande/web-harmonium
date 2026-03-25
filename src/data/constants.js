export const NOTES = [
  { name: 'C2', freq: 65.41, key: 'z', type: 'white', label: 'Sa' },
  { name: 'C#2', freq: 69.30, key: 's', type: 'black', label: 're' },
  { name: 'D2', freq: 73.42, key: 'x', type: 'white', label: 'Re' },
  { name: 'D#2', freq: 77.78, key: 'd', type: 'black', label: 'ga' },
  { name: 'E2', freq: 82.41, key: 'c', type: 'white', label: 'Ga' },
  { name: 'F2', freq: 87.31, key: 'v', type: 'white', label: 'Ma' },
  { name: 'F#2', freq: 92.50, key: 'g', type: 'black', label: 'ma' },
  { name: 'G2', freq: 98.00, key: 'b', type: 'white', label: 'Pa' },
  { name: 'G#2', freq: 103.83, key: 'h', type: 'black', label: 'dha' },
  { name: 'A2', freq: 110.00, key: 'n', type: 'white', label: 'Dha' },
  { name: 'A#2', freq: 116.54, key: 'j', type: 'black', label: 'ni' },
  { name: 'B2', freq: 123.47, key: 'm', type: 'white', label: 'Ni' },
  { name: 'C3', freq: 130.81, key: ',', type: 'white', label: 'Sa' },
  { name: 'C#3', freq: 138.59, key: 'l', type: 'black', label: 're' },
  { name: 'D3', freq: 146.83, key: '.', type: 'white', label: 'Re' },
  { name: 'D#3', freq: 155.56, key: ';', type: 'black', label: 'ga' },
  { name: 'E3', freq: 164.81, key: '/', type: 'white', label: 'Ga' },
  { name: 'F3', freq: 174.61, key: 'q', type: 'white', label: 'Ma' },
  { name: 'F#3', freq: 185.00, key: '2', type: 'black', label: 'ma' },
  { name: 'G3', freq: 196.00, key: 'w', type: 'white', label: 'Pa' },
  { name: 'G#3', freq: 207.65, key: '3', type: 'black', label: 'dha' },
  { name: 'A3', freq: 220.00, key: 'e', type: 'white', label: 'Dha' },
  { name: 'A#3', freq: 233.08, key: 'r', type: 'black', label: 'ni' },
  { name: 'B3', freq: 246.94, key: '5', type: 'white', label: 'Ni' },
  { name: 'C4', freq: 261.63, key: 't', type: 'white', label: 'Sa' },
  { name: 'C#4', freq: 277.18, key: '6', type: 'black', label: 're' },
  { name: 'D4', freq: 293.66, key: 'y', type: 'white', label: 'Re' },
  { name: 'D#4', freq: 311.13, key: '7', type: 'black', label: 'ga' },
  { name: 'E4', freq: 329.63, key: 'u', type: 'white', label: 'Ga' },
  { name: 'F4', freq: 349.23, key: 'i', type: 'white', label: 'Ma' },
  { name: 'F#4', freq: 369.99, key: '9', type: 'black', label: 'ma' },
  { name: 'G4', freq: 392.00, key: 'o', type: 'white', label: 'Pa' },
  { name: 'G#4', freq: 415.30, key: '0', type: 'black', label: 'dha' },
  { name: 'A4', freq: 440.00, key: 'p', type: 'white', label: 'Dha' },
  { name: 'A#4', freq: 466.16, key: '[', type: 'black', label: 'ni' },
  { name: 'B4', freq: 493.88, key: '=', type: 'white', label: 'Ni' },
  { name: 'C5', freq: 523.25, key: ']', type: 'white', label: 'Sa' }
];

export const KEY_MAP = Object.fromEntries(NOTES.map(n => [n.key.toLowerCase(), n]));

export const RAGAS = [
  {
    id: 'free_play',
    name: 'Full Harmonium',
    time: 'Anytime',
    description: 'Explore the full spectrum of the Harmonium with all keys available. Perfect for experimenting, freestyling, and composing your own melodies.',
    scale: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
  },
  {
    id: 'bhairav',
    name: 'Bhairav',
    time: 'Pratah Kal (Morning)',
    description: 'Known for its profound, meditative, and devotional character. Characteristic use of softly oscillating Komal Rishabh (re) and Komal Dhaivat.',
    scale: ['C', 'C#', 'E', 'F', 'G', 'G#', 'B']
  },
  {
    id: 'yaman',
    name: 'Yaman',
    time: 'Ratri Pratham (Early Evening)',
    description: 'A romantic and peaceful Evening raga. Uses all pure notes except for a sharp (Teevra) Madhyam.',
    scale: ['C', 'D', 'E', 'F#', 'G', 'A', 'B']
  },
  {
    id: 'bhimpalasi',
    name: 'Bhimpalasi',
    time: 'Aparahna (Late Afternoon)',
    description: 'Evokes feelings of yearning and deep emotion. Characterized by flat (Komal) Ga and Ni.',
    scale: ['C', 'D#', 'F', 'G', 'A#']
  },
  {
    id: 'desh',
    name: 'Desh',
    time: 'Ratri Dwitiya (Late Evening)',
    description: 'A popular raga often expressing patriotism and monsoon joy. Incorporates dual Ni swaras prominently.',
    scale: ['C', 'D', 'E', 'F', 'G', 'A', 'A#', 'B']
  }
];

export const LESSONS = [
  {
    id: 'sargam',
    title: "The Sargam System",
    desc: "Learn the foundational 7 notes (Sa, Re, Ga).",
    content: "The Sargam system is the Indian equivalent of Solfege (Do-Re-Mi). The 7 notes are Shadja (Sa), Rishabh (Re), Gandhar (Ga), Madhyam (Ma), Pancham (Pa), Dhaivat (Dha), and Nishad (Ni). These natural notes (Shuddha Swaras) form the major scale. When playing the Harmonium, you anchor your melody around the Sa. Practice singing these notes as you press the keys to develop perfect pitch.",
    iconType: 'Music'
  },
  {
    id: 'meend',
    title: "Playing Techniques: Meend",
    desc: "Master the art of gliding between notes smoothly.",
    content: "Meend refers to a continuous glide from one musical note to another. Though naturally played on string instruments like the Sitar or bowed instruments, simulating Meend on the Harmonium involves very fast finger-rolling movements across the adjacent keys, creating an unbroken sonic bridge between the starting note and the destination. Practice sliding your index and middle finger from D (Re) back to C (Sa).",
    iconType: 'BookOpen'
  },
  {
    id: 'gamak',
    title: "Playing Techniques: Gamak",
    desc: "Learn to add heavy oscillations to your swaras.",
    content: "Gamak is an umbrella term for heavy, forceful oscillations applied to swaras. It gives the characteristic richness to Indian classical music. In Harmonium, you execute a Gamak by rapidly tapping the adjacent higher or lower key alongside the main note. This requires substantial finger independence. Start very slowly, oscillating between Sa and Re, then gradually increase the tempo.",
    iconType: 'BookOpen'
  },
  { 
    id: 'taals',
    title: "Introduction to Taals",
    desc: "Understanding the rhythmic cycles in Indian Classical music.",
    content: "Taal is the rhythmic cycle that underpins all classical compositions. The most common is Teental, consisting of 16 beats divided into 4 sections (4+4+4+4). Another common cycle is Dadra (6 beats, 3+3) and Keherwa (8 beats, 4+4). When practicing your Harmonium lessons, you should always tap your foot to the dominant beat (the Sam) to internalize the rhythmic cycle.",
    iconType: 'BookOpen'
  }
];
