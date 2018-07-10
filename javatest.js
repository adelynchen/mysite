document.getElementById("bio").style.display = "none";
document.getElementById("chamber").style.display = "none";
document.getElementById("solo").style.display = "none";
function showBio() {
    var x = document.getElementById("bio");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function showChamber() {
    var y = document.getElementById("chamber");
    if(y.style.display==="none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
  }
}
function showSolo() {
    var z = document.getElementById("solo");
    if(z.style.display==="none") {
      z.style.display = "block";
    } else {
      z.style.display = "none";
  }
}
var mybio = document.getElementById("imsad");
mybio.style.color = "red";
function changeColor(){
  mybio.style.color = "red";
}
function changeBack(){
  mybio.style.color = "black";
}

mybio.onmouseover = changeColor;
mybio.onmouseout = changeBack;
