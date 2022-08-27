function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => displayPosts(json));
}

function displayPosts(posts) {
  const postsContainer = document.getElementById("posts-container");
  for (const post of posts) {
    // if (post.id > 10) return; // stop after 10 posts
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
      <h3>${post.id}</h3>
      <h5>${post.title}</h5>
      <p>${post.body}</p>
    `;
    postsContainer.appendChild(div);
  }
}

loadPosts();

// function loadPosts() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((json) => {
//       json.forEach((post) => {
//         const postElement = document.createElement("div");
//         postElement.innerHTML = `
//             <h3>${post.title}</h3>
//             <p>${post.body}</p>
//             `;
//         document.body.appendChild(postElement);
//       });
//     });
// }

// loadPosts();
