const board = document.getElementById("bingoBoard");
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
    let copyArray = [...classicalMusic]; 
    board.innerHTML = ""; 
    for (let i = classicalMusic.length-1; i>0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [copyArray[i], copyArray[j]] = [copyArray[j], copyArray[i]];
    }
    copyArray.slice(0, 25).forEach((item, index) => {
    const box = document.createElement("div");

    if (index === 12) {
        box.textContent = "FREE";
        box.classList.add("free");
    } else {
        box.textContent = item;
    }

    box.classList.add("box");
    board.appendChild(box);
});

}
button.addEventListener("click", generate);