import { url } from "../helpers/contains.js";
import { GetData } from "../helpers/peticiones.js";
import { url2 } from "../helpers/contains.js";
const botonperro = document.getElementById("icon-perro");
const botongato = document.getElementById("icon-gato");
const template = document.getElementById("template").content;
const container = document.getElementById("ContainerCards");
const templateDetails = document.getElementById("TemplateDetails").content;
const btnBack = document.getElementById("btnBack");
const detalleContainer = document.getElementById("detalleContainer");
botonperro.addEventListener("click", async () => {
    const response = await GetData(url);
    console.log("La url", url);
    let demise = document.createDocumentFragment();
    container.innerHTML = "";
    response.forEach((item) => {
        console.log(item);
        const { id, Title, Image, Year, Raza, Sexo, Description } = item;
        template.querySelector("img").setAttribute("src", Image);
        template.querySelector("img").setAttribute("id", id);
        const clone = template.cloneNode(true);
        demise.appendChild(clone);
    });
    container.appendChild(demise);
    container.addEventListener("click", async (e) => {
        const detail = response?.find((fi) => fi.id === e.target.id);
        DetallesAnimales(detail);
    });
});
botongato.addEventListener("click", async () => {
    const response2 = await GetData(url2);
    console.log("La url", url2);
    let demise2 = document.createDocumentFragment();
    container.innerHTML = "";
    response2.forEach((item2) => {
        console.log(item2);
        const { id, Title, Image, Year, Raza, Sexo, Description } = item2;
        template.querySelector("img").setAttribute("src", Image);
        template.querySelector("img").setAttribute("id", id);
        const clone = template.cloneNode(true);
        demise2.appendChild(clone);
    });
    container.appendChild(demise2);
    container.addEventListener("click", async (e) => {
        //    const response = await GetData(url);
        const detail = response2?.find((fi) => fi.id === e.target.id);
        DetallesAnimales(detail);
    });
});
//---------------details perros---------------//
const DetallesAnimales = async (detail) => {
    //   const response = await GetData(url);
    //   const detail = response?.find((fi) => fi.id === id);
    console.log("recibí un Perros: ", detail);
    //Crear los detalles en la misma
    //página 5, ocultando el resto del contenido de la misma//
    const OGBodyContent = document.getElementById("container-all");
    const {
        Title,
        Image,
        Year,
        Raza,
        Sexo,
        Description,
        ImgYear,
        Location,
        ImgLocation,
        ImgRaza,
        PrevOwner,
        PrevOwnerImg,
        Cariñoso,
        ImgCariñoso,
        Inquieto,
        ImgInquieto,
        Juguetón,
        ImgJuguetón,
    } = detail;
    OGBodyContent.style.display = "none";
    templateDetails.getElementById("imgdetails").setAttribute("src", Image);
    templateDetails.querySelector("h1").textContent = Title;
    templateDetails.getElementById("imgSexo").setAttribute("src", Sexo);
    templateDetails.getElementById("imgRaza").setAttribute("src", ImgRaza);
    templateDetails.querySelector(".razatext").textContent = Raza;
    templateDetails.getElementById("imgYear").setAttribute("src", ImgYear);
    templateDetails.querySelector(".edadtext").textContent = Year;
    templateDetails
        .getElementById("imgLocation")
        .setAttribute("src", ImgLocation);
    templateDetails.querySelector(".locationtext").textContent = Location;
    templateDetails
        .getElementById("imgCariñoso")
        .setAttribute("src", ImgCariñoso);
    templateDetails.querySelector(".cariñosotext").textContent = Cariñoso;
    templateDetails
        .getElementById("imgInquieto")
        .setAttribute("src", ImgInquieto);
    templateDetails.querySelector(".inquietotext").textContent = Inquieto;
    templateDetails
        .getElementById("imgJugueton")
        .setAttribute("src", ImgJuguetón);
    templateDetails.querySelector(".juguetontext").textContent = Juguetón;
    templateDetails.getElementById(
        "historiatitle"
    ).textContent = `Historia de ${Title}`;
    templateDetails.querySelector(".historiatext").textContent = Description;
    templateDetails.getElementById("imgOwner").setAttribute("src", PrevOwnerImg);
    templateDetails.querySelector(
        ".Ownertext"
    ).textContent = `Publicado por ${PrevOwner}`;
    // Hace visible el contenedor de detalles
    detalleContainer.style.display = "block";
    // Limpia el contenedor de detalles antes de agregar uno nuevo
    detalleContainer.innerHTML = "";
    const cloning = templateDetails.cloneNode(true);
    detalleContainer.appendChild(cloning);
    const btnBack = document.getElementById("btnBack");
    btnBack.addEventListener("click", () => {
        OGBodyContent.style.display = "block";
        detalleContainer.style.display = "none";
        detalleContainer.innerHTML = "";
    });
};

