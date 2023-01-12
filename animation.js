document.getElementById("card").addEventListener("mouseover", function() {
document.getElementById("cardimage").classList.add("imganimation");
document.getElementById("texts").classList.add("textanimation");
})

document.getElementById("card").addEventListener("mouseleave", function() {
document.getElementById("cardimage").classList.remove("imganimation");
document.getElementById("texts").classList.remove("textanimation");
})