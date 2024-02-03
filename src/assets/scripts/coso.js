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
        id: 2,
        nombre,
        apellido,
        correo,


    };

    await PostData(urlp, obj);



    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";



});

export const borrardatos = document.getElementById("borrar");

borrardatos.addEventListener('click', async (event) => {
    event.preventDefault();

    let obj = {

        id: 2
        


    };

    await deleteData(urlp, obj);

    console.log('se ha borrado');
})



