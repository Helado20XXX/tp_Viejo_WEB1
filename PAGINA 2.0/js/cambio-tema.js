document.querySelector(".btn-color").addEventListener("click", function() {

    const divs = document.querySelectorAll('#theme');
    const parrafos = document.querySelectorAll("#parrafo");
    const listas = document.querySelectorAll("li");
    const botonHeader = document.querySelectorAll("#btn");
    const tr = document.querySelectorAll("#tr");
    const td = document.querySelectorAll("#td");
    const formulario = document.querySelectorAll("#form");
    const fondo = document.querySelectorAll("body");
    const label = document.querySelectorAll("label");

    divs.forEach(function (divs) {
        divs.classList.toggle("claro");
    });

    parrafos.forEach(function(parrafos){
        parrafos.classList.toggle("oscuro");
    });
    
    listas.forEach(function(listas){
        listas.classList.toggle("celeste");
    });
    botonHeader.forEach(function(botonHeader){
        botonHeader.classList.toggle("azul")
    });
    tr.forEach(function(tr){
        tr.classList.toggle("noche");
    });
    td.forEach(function(td){
        td.classList.toggle("cielo");
    });
    formulario.forEach(function(formulario){
        formulario.classList.toggle("cobstone")
    });
    fondo.forEach(function(fondo){
        fondo.classList.toggle("fondo");
    });
    label.forEach(function(label){
        label.classList.toggle("label");
    });
});
