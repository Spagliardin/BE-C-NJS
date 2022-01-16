const fs = require("fs")

class Contenedor {
    constructor( url_archivo ){
        this.url_archivo = url_archivo
        this.content = []
    }

    async save( object ){

        let objectProducts = JSON.stringify(object)

        try {
            await fs.promises.writeFile( this.url_archivo, objectProducts)
          }
        catch (error) {
            console.log(error)
        }
    }


    async getById( id ){
        try {
           await fs.promises.readFile( this.url_archivo, 'utf-8' )
                    
        } catch (error) {
            console.log(error)
        }
    }

    async getAll(){
        try {
            await fs.promises.readFile( this.url_archivo, 'utf-8' )
                .then( content => {
                    const arrayContent = []
                    arrayContent.push(content)
                    return arrayContent
                })
        } catch (error) {
            console.log(error)
        }
    }

    deleteById(id) {

    }

    deleteAll(){

    }
}

let contenedor = new Contenedor( './contenedor.txt' )

contenedor.save( [ 
    {
    title: 'Escuadra',
    price: 123.45,
    thumbail: 'https://cdn3.icon.png',
    },
    {
    title: 'otro',
    price: 154.45,
    thumbail: 'https://cdn3.icon.png',
    },
    {
    title: 'otromas',
    price: 456.45,
    thumbail: 'https://cdn3.icon.png',
    }
])
// contenedor.save( [ {
//     title: 'Otro',
//     price: 145,
//     thumbail: 'https://cdn3.iconsss.png',
//     }
// ])