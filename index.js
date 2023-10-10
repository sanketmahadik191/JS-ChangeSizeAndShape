var color = [
    "pink",
    "cyan",
    "black",
    "voilet",
    "blue",
    "purple",
    "orange", "green",
    "lightgreen",
    "lemon",
];
var index = 0;
var isTriangle = false;

var cShape = document.getElementById("change-shape");
var cColor = document.getElementById("change-color");

cShape.addEventListener("click", changeShape);
cColor.addEventListener("click", changeColor);

function changeColor() {
    var randomIndex = Math.floor(Math.random() * color.length);
    document.getElementById("circle").style.backgroundColor = color[randomIndex];
}

function changeShape() {
    if (!isTriangle) {
        var i = document.getElementsByClassName("inner")[0];
        i.className = "triangle-bottom-left";
        isTriangle = true;
    } else {
        var i = document.getElementsByClassName("triangle-bottom-left")[0];
        i.className = "inner";
        isTriangle = false;
    }
}