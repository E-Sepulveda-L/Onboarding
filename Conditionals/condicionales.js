// ___________________________#1_____________________________
let num1 = 4;
let num2 = 5;
if(num1 > num2){
    console.log(num1);
}else{
    console.log(num2);
}
// ___________________________#2_____________________________
if(num1 > num2){
    console.log(num1);
}else if (num2 > num1){
    console.log(num2);
}else{
    console.log('Los numeros son iguales');
}
// ___________________________#3_____________________________
if(num1 === num2){
    console.log('Los numeros son iguales');
}else{
    console.log('Los numeros son diferentes');
}
// ___________________________#4_____________________________
let fecha1 = '2018-09-02';
let fecha2 = '2023-05-07';
if(fecha1 > fecha2){
    console.log(`La fecha: ${fecha1} es mayor que ${fecha2}`);
}else if(fecha2 > fecha1){
    console.log(`La fecha: ${fecha2} es mayor que ${fecha1}`);
}else{
    console.log('Las fechas son iguales');
}
// ___________________________#5_____________________________
let Fecha1 = '2018-10-07';
let Fecha2 = '2018-02-17';
if(Fecha1 > Fecha2){
    console.log(`La fecha: ${Fecha1} es mayor que ${Fecha2}`);
}else if(Fecha2 > Fecha1){
    console.log(`La fecha: ${Fecha2} es mayor que ${Fecha1}`);
}else{
    console.log('Las fechas son iguales');
}
// ___________________________#6_____________________________
let dato1 = 5
let dato2 = 7
let dato3 = 9
if(dato1 > dato2 && dato1 > dato3){
    console.log(`El numero ${dato1} es el mayor`)
}else if(dato2 > dato1 && dato2 > dato3){
    console.log(`El numero ${dato2} es el mayor`)
}else if(dato3 > dato1 && dato3 > dato2){
    console.log(`El numero ${dato3} es el mayor`)
}
// ___________________________#7_____________________________
let color = prompt('Ingrese un color');
switch(color){
    case 'red':
        alert('The passion color')
    break
    case 'blue':
        alert('The color of the sea')
    break
    case 'green':
        alert('Nature color')
    break
    default:
        alert('UD')
}
// ___________________________#8_____________________________
let numero1 = parseFloat(prompt('ingrese el primer numero'))
let numero2 = parseFloat(prompt('ingrese el segundo numero'))
let operacion = prompt('ingrese la operación: suma (+), resta (-), multiplicacion (*), division (/)')
let resultado;
switch(operacion){
    case '+':
        resultado = numero1 + numero2;
    break
    case '-':
        resultado = numero1 - numero2;
    break
    case '*':
        resultado = numero1 * numero2;
    break
    case '/':
        resultado = numero1 / numero2;
    break
    case 'suma':
        resultado = numero1 + numero2;
    break
    case 'resta':
        resultado = numero1 - numero2;
    break
    case 'multiplicacion':
        resultado = numero1 * numero2;
    break
    case 'division':
        resultado = numero1 / numero2;
    break
    default:
        alert('operación no valida')
    break
}
alert(`El resultado de la operación: | ${numero1} ${operacion} ${numero2} | es: | ${resultado} |`)
// ___________________________#9_____________________________
let persona1 = {
    nombre: 'Juan',
    edad: 39,
    altura: 1.29
};
let persona2 = {
    nombre: 'Camilo',
    edad: 29,
    altura: 1.80
};
let resultadoEdad;
let resultadoAltura;
if(persona1.edad > persona2.edad){
    resultadoEdad = persona1.nombre
}else{
    resultadoEdad = persona2.nombre
}
if(persona1.altura > persona2.altura){
    resultadoAltura = persona1.nombre
}else{
    resultadoAltura = persona2.nombre
}
console.log(`${resultadoEdad} es mas mayor y ${resultadoAltura} es mas alto`)
// ___________________________#10_____________________________
let diesNombre = prompt('Ingrese su Nombre');
let diesEdad = prompt('Ingrese su Edad');
let diesAltura = prompt('Ingrese su Altura (separada por un punto)');
let diesVision = prompt('Ingrese su grado de Vision');
if( diesEdad >= 18 && diesAltura > 1.50 && diesVision >= 8){
    console.log(`${diesNombre} estas capacitado para conducir`);
}else{
    console.log(`${diesNombre} no estas capacitado para conducir`);
}
// ___________________________#11_____________________________
let onceEdad = prompt('Ingrese su edad');
if(onceEdad >= 0 && onceEdad <= 12){
    alert('Eres un infante');
}else if(onceEdad >= 13 && onceEdad <= 18){
    alert('Eres un adolecente');
}else if(onceEdad >= 19 && onceEdad <= 45){
    alert('Eres un mayor joven');
}else if(onceEdad >= 45 && onceEdad <= 99){
    alert('Eres un anciano');
}else if(onceEdad >= 100){
    alert('¿en realidad tiene esa edad?');
}
// ___________________________#12_____________________________
let doceNumeroReferencia = prompt('Ingrese un número del 1 al 3');
let doceNumeroAleatorio = prompt('Ingrese un número que desee');
let doceResultado;
switch(doceNumeroReferencia){
    case '1':
    alert(`El numero ingresado es: ${doceNumeroAleatorio}`);
    break
    case '2':
    doceResultado = doceNumeroAleatorio * 2;
    alert(`El doble numero ingresado es: ${doceResultado}`);
    break
    case '3':
    doceResultado = doceNumeroAleatorio * 3;
    alert(`El triple numero ingresado es: ${doceResultado}`);
    break
    default:
    alert('Ese valor no esta permitido');
}
// ___________________________#13_____________________________
let treceNombreCliente = prompt('Ingrese su nombre');
if(treceNombreCliente === 'erick' || treceNombreCliente === 'Erick'){
    alert(`Bienvenid@ ${treceNombreCliente}`);
}else{
    let trecePaseCliente = prompt('Ingrese su tipo de Pase (Vip/Normal)');
    if( trecePaseCliente === 'vip' || trecePaseCliente === 'Vip'){
        alert(`Bienvenid@ ${treceNombreCliente}`)
    }else{
        let treceEntrada = prompt(`Posee entrada? (Si/No)`);
        if(treceEntrada === 'si' || treceEntrada === 'Si'){
            let treceUsoEnrada = prompt(`Desea usarla? (Si/No)`);
            if(treceUsoEnrada === 'si' || treceUsoEnrada === 'Si'){
                alert(`Bienvenid@ ${treceNombreCliente}`);
            }else{
                alert(`Nos vemos luego ${treceNombreCliente}`);
            }
        }else{
            let treceCompraEntrada = prompt('Desea comprar? (Si/No)');
            if(treceCompraEntrada === 'si' || treceCompraEntrada === 'Si'){
                let treceDineroDisponible = prompt('Ingrese su cantidad de dinero disponible');
                if(treceDineroDisponible >= 1000){
                    alert(`Venta exitosa, Bienvenid@ ${treceNombreCliente}`);
                }else{
                    alert(`Venta rechazada, nos vemos luego ${treceNombreCliente}`)
                }
            }else{
                alert(`Nos vemos luego ${treceNombreCliente}`);
            }
        }
    }
}
// ___________________________#14_____________________________
let numeroIncognita = 5;
let numeroIngresado = prompt('Ingrese un numero');

