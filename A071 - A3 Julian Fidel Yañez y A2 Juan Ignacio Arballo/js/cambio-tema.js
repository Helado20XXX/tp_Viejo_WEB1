document.querySelector(".btn-color").addEventListener("click", function() {

    const divs = document.querySelectorAll('#theme');
    const parrafos = document.querySelectorAll("p, h2, h3, #bloque");
    const listas = document.querySelectorAll("#navegacion");
    const botonHeader = document.querySelectorAll("#btn");
    const tr = document.querySelectorAll("#tr");
    const td = document.querySelectorAll("#td");
    const formulario = document.querySelectorAll("#form");
    const fondo = document.querySelectorAll("body");
    const label = document.querySelectorAll("label");
    const captcha = document.querySelectorAll("#captcha");

    divs.forEach(function (divs) {
        divs.classList.toggle("claro");
    });

    parrafos.forEach(function(parrafos){
        parrafos.classList.toggle("oscuro");
    });

    captcha.forEach(function(captcha){
        captcha.classList.toggle("oscuro");
    });
    
    listas.forEach(function(listas){
        listas.classList.toggle("celeste");
    });
    botonHeader.forEach(function(botonHeader){
        botonHeader.classList.toggle("azul");
    });
    tr.forEach(function(tr){
        tr.classList.toggle("noche");
    });
    td.forEach(function(td){
        td.classList.toggle("cielo");
    });
    formulario.forEach(function(formulario){
        formulario.classList.toggle("cobstone");
    });
    fondo.forEach(function(fondo){
        fondo.classList.toggle("fondo");
    });
    label.forEach(function(label){
        label.classList.toggle("label");
    });
});
