/*Temas de cores
    Verde = #1bd02a
    Azul = #1b5ad0
*/


function sobre(){
    let guiaSobre = document.getElementById("guia-sobre");
    let guiaSkills = document.getElementById("guia-skills");
    let guiaProjetos = document.getElementById("guia-projetos");
    let guiaTecnologias = document.getElementById("guia-tecnologias");
    let indicador = document.getElementById("indicador");

    guiaSobre.style.color = "#1bd02a"
    guiaSkills.style.color = "azure";
    guiaProjetos.style.color = "azure";
    guiaTecnologias.style.color = "azure";
    indicador.innerHTML = "Sobre mim";
    indicador.style.animation = "indicadorAnimation 0.8s forwards"

    setTimeout(() => {
        indicador.style.animation = "none"
    }, 800)
}
function skills(){
    let guiaSobre = document.getElementById("guia-sobre");
    let guiaSkills = document.getElementById("guia-skills");
    let guiaProjetos = document.getElementById("guia-projetos");
    let guiaTecnologias = document.getElementById("guia-tecnologias");
    let indicador = document.getElementById("indicador");

    guiaSobre.style.color = "azure";
    guiaSkills.style.color = "#1bd02a";
    guiaProjetos.style.color = "azure";
    guiaTecnologias.style.color = "azure";
    indicador.innerHTML = "Soft Skills";
    indicador.style.animation = "indicadorAnimation 1s forwards"

    setTimeout(() => {
        indicador.style.animation = "none"
    }, 800)
}
function projetos(){
    let guiaSobre = document.getElementById("guia-sobre");
    let guiaSkills = document.getElementById("guia-skills");
    let guiaProjetos = document.getElementById("guia-projetos");
    let guiaTecnologias = document.getElementById("guia-tecnologias");
    let indicador = document.getElementById("indicador");

    guiaSobre.style.color = "azure";
    guiaSkills.style.color = "azure";
    guiaProjetos.style.color = "#1bd02a";
    guiaTecnologias.style.color = "azure"
    indicador.innerHTML = "Meus projetos";
    indicador.style.animation = "indicadorAnimation 1s forwards"

    setTimeout(() => {
        indicador.style.animation = "none"
    }, 800)
}
function tecnologias(){
    let guiaSobre = document.getElementById("guia-sobre");
    let guiaSkills = document.getElementById("guia-skills");
    let guiaProjetos = document.getElementById("guia-projetos");
    let guiaTecnologias = document.getElementById("guia-tecnologias");
    let indicador = document.getElementById("indicador");

    guiaSobre.style.color = "azure";
    guiaSkills.style.color = "azure";
    guiaProjetos.style.color = "azure";
    guiaTecnologias.style.color = "#1bd02a";
    indicador.innerHTML = "Técnologias";
    indicador.style.animation = "indicadorAnimation 1s forwards"

    setTimeout(() => {
        indicador.style.animation = "none"
    }, 800)
}