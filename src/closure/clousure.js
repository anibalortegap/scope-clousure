function padre () {
    var a = 1;
    function closure(){
        console.log(a);
    }
    closure()
}
padre();

function crearFuncion() {
    var a = 1;
    function closure() {
        console.log(a);
    }

    return closure;
}

var miFuncion = crearFuncion();
miFuncion();

function crearSuma(a) {
    return function(b){
        return a + b;
    }
}

var sumar5 = crearSuma(5);
console.log(sumar5);
console.log(sumar5(15));

/*Crear alcancia con closure y scope:
En este caso no esta guardando los elementos, no me retorna en la segunda ejecución
El valor de 15, me esta solamente imprimiendo el valor que le estoy pasando, no estoy
generando y tampoco creando un closure
*/
const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(10);


const moneyBox= () => {
    var saveCoins = 0;
    //Crear una función closure, y al ambito donde fue creada
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }

    return countCoins;
}

let myMoneyBox = moneyBox();

myMoneyBox(10); //10
myMoneyBox(5); //15
myMoneyBox(4); //19