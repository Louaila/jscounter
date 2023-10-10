let number = 0;

function decrease(){
    number = number - 1;  
    changecolor();
    document.getElementById("value").innerHTML = number;
  
}

document.getElementById("decrease").addEventListener("click",decrease)

function increase(){
     number = number + 1;
    changecolor();
    document.getElementById("value").innerHTML = number;
}

document.getElementById("increase").addEventListener("click",increase)

function reset () {
number = 0
changecolor();
document.getElementById("value").innerHTML = number;
}

document.getElementById("reset").addEventListener("click",reset)

function changecolor() {
if (number < 0) {
 document.getElementById("value").style.color = "red";
} else if (number > 0) {
    document.getElementById("value").style.color = "green";
} else if (number == 0) {
    document.getElementById("value").style.color = "black";
}

}
