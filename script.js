const boton = document.getElementById("boton");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
    mensaje.classList.remove("oculto");
    mensaje.textContent = "Gracias por visitar Cafetería Central.";
});