// __________________________________#1__________________________________
let numeroUno = prompt('Ingrese un numero entero entre 1 y 100')

for(let i = numeroUno; i >= 0; i--){
    console.log(i)
}

// __________________________________#2__________________________________
let numeroTabla = prompt('Ingrese un numero entero entre 1 y 10');
let resultado;

for(let i = 0; i <= 10; i++){
   resultado =  numeroTabla * i
   console.log(`${numeroTabla} x ${i} = ${resultado}`);
}

// __________________________________#3__________________________________
let suma = 0;

while(true){

    let numero = parseFloat(prompt('ingrese un número'));

    if(numero > 0){
        suma += numero;
    }else if(numero < 0){
        suma += numero;
    }else{
        break;
    }
}

console.log(suma);

// __________________________________#4__________________________________
do{
    let numero = parseFloat(prompt('ingrese un número'));
 
    if(numero > 0){
        suma += numero;
    }else if(numero < 0){
        suma += numero;
    }else{
        break;
    }
}while(true)

console.log(suma);

// __________________________________#5__________________________________
let intentos = 1;
let numeroAdivinanza;

do{
    numeroAdivinanza = parseFloat(prompt('Ingrese un número'))
    intentos++

    if(numeroAdivinanza > suma){
        console.log('El número es mayor que el secreto')
    }else if(numeroAdivinanza < suma){
        console.log('El número es menor que el secreto')
    }else{
        alert(`Acertaste! el número secreto era: ${suma}, realizaste ${intentos} intentos` )
    }
}while(numeroAdivinanza !== suma);

// __________________________________#6__________________________________
let numeroDivisible = parseInt(prompt("Ingrese un número:"));

for (let i = 1; i <= numeroDivisible; i++) {

  if (numeroDivisible % i === 0) {
    let cociente = numeroDivisible / i;

    console.log(cociente);
  }
}

// __________________________________#7__________________________________
function sonarCampana(){
    console.log('Ding Dong');
    return 'Ding Dong, '
}

let resultadoSonarCampana;

for(let i = 0; i < 5; i++){
    resultadoSonarCampana += sonarCampana()
}

// __________________________________#8__________________________________
const fechaLimite = '1997-8-3'
const fecha = [
    '1984-10-2', 
    '1990-3-2', 
    '1973-15-7', 
    '2024-21-10', 
    '2001-1-9'
]

for(let i = 0; i <= fecha.length; i++){

    if(fecha[i] >= fechaLimite){
        console.log(fecha[i])
    }
}

// __________________________________#9__________________________________
let arrayColores = ['Rojo', 'Verde', 'Azul', 'Violeta', 'Amarillo', 'Celeste', 'Naranja', 'Rosa',];

for(let i of arrayColores){
    console.log(i)
}

// __________________________________#10__________________________________
function arrayColoresFunction(){
    for(let i of arrayColores){
        console.log(i)
    }
}
console.log(arrayColoresFunction())

// __________________________________#11__________________________________
let arrayNumeros = [7, 14, 8, 26, 5]

for(let i of arrayNumeros){
    let dobleDelNumero = i * 2
    
    console.log(`El numero es ${i} y su doble es ${dobleDelNumero}`);
}

// __________________________________#12__________________________________
let arrayFamilia = [
    {
        Nombre: 'Juan',
        Apellido: 'Peraz',
        Edad: '40',
        Realacion: 'Padre',
    },
    {
        Nombre: 'Paula',
        Apellido: 'Jimenez',
        Edad: '36',
        Realacion: 'Madre',
    },
    {
        Nombre: 'Alfredo',
        Apellido: 'González',
        Edad: '42',
        Realacion: 'Tio',
    },
    {
        Nombre: 'Isabel',
        Apellido: 'Torres',
        Edad: '38',
        Realacion: 'Tia',
    }
]

function PresentacionFamilia(){
    for(let Integrante of arrayFamilia){
        console.log(`Hola soy ${Integrante.Nombre} ${Integrante.Apellido} (${Integrante.Realacion}) y tengo ${Integrante.Edad} años.`)
    }
}

PresentacionFamilia()

// __________________________________#13__________________________________
alunmo = {
    Nombre: 'Juan',
    Apellido: 'García',
    Nacionalidad: 'Colombiano',
    Edad: '23',
    Estudios: ['Primario', 'Secuandario', 'MindHub'],
}

for(keys in alunmo){
    console.log(keys)
}

// __________________________________#14__________________________________
for(keys in alunmo){
    console.log(alunmo[keys])
}

// __________________________________#15__________________________________
let numeroImPar;
let pares = 0;
let impares = 0;

function numerosPareaEImpares (){
    while(true){
        numeroImPar = parseFloat(prompt('Ingrese un número'));
        if(numeroImPar === 0){
            break;
        }
    
        if(numeroImPar % 2 === 0){
            pares += numeroImPar;
        }else{
            impares += numeroImPar;
        }
    
    }
    console.log(`Pares: ${pares}`);
    console.log(`Impares: ${impares}`);
    
}

// __________________________________#15__________________________________
let arrayNumeroMayor = [1, 5, 8, 9, 15, 3, 25, 73, 19, 15, 9];
let NumeroMayor = arrayNumeroMayor[0];

for(let i = 0; i <= arrayNumeroMayor.length; i++){

    if(arrayNumeroMayor[i] > NumeroMayor ){
        NumeroMayor = arrayNumeroMayor[i]
    }
}
console.log(NumeroMayor)