document.getElementById("aqui").addEventListener("click", saludando);
function saludando() {
     alert('Hola! Soy el div');
};
 
document.getElementById("boton").addEventListener("click", () => {
    alert("Hola!");
document.getElementById("aqui").removeEventListener("click", saludando);
});


