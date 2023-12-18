console.log('hola')


import { url } from "../helpers/contains.js";
import { GetData } from "../helpers/peticiones.js";
import { GetData2 } from "../helpers/peticiones.js";
import { url2 } from "../helpers/contains.js";

const botonperro = document.getElementById('icon-perro');
const botongato = document.getElementById('icon-gato');
const template = document.getElementById('template').content;
const container = document.getElementById('ContainerCards');

botonperro.addEventListener("click",
    async () => {
        const response = await GetData(url);

        console.log("La url", url)

        let demise = document.createDocumentFragment()

        container.innerHTML = "";

        response.forEach(item => {

            console.log(item)

            const { id, Title, Image, Year, Raza, Sexo, Description } = item

            template.querySelector('img').setAttribute('src', Image);


            const clone = template.cloneNode(true)
            demise.appendChild(clone)


        });





        container.appendChild(demise)








    });

botongato.addEventListener("click",
    async () => {
        const response2 = await GetData2(url2);

        console.log("La url", url2)

        let demise2 = document.createDocumentFragment()

        container.innerHTML = "";

        response2.forEach(item2 => {

            console.log(item2)

            const { id, Title, Image, Year, Raza, Sexo, Description } = item2

            template.querySelector('img').setAttribute('src', Image);


            const clone = template.cloneNode(true)
            demise2.appendChild(clone)


        });





        container.appendChild(demise2)
    });







