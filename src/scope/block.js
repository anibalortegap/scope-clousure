const fruits = () => {
    if(true){
        var fruits1 = 'apple';
        var fruits2 = 'banana';
        var fruits3 = "kiwi";
    }

    console.log(fruits1);    
    console.log(fruits2);    
    console.log(fruits3);    
}

fruits();

//no es posible acceder a las variables let y const definadas dentro de bloque if
const fruits = () => {
    if(true){
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = "kiwi";
    }

    console.log(fruits1);    
    console.log(fruits2); //return error ReferenceError: fruits2 is not defined
    console.log(fruits3); //return error ReferenceError: fruits3 is not defined   
}

fruits();

//se pasan los console.log() para el ambito del bloque if y se logra imprimir sin problemas
const fruits = () => {
    if(1){
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = "kiwi";
            console.log(fruits2);    
            console.log(fruits3);
    }
    console.log(fruits1);
}

fruits();


/* 
return el valor de 10, ya que el ambito tomado con var es el ultimo valor de i que seria 10;
itera el for sobre la variable I y obre el setTimeout, cuando va imprimir como la variable es
de acceso global i es igual a 10, entonces por eso en todas retorna 10
*/
const anotherFunction = () => {
    for(var i = 0; i < 10; i++){
        setTimeout(()=>{
            console.log(i);
        },1000)
    }
};

anotherFunction();

/*return el valor de 0,1,2,3,4,5,6,7,8,9 ya que itera sobre sobre el for  de i y 
sobre el setTimeout con el valor local de i
*/
const anotherFunction = () => {
    for(let i = 0; i < 10; i++){
        setTimeout(()=>{
            console.log(i);
        },1000)
    }
};

anotherFunction();