
alert("BIENVENIDO/A! Comenzamos con el quiz!");

function ingresarUsuario(){

    let nombre = prompt("Primero, ingresa tu usuario y/o mail:");
    
    while(nombre==="" || nombre ===null){
    
    nombre = prompt("Ingresa tu usuario y/o mail:");
    
    }
    
}


function iniciaQuiz() {
    let p = prompt([empiezanPreguntas])
    {
        
    }

    preguntasIndex = 0;
    empiezanPreguntas() 

    preguntasIndex++
    empiezanPreguntas()
}


/*


function rta1(){
    let pregunta1;

    do{

    pregunta1 = prompt("Segun la cancion `Despacito, suavemente, amame en... \n1) camara lenta´ \n2) esta habitacion´");

    } while(pregunta1 != 1 && pregunta1!= 2);

    if(pregunta1 === "1") respuestasCorrectas++ 

    if(pregunta1 === "2") respuestasIncorrectas++ 
}
    
function rta2(){
    let pregunta2;
    do{
pregunta2 = prompt("¿Qué cantante es conocido como el Rey del Pop? \n1) Justin Bieber \n2) Michael Jackson´");

    } while(pregunta2 != 1 && pregunta2 != 2);

    if(pregunta2 === "1") respuestasIncorrectas++

    if(pregunta2 === "2") respuestasCorrectas++

} 

function rta3(){

    let pregunta3;
    do{

    pregunta3 = prompt("¿Rosa María es el verdadero nombre de qué actriz? \n1) Mirtha Legrand \n2) Marcela Tinayre");

    } while(pregunta3 != 1 && pregunta3 != 2);

    if(pregunta3 === "1") respuestasCorrectas++

    if(pregunta3 === "2") respuestasIncorrectas++

}

function resultado() {

    alert(`Respuestas correctas: ${respuestasCorrectas}`) 

    alert(`Respuestas Incorrectas: ${respuestasIncorrectas}`) 

    if (respuestasCorrectas >= 2){
        alert("EXCELENTE !")
    } else {
        alert("Volve a intentarlo")
    }

}

*/
ingresarUsuario()
iniciaQuiz()
