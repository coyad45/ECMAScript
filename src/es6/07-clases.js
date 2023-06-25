//declarando
class User{

};
//instancia
// const newUser = new User();

class user{
    //metodos
    greeting(nombre){
        return `Hello ${nombre}`;
    }
};

const gndx = new user();
console.log(gndx.greeting('carlos'));
const developer = new user();
console.log(developer.greeting('oliver'));

//constructor
class user{
    //Constructor
    constructor(){
        console.log('Nuevo Usuario');
    }
    greeting(nombre){
        return `Hello ${nombre}`;
    }
}

const bebe = new user();
console.log(bebe.greeting('Oliver'));

//this

class user{
    constructor(name){
        this.name = name;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const papi = new user('dai');
console.log(papi.greeting());


//setters and getters

class user{
    //constructor
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}

const turrito = new user('mito',18);
console.log(turrito.uAge);
console.log(turrito.uAge = 20);