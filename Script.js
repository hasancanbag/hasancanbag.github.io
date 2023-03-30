function buttonclick() {
    alert("Hafta içinde düzenlenecektir.");
  }

  function mouseover() {
    var element = document.getElementById("button1");

    element.style.color = "black";
    element.innerText = "Fare uzerinde";

}

function mouseout() {
    var element = document.getElementById("button1");

    element.style.color = "red";
    element.innerText = "Fare dışarda";

}

function inputAl() {
    var element = document.getElementById("input1");

    alert(element.value);
}

for (var i = 0; i < 10; i++) {
    console.log("i: " + i);    
}

function divide(a,b){
    return a*b;
}

var sonuc = divide(3,5);
console.log("Çarpım: "+sonuc)


