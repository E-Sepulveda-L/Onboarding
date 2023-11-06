

// hay que comentar los ejercicios #5, #6, #7 para que no interfieran con el resultado


// __________________________________#1__________________________________
function sumar(){}
// __________________________________#2__________________________________
console.log(sumar())
// __________________________________#3__________________________________
function sumar (num1, num2){}
// __________________________________#4__________________________________
let numero1 = 100;
let numero2 = 20;
// __________________________________#5__________________________________
function sumar (num1, num2){
    let resultado = num1 + num2
    return resultado
}
// __________________________________#6__________________________________
let sumar = function (num1, num2){
    let resultado = num1 + num2
    return resultado
}
console.log(sumar(numero1, numero2))
// __________________________________#7__________________________________
let sumar = (num1, num2) => num1 + num2
console.log(sumar(numero1, numero2))
// __________________________________#8__________________________________
function saludar(nombre){
    console.log(`Hola mi nombre es ${nombre}`)
}
saludar('erick')
// __________________________________#9__________________________________
function multiplicacion(mulNum1, mulNum2){
    return mulNum1 * mulNum2
}
console.log(multiplicacion(4, 5))
// __________________________________#10__________________________________
function area(areaBase, areaAltura){
    return areaBase * areaAltura
}
area(3, 5)
function perimetro(perimetroLado1, perimetroLado2, perimetroLado3){
    return perimetroLado1 + perimetroLado2 + perimetroLado3
}
perimetro(3, 5, 8)
// __________________________________#11__________________________________
let compra = (precio, cantidad) => {
    let precioFinal = precio * cantidad
    if(cantidad >= 10){
        precioFinal -= precioFinal * 0.1
    }else if(cantidad >= 20){
        precioFinal -= precioFinal * 0.2
    }
    return precioFinal;
}
console.log(compra(1500, 10))
// __________________________________#12__________________________________
function esMayorDeEdad (edad){
    if(edad >= 18){
        console.log('Eres mayor de edad')
    }else if(edad <= 18){
        console.log('Eres menor de edad')
    }
}
esMayorDeEdad(30)
esMayorDeEdad(3)
esMayorDeEdad(19)
esMayorDeEdad(15)
// __________________________________#13__________________________________
function ingresoAnual (ingreso){
    if(ingreso <= 10000 ){
        console.log(`El impuesto a pagar de el 10% de su ingeso, ${ingreso -=ingreso * 0.1}`)
    }else if(ingreso > 10000  && ingreso < 20000){
        console.log(`El impuesto a pagar de el 15% de su ingeso, ${ingreso -=ingreso * 0.15}`)
    }else if(ingreso > 20000){
        console.log(`El impuesto a pagar de el 20% de su ingeso, ${ingreso -=ingreso * 0.2}`)
    }
}
ingresoAnual(25500)
ingresoAnual(15500)
ingresoAnual(5500)
// __________________________________#14__________________________________
function diaLaborar(dia){
    switch(dia){
        case 1:
        case 2:
        case 3:
        case 4:
        case 1:
            console.log('Es un dia laboral')
        break
        case 6:
        case 7:
            console.log('Es fin de semana')
        break
        default:
            console.log('Solo se aceptan parametros del 1 al 7')
    }
}
diaLaborar(1)
diaLaborar(6)

// __________________________________#15__________________________________
// __________________________________#16__________________________________