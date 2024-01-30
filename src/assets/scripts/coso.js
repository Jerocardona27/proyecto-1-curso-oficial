import { urlp } from "../helpers/contains.js";
import { PostData, putData, deleteData } from "../helpers/peticiones.js";




export const RegisterCard = document.getElementById("form");

/*RegisterCard.addEventListener('click', () => {
    console.log("RegisterCard");
})*/

RegisterCard.addEventListener("submit", async (event) => {
    event.preventDefault();

    let id = document.getElementById("nombre").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;


    let obj = {
        id,
        nombre,
        apellido,
        correo

    };

    await PostData(urlp, obj);

    id = 0;
    nombre = nombre;
    document.getElementById("apellido").value = apellido;
    document.getElementById("correo").value = correo;
});