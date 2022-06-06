function copiar() {
    navigator.clipboard.writeText(
        document.getElementById("salida").value
    );
};
document.querySelector("#boton-copiar").addEventListener("click", copiar);

// mostrar y cerrar popup ->mensaje copiado!
const ventana = document.getElementById("ventana");
const cerrar = document.getElementById("boton-cerrar");

cerrar.addEventListener("click", () => {
    ventana.remove();
}); 
document.querySelector("#boton-copiar").addEventListener("click", function () {
    if(document.getElementById("salida").value){
ventana.show();
    }
});

