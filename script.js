/* ===================================
   PROJECT FOREVER ❤️
   PART 7/10
=================================== */

const PASSWORD = "1.1.2026";

const screens = document.querySelectorAll(".screen");

const loader = document.getElementById("loader");

const music = document.getElementById("music");

const error = document.getElementById("error");

/* -------------------------------
      LOADER
-------------------------------- */
window.addEventListener("load", function () {

const loader = document.getElementById("loader");

if(loader){

setTimeout(function(){

loader.style.display = "none";

},2000);

}

});


/* -------------------------------
      PASSWORD
-------------------------------- */

function checkPassword(){

const input = document

.getElementById("password")

.value

.trim();

if(input===PASSWORD){

changeScreen("screen2");

music.play().catch(()=>{});

}else{

error.innerHTML="❌ Wrong Password ❤️";

}

}

/* -------------------------------
      CHANGE SCREEN
-------------------------------- */

function changeScreen(id){

screens.forEach(screen=>{

screen.classList.remove("active");

});

document

.getElementById(id)

.classList

.add("active");

}

/* -------------------------------
      OPEN LETTER
-------------------------------- */

function openLetter(){

changeScreen("screen3");

}

/* -------------------------------
      FINAL SCREEN
-------------------------------- */

function showFinal(){

changeScreen("screen4");

}
/* ===================================
   PART 8/10
   LOVE LETTER + TYPEWRITER
=================================== */

const letter = `To My Babeeee ❤️

Shayad words kabhi itne nahi honge ki main bata paun ki tum meri life me kitni important ho.

Tum meri smile ka reason ho.
Meri peace ho.
Meri favourite person ho.

Har memory jo humne saath banayi hai...
woh meri zindagi ki sabse precious cheez hai.

Main bas itna chahta hu ki hum hamesha saath rahein.

No matter what happens...
I'll always choose you.

I Love You Forever. ❤️

Forever Yours,
Harshit ❤️`;

const typing = document.getElementById("typing");

let index = 0;

function startTyping(){

typing.innerHTML="";

index=0;

typeWriter();

}

function typeWriter(){

if(index < letter.length){

typing.innerHTML += letter.charAt(index);

index++;

setTimeout(typeWriter,35);

}

}

/* ------------------------
     ENVELOPE OPEN
-------------------------*/

const envelope = document.getElementById("envelope");

if(envelope){

envelope.addEventListener("click",()=>{

envelope.style.transform="scale(.8) rotate(-8deg)";

envelope.style.opacity=".4";

setTimeout(()=>{

document.getElementById("letter").style.display="block";

startTyping();

},600);

});

}

/* ------------------------
   HIDDEN HEART
-------------------------*/

const secretHeart=document.getElementById("secretHeart");

const hiddenMessage=document.getElementById("hiddenMessage");

if(secretHeart){

secretHeart.addEventListener("click",()=>{

hiddenMessage.style.display="block";

hiddenMessage.style.animation="fadeIn 1s";

});

}

/* ------------------------
   ENTER KEY
-------------------------*/

document
.getElementById("password")
.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

checkPassword();

}

});
/* ===================================
   PART 9/10
   PREMIUM EFFECTS
=================================== */

/* ---------- SCREEN FADE ---------- */

function fadeTo(nextScreen){

const current=document.querySelector(".screen.active");

current.style.opacity="0";

current.style.transform="scale(.95)";

setTimeout(()=>{

current.classList.remove("active");

const next=document.getElementById(nextScreen);

next.classList.add("active");

next.style.opacity="1";

next.style.transform="scale(1)";

},500);

}

/* ---------- BETTER MUSIC ---------- */

document.addEventListener("click",()=>{

if(music.paused){

music.play().catch(()=>{});

}

},{once:true});

/* ---------- HEART EXPLOSION ---------- */

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="999";

heart.style.transition="5s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-120vh) rotate(360deg)";

heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},5000);

}

setInterval(createHeart,700);

/* ---------- LOVE QUOTES ---------- */

const quotes=[

"Every heartbeat belongs to you ❤️",

"You are my favourite place.",

"Forever starts with us.",

"I'll always choose you.",

"You complete my world ❤️"

];

const quoteBox=document.getElementById("loveQuotes");

if(quoteBox){

let q=0;

setInterval(()=>{

quoteBox.innerHTML="<span>"+quotes[q]+"</span>";

q++;

if(q>=quotes.length){

q=0;

}

},4000);

}

/* ---------- FINAL MESSAGE ---------- */

function showFireworks(){

for(let i=0;i<25;i++){

setTimeout(createHeart,i*120);

}

}
/* ===================================
   PART 10/10
   FINAL POLISH
=================================== */

// Hide hidden message initially
if (hiddenMessage) {
    hiddenMessage.style.display = "none";
}

// Smooth scrolling
document.documentElement.style.scrollBehavior = "smooth";

// Show final heart burst
const finalHeart = document.getElementById("secretHeart");

if (finalHeart) {

    finalHeart.addEventListener("click", () => {

        showFireworks();

        finalHeart.style.transform = "scale(1.3)";

        setTimeout(() => {

            finalHeart.style.transform = "scale(1)";

        },500);

    });

}

// Disable right click (optional)
document.addEventListener("contextmenu",(e)=>{
e.preventDefault();
});

// Console message ❤️
console.log("Made With Love ❤️");
