let displayTime = document.getElementById("timerdisplay");
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

let timer = null;
let sec = 0;
let mins = 0;
let hrs = 0;

function stopwatch(){
     sec++;
     if(sec == 60){
        sec = 0;
        mins++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
     }
     let h = hrs <10? "0" + hrs : hrs;
     let m = mins <10? "0" + mins : mins;
     let s = sec <10? "0" + sec : sec;
     

     displayTime.innerHTML = h +":"+m+":"+s;

}

function watchstart(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,1000);
}

function reset(){
    clearInterval(timer);
    [sec , min , hrs] =[0,0,0];
    displayTime.innerHTML = "00:00:00";
}
function stop(){
    clearInterval(timer);
}
