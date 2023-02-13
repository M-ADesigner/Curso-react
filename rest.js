const rest = (a,...argumentos) => {
    console.log(a)
    console.log(argumentos)
}
// rest(1,2,3)

const obj = {
    a:1,b:2,c:3,d:4
}
//Obtener valor de los objetos especificamente de los que quisiera sacar
// const {a,b, ...restObj} = obj;
// console.log(a,b,restObj);
// console.log(arr)

//Obtener valores de arreeglos de losq ue quisiera obtener
const arr =[
    1,2,3,4,5,"Dios","forever","Maicol"
]

const [a,b,c,d,e,...arrObj] = arr;

// console.log(a,b,arrObj);


const useState = () => ['valor', () => {}]

const [valor, setValor] = useState();

console.log(valor, setValor)
