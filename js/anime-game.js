const grid = document.getElementById('game-grid');
const timerEl = document.getElementById('timer');
const scoreEl = document.getElementById('score');
const endScreen = document.getElementById('end-screen');
const gameMenu = document.getElementById('game-menu');

let score=0, combo=0, level=1, time=60;
let firstCard=null, secondCard=null;
let gameActive=true, endShown=false;
const cards = ['a1.png','a2.png','a3.png','a4.png','a5.png','a6.png','a7.png','a8.png','a9.png'];

// GRID yaratish
function shuffle(arr){ return arr.sort(()=>Math.random()-0.5); }
function createGrid(){
  const shuffled = shuffle([...cards,...cards]);
  shuffled.forEach(img=>{
    const card = document.createElement('div');
    card.classList.add('card'); card.dataset.img = img;
    const front=document.createElement('img'); front.src='images/back.png'; front.classList.add('front');
    const back=document.createElement('img'); back.src=`images/${img}`; back.classList.add('back');
    card.appendChild(front); card.appendChild(back);
    card.addEventListener('click', flipCard);
    grid.appendChild(card);
  });
}

// Karta flip
function flipCard(){
  if(!gameActive) return;
  if(this.classList.contains('flipped') || secondCard) return;
  this.classList.add('flipped');
  if(!firstCard) firstCard=this; else { secondCard=this; checkMatch(); }
}

// Match tekshirish
function checkMatch(){
  if(firstCard.dataset.img===secondCard.dataset.img){
    score+=50; combo+=1; scoreEl.textContent=`Score: ${score}`; sparkles(firstCard,secondCard); resetCards();
  }else{
    combo=0; firstCard.classList.add('mismatch'); secondCard.classList.add('mismatch'); shake(firstCard,secondCard);
    setTimeout(()=>{ firstCard.classList.remove('flipped','mismatch'); secondCard.classList.remove('flipped','mismatch'); resetCards(); },800);
  }
  if(document.querySelectorAll('.card:not(.flipped)').length===0) endGame();
}

// Sparkles va shake
function sparkles(c1,c2){ c1.style.boxShadow='0 0 20px gold'; c2.style.boxShadow='0 0 20px gold'; setTimeout(()=>{c1.style.boxShadow=''; c2.style.boxShadow='';},500);}
function shake(c1,c2){ c1.classList.add('shake'); c2.classList.add('shake'); setTimeout(()=>{c1.classList.remove('shake'); c2.classList.remove('shake');},500);}
function resetCards(){ firstCard=null; secondCard=null;}

// Timer
function startTimer(){
  const interval=setInterval(()=>{
    if(!gameActive){ clearInterval(interval); return; }
    time--; timerEl.textContent=`Time: ${time}`;
    if(time<=0){ clearInterval(interval); endGame(); }
  },1000);
}

// End Game
function endGame(){
  if(endShown) return; endShown=true; gameActive=false;
  endScreen.classList.add('active');
  document.getElementById('final-score').textContent=`Final Score: ${score}`;
  document.getElementById('best-combo').textContent=`Best Combo: x${combo}`;
  document.getElementById('reward').textContent=`+${Math.floor(score/10)} Anime Points!`;
}

// Buttons
document.getElementById('restart-btn').addEventListener('click',()=>location.reload());
document.getElementById('play-again').addEventListener('click',()=>location.reload());
document.getElementById('back-main').addEventListener('click',()=>window.location.href='index.html');

// Game Menu toggle
let gamePaused=false;
function toggleMenu(){ gamePaused=!gamePaused; gameMenu.classList.toggle('active'); gameActive=!gamePaused; }
document.addEventListener('keydown',(e)=>{ if(e.key==='Escape') toggleMenu(); });
document.getElementById('resume-btn').addEventListener('click',()=>toggleMenu());
document.getElementById('quit-btn').addEventListener('click',()=>window.location.href='index.html');
document.getElementById('settings-btn').addEventListener('click',()=>alert("Settings menu"));
document.getElementById('help-btn').addEventListener('click',()=>alert("Help menu"));

// Start game
createGrid(); startTimer();
