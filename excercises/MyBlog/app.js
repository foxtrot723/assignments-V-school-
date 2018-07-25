document.getElementsByName("blog-boxes").addEventListener("mouseover", mouseOver());
document.getElementsByName("blog-boxes").addEventListener("mouseout", mouseOut());

function mouseOver() {
    document.getElementById("background-image").style.backgroundColor = "red";
}

function mouseOut() {
    document.getElementById("background-image").style.backgroundImage = url("http://marcelvogel.org/geometry/FlowerOfLife.jpg");
}

console.log("hi")