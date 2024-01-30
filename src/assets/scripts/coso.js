import { urlp } from "../helpers/contains.js";
import { PostData, putData, deleteData } from "../helpers/peticiones.js";




export const RegisterCard = document.getElementById("form");

/*RegisterCard.addEventListener('click', () => {
    console.log("RegisterCard");
})*/

RegisterCard.addEventListener("submit", async (event) => {
    event.preventDefault();


    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;


    let obj = {

        nombre,
        apellido,
        correo

    };

    await PostData(urlp,  obj);


    
    document.getElementById("nombre").value = nombre;
    document.getElementById("apellido").value = apellido;
    document.getElementById("correo").value = correo;
});

RegisterCard.addEventListener("submit", async (event) => {
    event.preventDefault();


    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;


    let obj = {

        nombre,
        apellido,
        correo

    };

    await putData(urlp,  obj);


    
    document.getElementById("nombre").value = nombre;
    document.getElementById("apellido").value = apellido;
    document.getElementById("correo").value = correo;
});