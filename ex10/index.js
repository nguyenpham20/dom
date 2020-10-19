function showText() {
    var dot = document.getElementById("dot");
    var moreDots = document.getElementById("more");
    var btnShow = document.getElementById("button");
    if (dot.style.display === "none") {
        dot.style.display = "inline";
        btnShow.innerHTML = "show more";
        moreDots.style.display = "none";
    } else {
        dot.style.display = "none";
        btnShow.innerHTML = "show less";
        moreDots.style.display = "inline";
    }
}