console.log('hola')


import { url } from "../helpers/contains.js";
import { GetData } from "../helpers/peticiones.js";

const botonperro = document.getElementById('icon-perro');
const template = document.getElementById('template').content;
const container = document.getElementById('ContainerCards');

botonperro.addEventListener("click",
    async () => {
        const response = await GetData(url);

        console.log("La url", url)

        let demise = document.createDocumentFragment()

        container.innerHTML="";

        response.forEach(item => {

            console.log(item)

            const { id, Title, Image, Year, Raza, Sexo, Description } = item

            template.querySelector('img').setAttribute('src', Image);
            

            const clone = template.cloneNode(true)
            demise.appendChild(clone)


        });





        container.appendChild(demise)








    });





