const Fn = (a,b,c,d) =>  console.log(a,b,c,d)
const arr = [1,2,3,4];


//DDon maneras de mapear nuestros arreglos
// Fn( [arr[0]],[arr[1]],[arr[2]] )
Fn(...arr) //llamada de nuestro arreglo

const arr1 = [5,6];


//Existen dos o mas maneras de concatenar array
// const arr2 = arr.concat(arr1);
// const arr2 = [...arr,...arr1];

///Esto quiere dicer que estamos generando una copia de los array o objetos en particular
const arr2 = [...arr,...arr1,7,8];
//Si le asigno u n valor nuevo esta no se pasara a arr2, mas bien pasara al valor arr que le estemos asignado
arr[0]= "pruebas";
// console.log(arr);
// console.log(arr2);


const obj1 = {valor1:"1",valor2:"2"}
const obj2 = {valor3:"1",valor4:"2",valor5:"Chanchito feliz"}

const obj3 = {...obj1,...obj2};
// console.log(obj3);



const obj4 = {
    ...obj2,
    selector : true,
    data:{
        prop:"Perrito",
        name:"POLO"
    }
}
console.log(obj4);