import { getPostID } from "./api.js";

let urlParams = new URLSearchParams(window.location.search)

let postId = urlParams.get("id")

const printPost = async () => {
    let post = await getPostID(postId)

    let { title, body} = post
    let articleTitle = document.querySelector(".card-title")
    articleTitle.textContent = title
    let articleBody = document.querySelector(".card-text")
    articleBody.textContent = body
}

printPost()