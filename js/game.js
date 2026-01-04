const animes = [
    "Naruto",
    "One Piece",
    "Bleach",
    "Attack on Titan",
    "Death Note"
];

let score = 0;
let path = 1;

const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const scoreEl = document.getElementById("score");
const pathEl = document.getElementById("path");
const statusEl = document.getElementById("status");

function randomAnime() {
    return animes[Math.floor(Math.random() * animes.length)];
}

let current1, current2;

function newRound() {
    current1 = randomAnime();
    current2 = Math.random() < 0.5 ? current1 : randomAnime();

    card1.innerText = current1;
    card2.innerText = current2;

    statusEl.innerText = "";
}

document.getElementById("matchBtn").addEventListener("click", () => {
    if (current1 === current2) {
        score += 10;
        statusEl.innerText = "✅ TO‘G‘RI!";
    } else {
        score -= 5;
        statusEl.innerText = "❌ XATO!";
    }

    if (score >= path * 50) {
        path++;
        score = 0;
        statusEl.innerText = "🚀 KEYINGI YO‘L!";
    }

    scoreEl.innerText = score;
    pathEl.innerText = path;

    newRound();
});

newRound();
