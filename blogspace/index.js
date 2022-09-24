fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then(response => response.json())
  .then(data => {
    const postsArray = data.slice(0, 5)
    let html = ""
    for (let post of postsArray) {
      html += `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr />
        `
    }
    document.getElementById("blog-list").innerHTML = html
  })

document.getElementById("new-post").addEventListener("submit", function (e) {
  e.preventDefault()
  const postTitle = document.getElementById("post-title").value
  const postBody = document.getElementById("post-body").value
  const data = {
    title: postTitle,
    body: postBody
  }

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }
  fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
    .then(res => res.json())
    .then(data => console.log(data))
})
