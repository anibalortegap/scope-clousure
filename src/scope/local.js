const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
}

helloWorld();
console.log(hello);

var scope = 'i am global';

var functionScope = () => {
    var scope = 'i am just a local';
    const functionL = () => {
        return scope;
    }
    console.log(functionL()); // Return i am just a local
}

functionScope();

console.log(scope);