if(numeroIngresado > numeroIncognita){
    alert('el numero ingresado es mayor, vuelve a intentarlo')
        let numeroIngresado = prompt('Ingrese un numero');

    if(numeroIngresado > numeroIncognita){
        alert('el numero ingresado es mayor, vuelve a intentarlo')
        let numeroIngresado = prompt('Ingrese un numero');
    
        if(numeroIngresado > numeroIncognita){
            alert('el numero ingresado es mayor')
        }else if(numeroIngresado < numeroIncognita){
            alert('el numero ingresado es menor')
        }else{
            alert('Ganaste, has adivinado el número')
        }
    }else if(numeroIngresado < numeroIncognita){
        alert('el numero ingresado es menor, vuelve a intentarlo')
        let numeroIngresado = prompt('Ingrese un numero');
    
        if(numeroIngresado > numeroIncognita){
            alert('el numero ingresado es mayor')
        }else if(numeroIngresado < numeroIncognita){
            alert('el numero ingresado es menor')
        }else{
            alert('Ganaste, has adivinado el número')
        }
    }else{
        alert('Ganaste, has adivinado el número')
    }
}else if(numeroIngresado < numeroIncognita){
    alert('el numero ingresado es menor, vuelve a intentarlo')
        let numeroIngresado = prompt('Ingrese un numero');

    if(numeroIngresado > numeroIncognita){
        alert('el numero ingresado es mayor, vuelve a intentarlo')
        let numeroIngresado = prompt('Ingrese un numero');
    
        if(numeroIngresado > numeroIncognita){
            alert('el numero ingresado es mayor')
        }else if(numeroIngresado < numeroIncognita){
            alert('el numero ingresado es menor')
        }else{
            alert('Ganaste, has adivinado el número')
        }
    }else if(numeroIngresado < numeroIncognita){
        alert('el numero ingresado es menor, vuelve a intentarlo')
        let numeroIngresado = prompt('Ingrese un numero');
    
        if(numeroIngresado > numeroIncognita){
            alert('el numero ingresado es mayor')
        }else if(numeroIngresado < numeroIncognita){
            alert('el numero ingresado es menor')
        }else{
            alert('Ganaste, has adivinado el número')
        }
    }else{
        alert('Ganaste, has adivinado el número')
    }
}else{
    alert('Ganaste, has adivinado el número')
}

// ___________________________#15_____________________________
// ___________________________#16_____________________________
// ___________________________#17_____________________________