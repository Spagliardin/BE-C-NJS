


class Usuario{
    
    constructor( name, lastName ){
        this.name = name;
        this.lastName = lastName;
        this.books = [];
        this.mascotas = [];
    }

    getFullName(){
        return `El nombre del usuario es: ${this.name} ${this.lastName}`
    }

    addMascotas(name){
        this.mascotas.push(name)
    }

    addBook(name, autor){
        this.books.push({
            name,
            autor
        })
    }

    getBookNames(){
        return this.books.map( books => books.name)
    }

}

let user = new Usuario('Nicolas', 'Spagliardi')

user.addMascotas('Pepe')
user.addMascotas('Milanesa')
user.addMascotas('Firulais')
user.addMascotas('Otro Nombre')

console.log(user.mascotas, 'Mascotas')

user.addBook('libro1', 'autor1')
user.addBook('libro2', 'autor2')
user.addBook('libro3', 'autor3')
user.addBook('libro4', 'autor4')

console.log(user.books, 'Books')

console.log(user.getFullName(), 'FullName')
console.log(user.getBookNames(), 'BooksNames')


