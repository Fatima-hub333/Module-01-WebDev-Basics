// let postsArray = []
// const titleInput = document.getElementById("post-title")
// const bodyInput = document.getElementById("post-body")
// const form = document.getElementById("new-post")

// function renderPosts() {
//   let html = ""
//     for (let post of postsArray) {
//       html += `
//         <h3>${post.title}</h3>
//         <p>${post.body}</p>
//         <hr />
//         <br>
//         `
//     }
//     document.getElementById("blog-list").innerHTML = html
// }

// fetch("https://apis.scrimba.com/jsonplaceholder/posts")
//   .then(response => response.json())
//   .then(data => {
//     postsArray = data.slice(0, 5)
//     renderPosts()
//   })

// form.addEventListener("submit", function (e) {
//   e.preventDefault()
//   const postTitle = titleInput.value
//   const postBody =  bodyInput.value
//   const data = {
//     title: postTitle,
//     body: postBody
//   }

//   const options = {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json"
//     }
//   }
//   fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
//     .then(res => res.json())
//     .then(post => {
//       postsArray.unshift(post)
//       renderPosts()
//       titleInput.value = ""
//       bodyInput.value = ""
//       // form.reset()
//     })
// })

fetch("https://apis.scrimba.com/openweathermap/data/2.5/weather?q=salt lake+city&units=imperial")
  .then(res => res.json())
  .then(data => console.log(data))