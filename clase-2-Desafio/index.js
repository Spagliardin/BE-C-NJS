const fs = require("fs")

class Contenedor {
    constructor( url_archivo ){
        this.url_archivo = url_archivo
        this.content = []
    }

    async save( object ){
        try {
            object.forEach(( item, i ) => {
                item.id = i + 1
            })
            await fs.promises.writeFile( this.url_archivo, JSON.stringify(object))
          }
        catch (error) {
            console.log(error)
        }
    }

    async getById( id ){
        try {
            await fs.promises.readFile( this.url_archivo, 'utf-8')
            .then( res => {
               let products = JSON.parse(res);
               console.log(products.filter( objects => objects.id === id))
           })
                    
        } catch (error) {
            console.log(error)
        }
    }

    async getAll(){
        try {
           await fs.promises.readFile( this.url_archivo, 'utf-8')
           .then( res => console.log(JSON.parse(res)))
        } catch (error) {
            console.log(error)
        }
    }

    async deleteById(id) {
        try {
            await fs.promises.readFile( this.url_archivo, 'utf-8')
            .then( res => {
               let products = JSON.parse(res)
               let index = products.indexOf( id )
               console.log(index)
               if (index > -1) {
                   products.splice(index, 1)
               }
           })
                    
            } catch (error) {
                console.log(error)
            }
    }

    async deleteAll(){
        try {
            await fs.promises.writeFile( this.url_archivo, JSON.stringify([]), 'utf-8')
            } catch (error) {
                console.log(error)
            }
    }
}

let contenedor = new Contenedor( './contenedor.txt' )

let products = [{
    title: 'Escuadra',
    price: 123.45,
    thumbail: 'https://unsplash.com/photos/wpyQ_uSasdasdsQdU',
    },
    {
    title: 'Carton',
    price: 145.1,
    thumbail: 'https://unsplash.com/photos/wpyQ_uasdasQdU',
    },
    {
    title: 'Papel',
    price: 10.10,
    thumbail: 'https://unsplash.com/photos/wpyQ_uSsQdU',
    },
    {
    title: 'Lapiz',
    price: 203.33,
    thumbail: 'https://unsplash.com/photos/GQ4VBpgPzik',
    }]

contenedor.save( 
    products
)

contenedor.getById(2)

contenedor.getAll()

contenedor.deleteById(3)

contenedor.deleteAll()