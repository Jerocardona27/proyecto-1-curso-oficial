


import { url } from "../helpers/contains.js";
import { GetData } from "../helpers/peticiones.js";
import { GetData2 } from "../helpers/peticiones.js";
import { url2 } from "../helpers/contains.js";

const botonperro = document.getElementById('icon-perro');
const botongato = document.getElementById('icon-gato');
const template = document.getElementById('template').content;
const container = document.getElementById('ContainerCards');
const templateDetails = document.getElementById('TemplateDetails').content;


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
            template.querySelector('img').setAttribute('id', id);


            const clone = template.cloneNode(true)
            demise.appendChild(clone)


        });





        container.appendChild(demise)
        container.addEventListener('click', async (e) => {
            DetallesAnimales(e.target.id);
            


        });








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
            template.querySelector('img').setAttribute('id', id);


            const clone = template.cloneNode(true)
            demise2.appendChild(clone)


        });





        container.appendChild(demise2)

    });


//---------------details perros---------------//

const DetallesAnimales = async (id) => {
    console.log('recibí un: ', id);
    const response = await GetData(url);
    const detail = response?.find((fi) => fi.id === id);


    //Crear los detalles en la misma 
    //página 5, borrando el resto del contenido de la misma//

    const OGBodyContent = document.body.innerHTML;

    document.body.innerHTML = "";

    const { Title, Image, Year, Raza, Sexo, Description, ImgYear, Location, ImgLocation, ImgRaza, PrevOwner, Cariñoso, ImgCariñoso, Inquieto, ImgInquieto, Juguetón, ImgJuguetón } = detail;





    templateDetails.querySelector('h5').textContent = Title;
    templateDetails.getElementById('imgdetails').setAttribute('src', Image);

    const cloning = templateDetails.cloneNode(true)

    document.body.appendChild(cloning)


//---------devolver al body a su estado original, botón back-------//

    





};




//---------------details gatos---------------//

/*const DetallesAnimal = async (id) => {
    console.log('recibí un: ', id)

    const response = await GetData()



}
console.log("hola")

DetallesAnimal()*/



