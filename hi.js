var timer=60;
var score=0;
var hitrn=0;

function increaseScore(){
        score += 10;
        document.querySelector("#Skore").textContent=score;
}
function getNewHit(){
        hitrn =Math.floor(Math.random() * 10);
        document.querySelector("#Hit1").textContent =hitrn;
}
function makebubble(){
        var clutter = "";
        for(var i=1;i<=152;i++){
                var rn=Math.floor(Math.random()*10);
                clutter += `<div class="bubble">${rn}</div>`;
        }
        document.querySelector("#pbottom").innerHTML=clutter;
}

function runTimer(){
        var timers=setInterval(function (){
                if(timer>0){
                        timer--;
                        document.querySelector("#timeinterval").textContent=timer;
                }else{
                        clearInterval(timers);
                        document.querySelector("#pbottom").innerHTML=`<h1>Game over<\h1>`
                }
                
        },1000);
}
runTimer();
document.querySelector("#pbottom").addEventListener("click",function(dets){
        var clickednum=(Number(dets.target.textContent));
        if(hitrn===clickednum){
                increaseScore();
                makebubble();
                getNewHit();
        }
})

makebubble();
getNewHit();
