// //Jeigu skaicius didesnis nei keturi, tuomet ijungiam atvaizdavima konsoleje
// var x = 4.8

// //if(x = 4) { Galime if kondicijoje priskirti reiksme kintamajam
// if(x > 4) {
//     console.log( Math.round(x) ) //3.5 = 4
//     console.log( Math.floor(x) ) //3.5 = 3
//     console.log( Math.ceil(x) ) //3.5 = 4
// }

// //Jeigu skaicius didesnis arba lygu keturiems, tuomet ijungiam atvaizdavima konsoleje
// var x = 4

// if(x >= 4) {
//     console.log( Math.round(x) ) //3.5 = 4
//     console.log( Math.floor(x) ) //3.5 = 3
//     console.log( Math.ceil(x) ) //3.5 = 4
// }

// //Jeigu skaicius lygus keturiems, tuomet ijungiam atvaizdavima konsoleje
// var x = 4

// if(x == 4) {
//     console.log( Math.round(x) ) //3.5 = 4
//     console.log( Math.floor(x) ) //3.5 = 3
//     console.log( Math.ceil(x) ) //3.5 = 4
// }

//Jeigu skaicius nelygus keturiems, tuomet ijungiam atvaizdavima konsoleje
// var x = 4

// if(x != 4) {
//     console.log( Math.round(x) ) //3.5 = 4
//     console.log( Math.floor(x) ) //3.5 = 3
//     console.log( Math.ceil(x) ) //3.5 = 4
// }

//Jeigu skaicius nelygus keturiems ir nelygus penkiems, tuomet ijungiam atvaizdavima konsoleje
// var x = 6.3
// var y = 5.5

// if(x != 4 && y != 5 ) {
//     console.log('Kondicija suveike') 
// }


//Jeigu skaicius nelygus keturiems arba nelygus penkiems, tuomet ijungiam atvaizdavima konsoleje
// var x = 6.3
// var y = 5.5

// if(x != 4 || y != 5 ) {
//     console.log('Kondicija suveike') 
// }

//EVENTAI

//console.log(document);

//Du panasus to paties evento aprasymai
//Pirmas pavyzdys
// function clickHandler() {
//     console.log('Mygtukas uzregistruotas')
// }

// document.getElementById('submit').addEventListener('click', clickHandler)

//Antras pavyzdys
document.getElementById('submit').addEventListener(
    'click', 
    function() {
        var reiksme = document.getElementById('skaicius').value 
        //document.getElementById('rezultatas').innerText = reiksme
        //document.getElementById('rezultatas').innerHTML = "<h1 class=\"test\">" + reiksme + "</h1>"
        document.getElementById('rezultatas').innerHTML = `<h1 class="test">${reiksme}</h1>`
    }
)
//var Senesnis kintamojo apibrezimas
//Po ES6 atnaujinimu
// const x = 10
// let y = 15

// let x, y, z

// x = 10

// console.log(x)

window.addEventListener('scroll', () => {
    console.log(window.pageYOffset)
})