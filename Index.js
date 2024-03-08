document.getElementById("btn1").addEventListener("click", changCap);

document.getElementById("btn2").addEventListener("click", changBol);

document.getElementById("btn3").addEventListener("click", changUpper);

document.getElementById("btn4").addEventListener("click", changFont32);

function changCap() {
  document.getElementById("inpt").style.textTransform = "capitalize";
  document.getElementById("inpt").style.fontWeight = "bold";
  document.getElementById("inpt").style.fontSize = "18px";
}

function changBol() {
  document.getElementById("inpt").style.fontWeight = "bold";
  document.getElementById("inpt").style.fontSize = "20px";
}

function changUpper() {
  document.getElementById("inpt").style.textTransform = "uppercase";
  document.getElementById("inpt").style.fontSize = "24px";
}

function changFont32() {
  document.getElementById("inpt").style.fontSize = "32px";
}
