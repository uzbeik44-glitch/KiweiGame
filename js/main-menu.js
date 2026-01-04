const pathsGrid = document.getElementById('paths-grid');

// Yo‘llar soni
const totalPaths = 99;

// Foydalanuvchi qaysi yo‘lga unlock qildi (example)
let unlockedPath = 10; 

// Yo‘l buttonlarini yaratish
for(let i=1; i<=totalPaths; i++){
  const btn = document.createElement('button');
  btn.textContent = `${i}-yo‘l`;
  btn.classList.add('path-btn');
  if(i > unlockedPath) btn.classList.add('locked');
  btn.addEventListener('click', ()=> {
    if(i > unlockedPath){
      alert("This path is locked!");
      return;
    }
    alert(`You selected path ${i}. Game will start!`);
    // Bu yerga o‘yinni chaqirish funksiyasi yoziladi
  });
  pathsGrid.appendChild(btn);
}

// Asosiy menu tugmalari
document.getElementById('play-game-btn').addEventListener('click', ()=>{
  alert("Play Game pressed! Choose your path to start.");
});
document.getElementById('daily-reward-btn').addEventListener('click', ()=>{
  alert("Daily Reward opened!");
});
document.getElementById('leaderboard-btn').addEventListener('click', ()=>{
  alert("Leaderboard opened!");
});
document.getElementById('settings-btn').addEventListener('click', ()=>{
  alert("Settings menu!");
});
document.getElementById('help-btn').addEventListener('click', ()=>{
  alert("Help menu!");
});
document.getElementById('exit-btn').addEventListener('click', ()=>{
  alert("Exit clicked! Back to main site.");
});
