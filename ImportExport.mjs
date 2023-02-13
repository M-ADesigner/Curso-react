//ESTA ES UNA MANERA DE EXPORTAR LOS ARRAY
// export const chanchosTristes = ["triste 1","triste 2","triste 3"]
// export const otrosChanchos = [];

const chanchosFelices = ["chancho 1","chancho 2","chancho 3"]
const chanchosTristes = ["triste 1","triste 2","triste 3"]
const otrosChanchos = []


// module.exports = {
//     chanchosFelices,
//     chanchosTristes
// }


//DE ESTA MANERA SE PUEDE EXPORTAR TAMBIEN (ARRIBA ES OTRA MANERA)
const Fn1 = () => {
    console.log("Esta es una funcion arrowFunctions");
}

function Fn2(){
    console.log("Esta es una funcion normal");
}

export {chanchosTristes, otrosChanchos,Fn1,Fn2}
export default  chanchosFelices


