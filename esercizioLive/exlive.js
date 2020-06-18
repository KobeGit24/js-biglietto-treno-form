// var firstNumber = parseInt(prompt('inserisci primo numero'));
// var secondNumber = parseInt(prompt('inserisci secondo numero'));
// var numero = document.getElementById("numero");
// if (firstNumber > secondNumber) {
//     var numero = document.getElementById("numero").innerHTML = firstNumber;
// } else if ( secondNumber > firstNumber) {
//     var numero = document.getElementById("numero").innerHTML = secondNumber;
// } else {
//     var numero = document.getElementById("numero").innerHTML = "I numeri sono uguali"; 
// }


// var btn = document.getElementById('btn');
// var password = document.getElementById('password');

// btn.addEventListener('click', function () {
//     var name = document.getElementById('name').value;
//     var surname = document.getElementById('surname').value;
//     password.innerHTML = name + " " + surname;
// });

var btn = document.getElementById('btn');
var numero = document.getElementById("numero");

btn.addEventListener('click', function () {
    var firstNumber = parseInt(prompt('inserisci primo numero'));

    if(firstNumber<0) {
        numero.className = 'green';
    } else if (firstNumber>0) {
        numero.className = 'red';
    } else if (firstNumber==0) {
        numero.className = 'blue';
    }
});