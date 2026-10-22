const board = document.getElementById("bingoboard");
const button = document.getElementById("generateButton");

const classicalMusic = [
  "Mozart",
  "Violin",
  "Beethoven",
  "Piano",
  "Bach",
  "Cello",
  "Chopin",
  "Flute",
  "Vivaldi",
  "Trumpet",
  "Tchaikovsky",
  "Harp",
  "Liszt",
  "Clarinet",
  "Handel",
  "Viola",
  "Debussy",
  "Oboe",
  "Haydn",
  "Trombone",
  "Brahms",
  "Organ",
  "Schubert",
  "Bassoon",
  "Ravel",
  "Tuba",
  "Piccolo",
  "Schumann",
  "Grieg",
  "Guitar",
  "Horns",
  "Xylophone",
  "Mendelssohn",
  "Mandolin",
  "Rachmaninoff",
  "Bass",
  "Harpsichord",
  "Dvorak",
  "Cymbals",
  "Prokofiev",
  "Saxophone",
  "Double Bass",
  "French Horn",
  "Shostakovich",
  "Sibelius",
];

function hasDuplicates(arr) {
  return new Set(arr).size !== arr.length;
}

function generate(){

    
}
button.addEventListener("click", generate);