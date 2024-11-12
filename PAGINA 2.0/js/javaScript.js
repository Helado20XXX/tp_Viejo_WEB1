const menu = document.getElementById("imagen-menu");

document.querySelector(".boton-menu").addEventListener("click", function () {

        document.querySelector(".navegacion").classList.toggle("column")
        
        let src = menu.src;

        if(src.includes("menu-hamburguesa")){
                src = src.replace("menu-hamburguesa" , "close-menu");
        }
        else {
                src = src.replace("close-menu" , "menu-hamburguesa");
        }
        menu.src = src;
});