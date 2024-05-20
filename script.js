document.getElementById('myButton1').addEventListener('click', function() {
    alert('No hago nada');
});

document.getElementById('myButton2').addEventListener('click', function() {
    alert('Que te digo que no hago nada!!!');
});

document.getElementById('myButton3').addEventListener('click', function() {
    alert('Como sigas asi vas a acabar mal.');
});

document.getElementById('myButton4').addEventListener('click', function() {
    alert('Te la estás jugando, deja de pulsarnos!!');
});

// document.getElementById('myButton5').addEventListener('click',
//  function() {
    
// });

document.getElementById('myButton6').addEventListener('click', function() {
    alert('Eres incansable');
});

document.getElementById('myButton7').addEventListener('click',
 function pedirNumero() {
    let numero = Number(prompt("Va, lo has conseguido, dime un numero."))
    if (isNaN(numero)) {
        alert("Te he pedido un numero cateto...")
    } else {
        alert("Has intoducido el numero " + numero + " (te dije que no hacía nada).")
    }
});

document.getElementById('myButton8').addEventListener('click', function() {
    alert('NADA');
});

document.getElementById('myButton9').addEventListener('click', function() {
    alert('NADA X2');
});