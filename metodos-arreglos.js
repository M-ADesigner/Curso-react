const arr = [0,1,2,3,4,5];

//*******************Metodo filter (que solo devuleve valores true)*******************
// i me trae el indice no es el valor!!!
// const r = arr.filter((element,i) => {
//     console.log(i)
//     return element > 2;
// });

// console.log(r);


// *******************METODO MAPP *******************

// const mapped = arr.map((element,i) => {
//         return element * 4;
// });

// console.log(mapped);

const Users = [
    {id:1,name:"Chancho culiao FELIZ:)"},
    {id:2,name:"Chancho culiao TRISTE:)"},
    {id:3,name:"Chancho culiao EMOCINADO:)"},
    {id:4,name:"Chancho culiao PEDORRO:)"},
    {id:5,name:"Chancho culiao PUTONA:)"},
]

// const mapped = Users.map((element,i) => {
//         return `<h1> ${element.name} </h1>`;
// });

// console.log(mapped);

// *******************METODO REDUCE*******************

//PARA ENTENDER SE EL ACUM TOMA EL ULTIMO VALOR POR DEFECTO
//En este caso es 5
//Y este lo suma con el segundo parametro que es element que es el priemr valor
//Que este caso es 0
//Y asi sucesivamente el 5 se va sumando con los demas datos del arreglo
// const reduce = arr.reduce((Acum, element)=> {
//     return Acum+element;
// }) 


//OBTENER EL VALOR MAXIMO
// const getMaxArray = (a,b) => {
//     return Math.max(a,b)
// } 

// const reduce1 = arr.reduce(getMaxArray)

// console.log(reduce1);

// const reduce3 = Users.reduce((Acum,element) => `${Acum}, ${element.name}`,'' )
const reduce2 = Users.reduce((Acum,element) => {
    return Acum === "" ? element.name : `${Acum}, ${element.name}`
}, "");




console.log(reduce2);