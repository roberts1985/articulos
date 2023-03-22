import { getPost } from "./api.js";

const printArticles = async () =>{
    let articles = await getPost()
    let lista = document.querySelector("#list")

    articles.forEach(element => {
        let { id, title} = element
        let liArticles = document.createElement("li")
        liArticles.classList.add("list-group-item")
        let anchorArticles = document.createElement("a")
        anchorArticles.classList.add("list-group-item")
        anchorArticles.textContent = title
        anchorArticles.setAttribute("href",`./detalles.html?id=${id}`)
        anchorArticles.setAttribute("target","_blank")
        liArticles.appendChild(anchorArticles)
        lista.appendChild(liArticles)
    });
}

printArticles()