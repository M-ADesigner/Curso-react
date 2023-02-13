// const Regtangulo = class R {

// }
//Clases declaradas con Class no tienen Hoisting
// class Regtangulo{

// }

//Las funciont puede ser llamadas antes, son como variables var que pueden ser llamada.
//Estos son declaradas Hoisting
// function Cuadrado(){

// }

// console.log(Cuadrado);
// console.log(Regtangulo);
// const r = new Regtangulo()


class Chancho{
    propiedad = "Casa con valores"
    #hambre
    static estatico = "valor estaticos";
    constructor (estado = 'Defecto', hambre = false){
        this.#hambre = hambre
        this.estado = estado
    }
    
    hablar(){
        console.log(`Soy aun chancho ${this.estado} ${this.#hambre ? 'Con mucha hambre':'Satisfecho'}`)

    }


    //Los metodos estitacos no pueden accedes a las propuiedadaes de las clases
    //Solo pueden recibir valore estaticos como declaramos arriba
    static MetodoStaticoComer(){ //Para traer valores estaticos tienen que ser declaradas con la clase
        console.log(this,"Estoy comeindo");
    }
}

const Feliz = new Chancho("Feliz");
//Para ver los metotodos entramos  __proto__
// console.log(Feliz.__proto__);

//Para llamar a metodos estaticos, estas pueden ser llamadas con la clase
Chancho.MetodoStaticoComer() //Metodo estatico


// console.log(Feliz);
// Feliz.hablar()
// const Triste = new Chancho("Triste");
// Triste.hablar()
// const nose = new Chancho();
// nose.hablar()