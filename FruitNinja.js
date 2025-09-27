const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");
const scoreEl=document.getElementById("score");
const menu=document.getElementById("menu");
const gameover=document.getElementById("gameover");
const menuFruits=document.getElementById("menuFruits");
const overFruits=document.getElementById("overFruits");
const fruitPopupContainer=document.getElementById("fruitPopupContainer");
const howModal=document.getElementById("howModal");
const closeHow=document.getElementById("closeHow");

let fruits=[],slashes=[],score=0,gameRunning=false;
const fruitEmojis=["🍎","🍊","🍋","🍉","🍇","🍒","🥝","🍓"];
const bombEmoji="💣";

let spawnLevels={fruitAtStart:1,fruitAt5:2,fruitAt10:3,bombStartScore:5,bombDoubleScore:20};
let gravity=0.18;let particles=[];let lastSpawn=0;

function startGame(){
  menu.style.display="none";
  gameover.style.display="none";
  resetGame();
  gameRunning=true;
  requestAnimationFrame(loop);
}

function resetGame(){
  fruits=[];
  slashes=[];
  score=0;
  scoreEl.textContent=score;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles=[];
}

function endGame(){
  gameRunning=false;
  gameover.style.display="flex";
  triggerFloatingFruits(overFruits);
}

function spawnFruits(){
  let maxFruits=spawnLevels.fruitAtStart;
  if(score>=10) maxFruits=spawnLevels.fruitAt10;
  else if(score>=5) maxFruits=spawnLevels.fruitAt5;

  let count=Math.floor(Math.random()*maxFruits)+1;
  for(let i=0;i<count;i++){
    let x=Math.random()*280+30;
    let vy=-8-Math.random()*3;
    let emoji=fruitEmojis[Math.floor(Math.random()*fruitEmojis.length)];
    fruits.push({x:x,y:canvas.height,r:27,vy:vy,vx:(Math.random()*2-1)*2,emoji,isBomb:false});
  }

  if(score>=spawnLevels.bombStartScore){
    let bombChance=Math.random();
    if(bombChance<0.3){
      fruits.push({x:Math.random()*280+30,y:canvas.height,r:28,vy:-7-Math.random()*2,vx:(Math.random()*2-1)*2,emoji:bombEmoji,isBomb:true});
    }
    if(score>=spawnLevels.bombDoubleScore && bombChance<0.15){
      fruits.push({x:Math.random()*280+30,y:canvas.height,r:28,vy:-7-Math.random()*2,vx:(Math.random()*2-1)*2,emoji:bombEmoji,isBomb:true});
    }
  }
}

function drawFruits(){
  ctx.font="34px serif";
  ctx.textAlign="center";
  ctx.textBaseline="middle";
  fruits.forEach(f=>{ctx.fillText(f.emoji,f.x,f.y);});
}

function updateFruits(){
  fruits.forEach(f=>{f.x+=f.vx; f.y+=f.vy; f.vy+=gravity;});
  fruits=fruits.filter(f=>f.y<canvas.height+60);
}

function drawSlashes(){
  ctx.save();
  ctx.strokeStyle="rgba(255,255,255,0.95)";
  ctx.lineWidth=3;
  ctx.beginPath();
  for(let i=0;i<slashes.length;i++){
    let p=slashes[i];
    if(i===0) ctx.moveTo(p.x,p.y);
    else ctx.lineTo(p.x,p.y);
  }
  ctx.stroke();
  ctx.restore();
}

function updateSlashes(){
  slashes=slashes.map(p=>({...p,life:p.life-1}));
  slashes=slashes.filter(p=>p.life>0);
}

function spawnParticles(x,y,isBomb,emoji){
  const symbols=isBomb?["💥","💣","🔥","💫"]:["💥","✨","🔥","🍉","🍒","🍓"];
  let count=isBomb?28:12;
  for(let i=0;i<count;i++){
    const sym=symbols[Math.floor(Math.random()*symbols.length)];
    particles.push({x:x,y:y,vx:(Math.random()-0.5)*6,vy:(Math.random()-0.5)*6,life:40,emoji:sym});
  }
  if(!isBomb) fruitPopup(emoji,x,y);
}

function updateParticles(){
  particles.forEach(p=>{p.x+=p.vx; p.y+=p.vy; p.vy+=0.1; p.life--;});
  particles=particles.filter(p=>p.life>0);
}

function drawParticles(){
  ctx.font="20px serif";
  ctx.textAlign="center";
  ctx.textBaseline="middle";
  particles.forEach(p=>{
    ctx.globalAlpha=p.life/40;
    ctx.fillText(p.emoji,p.x,p.y);
  });
  ctx.globalAlpha=1;
}

function checkCollisions(mx,my){
  for(let i=fruits.length-1;i>=0;i--){
    let f=fruits[i];
    let dx=mx-f.x, dy=my-f.y;
    if(Math.sqrt(dx*dx+dy*dy)<f.r){
      fruits.splice(i,1);
      spawnParticles(f.x,f.y,f.isBomb,f.emoji);
      if(f.isBomb){ endGame(); return; }
      else{ score++; scoreEl.textContent=score; }
    }
  }
}

function loop(timestamp){
  if(!gameRunning) return;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  if(timestamp-lastSpawn>1000){ spawnFruits(); lastSpawn=timestamp; }
  updateFruits();
  drawFruits();
  updateSlashes();
  drawSlashes();
  updateParticles();
  drawParticles();
  requestAnimationFrame(loop);
}

canvas.addEventListener("mousemove", e=>{
  if(!gameRunning) return;
  let rect=canvas.getBoundingClientRect();
  let x=e.clientX-rect.left, y=e.clientY-rect.top;
  slashes.push({x,y,life:12});
  checkCollisions(x,y);
});

canvas.addEventListener("touchmove", e=>{
  if(!gameRunning) return;
  let rect=canvas.getBoundingClientRect();
  let t=e.touches[0];
  let x=t.clientX-rect.left, y=t.clientY-rect.top;
  slashes.push({x,y,life:12});
  checkCollisions(x,y);
});

function fruitPopup(emoji,x,y){
  const el=document.createElement("div");
  el.className="fruit-burst";
  el.style.left=x+"px";
  el.style.top=y+"px";
  el.textContent=emoji;
  fruitPopupContainer.appendChild(el);
  setTimeout(()=>el.remove(),900);
}

function triggerFloatingFruits(container){
  container.innerHTML="";
  for(let i=0;i<10;i++){
    const s=document.createElement("span");
    s.textContent=fruitEmojis[Math.floor(Math.random()*fruitEmojis.length)];
    s.style.left=Math.random()*100+"%";
    s.style.top=Math.random()*80+"%";
    container.appendChild(s);
  }
  setTimeout(()=>{container.innerHTML="";},1400);
}

document.getElementById("startBtn").addEventListener("click",()=>{startGame();});
document.getElementById("restartBtn").addEventListener("click",()=>{startGame();});
document.getElementById("homeBtn").addEventListener("click",()=>{gameover.style.display="none";menu.style.display="flex";});
document.getElementById("howBtn").addEventListener("click",()=>{howModal.style.display="flex";});
closeHow.addEventListener("click",()=>{howModal.style.display="none";});
