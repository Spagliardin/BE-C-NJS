// IIFE

// (function(){
//     console.log('Mi primer IIFE')
// })()



// // Clases

// class ClaseCoder{
//     constructor(name){
//         this.name = name
//     }

//     getName(){
//         return `El nombre de tal es ${this.name}`
//     }

// }

// let miNombre = new ClaseCoder('Nicolas')

// console.log(miNombre.getName())

class Contador{

    static cuentaGeneral = 0

    constructor(name){
        this.name = name
        this.contador = 0
    }

    obtenerResponsable(){
        return `El nombre del responsable es ${this.name}`
    }
    obtenerCuentaIndividual(){
        return `el total de la cuenta de ${this.name} es de ${this.contador}`
    }
    obtenerCuentaGlobal(){
        return `El total de todos los contadores es ${Contador.cuentaGeneral}`
    }

    contar(){
        this.contador++
        Contador.cuentaGeneral++
    }

}

let imprimir = new Contador('Nico')

console.log(imprimir.obtenerResponsable())
imprimir.contar()
imprimir.contar()
imprimir.contar()
imprimir.contar()
imprimir.contar()

console.log(imprimir.obtenerCuentaIndividual())
console.log(imprimir.obtenerCuentaGlobal())