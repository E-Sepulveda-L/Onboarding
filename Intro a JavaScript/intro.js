// ___________________________________#1____________________________________
const miNombre = 'Erick ';

// ___________________________________#2___________________________________
const miApellido = 'Sepulveda ';

// ___________________________________#3___________________________________
let miEdad = 19;

// ___________________________________#4___________________________________
let miMascota = 'Ernesto Alfonso de la Cruz ';

// ___________________________________#5___________________________________
let edadMascota = 2;

// ___________________________________#6___________________________________
console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(miMascota);
console.log(edadMascota);

// ___________________________________#7___________________________________
const nombreCompleto = miNombre + miApellido;

// ___________________________________#8___________________________________
let tetoPresentacion = 'Hola, mi nombre es ' + miNombre + ' y mi apellido es ' + miApellido + ', tengo: ' + miEdad + ' años' + ', tambien tengo una mascota, ' + miMascota + ' que tiene: ' + edadMascota + ' años.';

// ___________________________________#9___________________________________
let sumaEdades =  miEdad + edadMascota;
let restaEdades = miEdad - edadMascota;
let productoEdades = miEdad % edadMascota;
let divisionEdades = miEdad / edadMascota;

// ___________________________________#10___________________________________
alumno = {
    nombre: 'Alberto',
    apellido: 'Mejia',
    edad: 20,
    curso: 3,
    rendimiento: 'bueno',        
}
console.table(alumno);

console.log(alumno.nombre);
console.log(alumno.apellido);
console.log(alumno.edad);
console.log(alumno.curso);
console.log(alumno.rendimiento);

// ___________________________________#11___________________________________
mascota = {
    nombre: 'lukas',
    edad: 3,
    tipo: 'gato',
    raza: 'napoleon',
    peso: '3-5kg',
}
console.table(mascota);

console.log(mascota.nombre);
console.log(mascota.edad);
console.log(mascota.tipo);
console.log(mascota.raza);
console.log(mascota.peso);

// ___________________________________#12___________________________________
frutas = [
    'manzana',
    'pera',
    'mango',
    'sandia',
    'naranja',
];
console.log(frutas);

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);

// ___________________________________#13___________________________________

let edadUsuario = prompt('edad');
let soyMayorDeEdad = edadUsuario >= 18;
console.log('Soy mayor de edad: ' + soyMayorDeEdad);

// ___________________________________#14___________________________________
numeros = [
    1,
    2,
    3,
    4,
    5,
];
console.log(numeros);

console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

// ___________________________________#15___________________________________
familia = [
    'papa',
    'mama',
    'tio',
    'sobrino',
    'abuelo',
]

console.log(familia);

console.log(familia[0]);
console.log(familia[1]);
console.log(familia[2]);
console.log(familia[3]);
console.log(familia[4]);

// ___________________________________#16___________________________________
let textoAleatorio = 'Para la fiesta de mi ' + familia[0] + ' compramos un postre de ' + frutas[1] + ' que dividimos en ' + numeros[3] + ' porciones.'
console.log(textoAleatorio);

// ___________________________________#17___________________________________
let edad1 = prompt('ingrese su edad');
let edad2 = prompt('ingrese la edad de su compañero');

let edadesIguales = edad1 == edad2;
let soyMayor = edad1 > edad2;
let soyMenor = edad1 < edad2;

edadesIguales = 'Mi edad es igual a la de mi compañero: ' + edadesIguales;
soyMayor = 'Mi edad es mayor a la de mi compañero: ' + soyMayor;
soyMenor = 'Mi edad es menor a la de mi compañero: ' + soyMenor;

console.log(edadesIguales);
console.log(soyMayor);
console.log(soyMenor);

// ___________________________________#18___________________________________
let edad = prompt('introduzca su edad');
let altura = prompt('introduzca su altura');

let puedeSubir = edad > 6 && altura >= 120;

puedeSubir = 'Puede subir a la atracción: ' + puedeSubir;

console.log(puedeSubir)

// ___________________________________#19___________________________________
let pase = prompt('introduzca su tipo de pase');
let saldo = prompt('introduzca su cantidad de saldo');

let puedePasar = pase === 'vip' || saldo > 1000;

puedePasar = 'La persona puede pasar: ' + puedePasar;

console.log(puedePasar);