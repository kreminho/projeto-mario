const video = document.getElementById("video")
const modal = document.querySelector (".modal");
const botaoTrailer = document.querySelector (".botao-trailer");
const linkDoVideo = video.src; 

function alternarModal () {
    modal.classList.toggle("aberto")
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
})

console.log ('mostrar o document', document)

const botaoFecharModal = document.querySelector(".fechar-modal")

botaoFecharModal.addEventListener("click", () => {
   alternarModal();
    video.setAttribute("src", "")
});
