var play1 = Math.floor(Math.random() * 6)+ 1;
var play2 = Math.floor(Math.random() * 6)+ 1;
console.log(play1+" "+play2);

if (play1===1){
    document.querySelector("div.o#one").style.visibility = "hidden";
    document.querySelector("div.o#two").style.visibility = "hidden";
    document.querySelector("div.o#three").style.visibility = "hidden";
    document.querySelector("div.o#five").style.visibility = "hidden";
    document.querySelector("div.o#six").style.visibility = "hidden";
    document.querySelector("div.o#seven").style.visibility = "hidden";
}else if(play1===2){
    document.querySelector("div.o#one").style.visibility = "hidden";
    document.querySelector("div.o#three").style.visibility = "hidden";
    document.querySelector("div.o#four").style.visibility = "hidden";
    document.querySelector("div.o#five").style.visibility = "hidden";
    document.querySelector("div.o#seven").style.visibility = "hidden";

}else if(play1===3){
    document.querySelector("div.o#one").style.visibility = "hidden";
    document.querySelector("div.o#two").style.visibility = "hidden";
    document.querySelector("div.o#six").style.visibility = "hidden";
    document.querySelector("div.o#seven").style.visibility = "hidden";
}else if(play1===4){
    document.querySelector("div.o#two").style.visibility = "hidden";
    document.querySelector("div.o#four").style.visibility = "hidden";
    document.querySelector("div.o#six").style.visibility = "hidden";

}else if(play1===5){
    document.querySelector("div.o#two").style.visibility = "hidden";
    document.querySelector("div.o#six").style.visibility = "hidden";

}else{
    document.querySelector("div.o#four").style.visibility = "hidden";
}


if (play2===1){
    document.querySelector("div.t#one").style.visibility = "hidden";
    document.querySelector("div.t#two").style.visibility = "hidden";
    document.querySelector("div.t#three").style.visibility = "hidden";
    document.querySelector("div.t#five").style.visibility = "hidden";
    document.querySelector("div.t#six").style.visibility = "hidden";
    document.querySelector("div.t#seven").style.visibility = "hidden";
}else if(play2===2){
    document.querySelector("div.t#one").style.visibility = "hidden";
    document.querySelector("div.t#three").style.visibility = "hidden";
    document.querySelector("div.t#four").style.visibility = "hidden";
    document.querySelector("div.t#five").style.visibility = "hidden";
    document.querySelector("div.t#seven").style.visibility = "hidden";

}else if(play2===3){
    document.querySelector("div.t#one").style.visibility = "hidden";
    document.querySelector("div.t#two").style.visibility = "hidden";
    document.querySelector("div.t#six").style.visibility = "hidden";
    document.querySelector("div.t#seven").style.visibility = "hidden";
}else if(play2===4){
    document.querySelector("div.t#two").style.visibility = "hidden";
    document.querySelector("div.t#four").style.visibility = "hidden";
    document.querySelector("div.t#six").style.visibility = "hidden";

}else if(play2===5){
    document.querySelector("div.t#two").style.visibility = "hidden";
    document.querySelector("div.t#six").style.visibility = "hidden";

}else{
    document.querySelector("div.t#four").style.visibility = "hidden";
}

if(play1>play2){
    document.querySelector("h1").textContent="🚩Player 1 wins";
}else if(play1<play2){
    document.querySelector("h1").textContent="Player 2 wins🚩";
}else{
    document.querySelector("h1").textContent="Tie Refresh again";

}