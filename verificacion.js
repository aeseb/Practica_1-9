/*
    credenciales verificadas de un usuario
        - usuario registrado
        - contraseña registrada
    
    credenciales ingresadas por algun usuario
        - usuario
        - contraseña
    requisitos
        - verificar si las credenciales usadas
            son validas
        - mostrar resultado visual para el usuario
*/

const USUARIO_REGISTRADO = "Cosme Fulanito";
const CLAVE_REGISTRADA = "123";
const IMAGEN_DE_ERROR = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.desmotivaciones.es%2F201105%2Fcosme.jpg&f=1&nofb=1";

const CANT_INTENTOS_DEF = 3;

let usuarioIngresado = "Usuario";
let claveIngresada = "Clave";
let cantIntentos = CANT_INTENTOS_DEF;


function verificacion(){
    usuarioIngresado = document.querySelector('#usuario_ingresado').value;
    claveIngresada = document.querySelector('#clave_ingresada').value;

    if (usuarioIngresado == USUARIO_REGISTRADO && claveIngresada == CLAVE_REGISTRADA){
        document.querySelector('#mensaje_resultado').innerHTML = `<h1> Bienvenido ${usuarioIngresado}! </h1>`;
              
        cantIntentos = CANT_INTENTOS_DEF;

    }else{
            document.querySelector('#mensaje_resultado').innerHTML = `<h1> Usuario y/o contraseña incorrectos!</h1>`;
         } 
        
    cantIntentos--;
        document.querySelector('#intentos').innerHTML = `<h4> Intentos restantes: ${cantIntentos} </h4>`;

    if (cantIntentos == 0) {
        document.querySelector('#mensaje_resultado').innerHTML = `<img src=${IMAGEN_DE_ERROR} alt="img de error">`;   
    }
}