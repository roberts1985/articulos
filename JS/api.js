const getPost = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await response.json()
    return data
}

const getPostID = async (id) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    let data = await response.json()
    return data
}

export {
    getPost, getPostID
}