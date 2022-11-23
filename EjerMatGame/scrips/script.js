//DOM selector
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let respuesta_usuario = document.querySelector("#respuesta_usuario");
let msj_correccion = document.querySelector("#msj_correccion");
let operacion = document.querySelector("#operacion");
let operacion_actual;
//en n1 y  n2 se guardaran los numeros laeatoios de cada operacion
let n1, n2;

//func suma
function btnSumar() {
    //se limpia el div del contenedor de las correciones
   msj_correccion.innerHTML ="";
    //se agrega la clase activa al btn suma y la quitamos al resto
    activarBoton("suma");
    operacion_actual = "+";
    //se asigna la operacion suma ala etiqueta
    operacion.innerHTML = " + ";
    //se gnenera lso numeros aletatrios de la suma
    nuevaSuma();

}

//func resta
function btnRestar() {
    //se limpia el div del contenedor de las correciones
   msj_correccion.innerHTML ="";
    //se agrega la clase activa al btn resta y la quitamos al resto
    activarBoton("resta");
    operacion_actual = "-";
    //se asigna la operacion resta ala etiqueta
    operacion.innerHTML = " - ";
    //se gnenera los numeros aletatrios de la resta
    nuevaResta();

}


//func Producto
function btnProducto() {
    //se limpia el div del contenedor de las correciones
   msj_correccion.innerHTML ="";
    //se agrega la clase activa al btn resta y la quitamos al resto
    activarBoton("producto");
    operacion_actual = "*";
    //se asigna la operacion resta ala etiqueta
    operacion.innerHTML = " * ";
    //se gnenera los numeros aletatrios de la resta
    nuevaProducto();

}

//func Division
function btnDivision() {
    //se limpia el div del contenedor de las correciones
   msj_correccion.innerHTML ="";
    //se agrega la clase activa al btn resta y la quitamos al resto
    activarBoton("division");
    operacion_actual = "/";
    //se asigna la operacion resta ala etiqueta
    operacion.innerHTML = " / ";
    //se gnenera los numeros aletatrios de la resta
    nuevaResta();

}

function nuevaSuma(){
    //generamos  dos numeros aleatorios entre 0 y 9
    n1 = parseInt(Math.random() * 10);
    n2 = parseInt(Math.random() * 10);
    //asignamos los numeros alas etiquetas
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    //se coloca el cursor en el input
    respuesta_usuario.focus();
}

function nuevaResta(){
    //generamos  dos numeros aleatorios entre 0 y 9
    n1 = parseInt(Math.random() * 5 + 5);
    n2 = parseInt(Math.random() * 5);
    //asignamos los numeros alas etiquetas
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    //se coloca el cursor en el input
    respuesta_usuario.focus();
}

function nuevaProducto(){
    //generamos  dos numeros aleatorios entre 0 y 9
    n1 = parseInt(Math.random() * 10);
    n2 = parseInt(Math.random() * 10);
    //asignamos los numeros alas etiquetas
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    //se coloca el cursor en el input
    respuesta_usuario.focus();
}

function nuevaDivision(){
//se guadaran los divisines del num a dividir
let divisores = [];

//generamos un numero aleatorio entre 1-10

//encontramos los divisores ddl num generado y se guarda en un array
for(var i=1; i<=n1;i++){
    if(n1%i===0){//es divisor
        divisores.push(i);
    }
}
//seleccionamos una posicion random de los numeros que son div
let pos = parseInt(Math.random() * (divisores.length));

n2 = divisores[pos];
num1.innerHTML = n1;
num2.innerHTML = n2;
respuesta_usuario.focus();

    //se coloca el cursor en el input
}

//func que controla si la resp es correct
function corregir(){
    //si el usuario no ha ingresado nada no continua
    if(respuesta_usuario.value==""){
        return;
    }

    let solucion;
    //armo la operacion que se genero en la var y veo cual es su resultado , en este caso el operador + es para concatenar las cadenas
    let operacion = n1 + operacion_actual + n2;
    solucion = eval(operacion);

    //creo q un elemento i para add el icono de correcto o incorrecto
    var i = document.createElement("i");
    //se controla si coincide lo que el user responcio con la solucion
    if(respuesta_usuario.value == solucion){
        i.className = "fa-regular fa-face-grin";
    }else{
        i.className = "fa-regular fa-face-frown";
    }
    //agrego el elemento al contenedor de las correcciones
    msj_correccion.appendChild(i);
    //controlo que tipo de operacion estoy para generar una nva operacion
    if(operacion_actual == "+"){
        nuevaSuma();
    } else if (operacion_actual == "-"){
        nuevaResta();
    } else if (operacion_actual == "*"){
        nuevaProducto();
    } else if (operacion_actual == "/"){
        nuevaDivision();
    }
    //se limpia el imput
    respuesta_usuario.value = "" ;
    }

//agrego al input el evento onkeydwon para detectar cuando se presiona ENter y  llamr directamente lala func corregir()
respuesta_usuario.onkeydown = function(e) {
    var ev = document.all ? window.event : e;
    if (ev.keyCode == 13){
        corregir();
    }
}  


//esta func la creamos luego , cuando tengamos listo los estilos
    function activarBoton(idBoton){
document.getElementById("suma").className = "";
document.getElementById("resta").className = "";
document.getElementById("producto").className = "";
document.getElementById("division").className = "";
document.getElementById(idBoton).className = "activado";
    }

