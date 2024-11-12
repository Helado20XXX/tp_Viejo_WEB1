function mostrarNumero() {

        let num1 = Math.floor(Math.random() * 10) + 1;
        let num2 = Math.floor(Math.random() * 10) + 1; 
        let num3 = Math.floor(Math.random() * 10) + 1;
        const suma = num1 + num2 + num3;

        document.querySelector("#captcha").innerHTML = num1 + " + " +  num2 + " + " + num3 + " = " + "?";

        return suma;
}
function verificar(resultado) {

        let respuesta = parseInt(document.querySelector("#respuesta").value);

        if ( resultado == respuesta) {
                document.querySelector("#resultado").innerHTML = "Correcto, eres humano.";
        }
        else {
                document.querySelector("#resultado").innerHTML = "Respuesta incorrecta.";
        }
}

document.addEventListener("DOMContentLoaded", function() {
        let resultado = mostrarNumero();
        document.querySelector("#form").addEventListener("submit",function(e) {
                e.preventDefault();
                verificar(resultado);

                resultado = mostrarNumero();
        });
});

