let gameSequence = [] ;
let userSequence = [] ;

let btns = ["yellow" , "red" , "purple" , "green" ] ;

let started  = false ;
let level = 0 ;
let highestScore = 0 ;
let game = 1 ; 
let gameNum = document.querySelector("p") ;


let h2 = document.querySelector("h2") ;

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("game has started ") ;
        started = true ;
    }
    levelUp() ;
}) ;

function btnFlash(btn) {
    btn.classList.add("flash") ;
    setTimeout(function() {
        btn.classList.remove("flash") ;
    } , 500) ;
}

function userFlash(btn) {
    btn.classList.add("userFlash") ;
    setTimeout(function() {
        btn.classList.remove("userFlash") ;
    } , 250) ;
}

function levelUp() {
    level++ ;
    h2.innerText = `level ${level}` ;
    userSequence = [] ;
/*random button flashing*/ 
    let randInd = Math.floor(Math.random() * 3) ;
    let randColor = btns[randInd] ;
    let randBtn = document.querySelector(`.${randColor}`) ;
    /*console.log(randInd) ;
    console.log(randColor) ;
    console.log(randBtn) ;*/
    gameSequence.push(randColor) ;
    console.log("game : " ,gameSequence) ;
    btnFlash(randBtn) ;
}

function check(inx) {
    //console.log("current level : " , level) ;

    if (userSequence[inx] == gameSequence[inx]) {
        console.log("same value") ;
        if (userSequence.length == gameSequence.length) {
            setTimeout(levelUp , 300) ;
        }
    }
    else {        
        document.querySelector("body").style.backgroundColor = "red" ;
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white" ;
        } , 150)
        if(game== 1) {
            highestScore = level ;
        }
        else{
            if (level > highestScore) {
                highestScore = level ;
            }
        }
        h2.innerHTML =`game over!<br> your score was <b>${level}</b><br><br><i>the highest score is ${highestScore}</i> <br>press any key to start` ;
        reset() ;       
    }
}

function btnPress (){
    console.log(this) ;
    let btn = this ;
    userFlash(btn) ;

    let userColor = btn.getAttribute("id") ;
    //console.log(userColor) ;
    userSequence.push(userColor) ;
   //console.log("user : " ,userSequence) ;
    check(userSequence.length-1) ;
}

let allBtn = document.querySelectorAll(".btn") ;

for(btn of allBtn) {
    btn.addEventListener("click" , btnPress) ;
} 

function reset() {
    started = false ;
    gameSequence = [] ;
    userSequence = [] ;
    level = 0 ;
    game++ ;
    gameNum.innerText = game ;
}
