var btnBlue = document.querySelector("#btn-blue");
var btnRed = document.querySelector("#btn-red");
var btn = document.getElementById("button");

btnBlue.addEventListener("click", function () {
    btn.style.backgroundColor = "blue";
});
btnRed.addEventListener("click", function () {
    btn.style.backgroundColor = "red";
});