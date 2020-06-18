
var btn = document.getElementById('btn');
var secondBtn = document.getElementById('second-btn');

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
    var maxTrain = 100000;
    var minTrain = 90000;
    var minCarriage = 1;
    var maxCarriage = 10;

    if (age == "minorenne") {
        price = (price - youngSales).toFixed(2);
    } else if ( age == "over65") {
        price = (price - oldSales).toFixed(2);
    }

    var train = Math.floor(Math.random()*(maxTrain - minTrain + 1)) + minTrain;
    var carriage = Math.floor(Math.random()*(maxCarriage - minCarriage + 1)) + minCarriage; 
    
    document.getElementById("user").innerHTML = name + " " + surname;
    document.getElementById("train").innerHTML = train;
    document.getElementById("carriage").innerHTML = carriage;
    document.getElementById("price").innerHTML = price;
    document.getElementById("category").innerHTML = age;

    // console.log(name + " " + surname + " " + train + " " + carriage + " " + price + " " + age + " ");
    

    document.getElementById("myticket").className = 'show';
});

secondBtn .addEventListener('click', function () {
    document.getElementById("myticket").className = 'hidden';
});
