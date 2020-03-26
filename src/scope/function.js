const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
};

fruits();
console.log(fruit);//return error ya que es una varibale local solo con ambito en la función fruits


const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    let y = 1;
    console.log(x); //return el valor de 2, se permite declarar variables con var y reasignar
    console.log(y); //return error ya que let no permite declarar una variable ya declarada, pero si reasignar
};

anotherFunction();

