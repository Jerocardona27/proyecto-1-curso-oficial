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

    console.log(nombre, apellido, correo);


    let obj = {

        nombre,
        apellido,
        correo,
        id: Math.round(Math.random() * (1000 - 1) + 1).toString(),

    };

    await PostData(urlp,  obj);


    
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
});

