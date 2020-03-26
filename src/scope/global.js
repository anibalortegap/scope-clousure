var hello = 'hello'; //Varible de alcance global
var hello = 'hello +';
let world = 'hello world';
const helloworld = 'hello world';


var anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloworld);
}

anotherFunction();


//Mala practica dentro del desarrollo de software
const helloWorld = () => {
    globalVar = 'im global';
}

helloWorld();
console.log(globalVar);

const anotherFunction = () => {
    var localVar = globalVar = 'I am gobal';
}

anotherFunction();
console.log(globalVar);