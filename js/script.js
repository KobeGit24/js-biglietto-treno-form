
var btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var km = document.getElementById('km').value;
    var over = document.getElementById('over65').value;
    var maggiorenne = document.getElementById('maggiorenne').value;
    var minorenne = document.getElementById('minorenne').value;
    var age = document.getElementById('age').value;
    var kmPrice = 0.21;
    var price = (km * kmPrice).toFixed(2);
    var youngSales = (price * 20 / 100).toFixed(2);
    var oldSales = (price * 40 / 100).toFixed(2);

    if (age == "minorenne") {
        price = (price - youngSales).toFixed(2);
    } else if ( age == "over65") {
        price = (price - oldSales).toFixed(2);
    }
    console.log(price);
    
    // console.log(name, surname, km, over, maggiorenne, minorenne);  
})
