function loadUsers2() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    // .then((json) => console.log(json));
    // .then((data) => console.log(data));
    .then((data) => displayUsers2(data));
}

// function displayUsers2(data) {
//   for (let i = 0; i < data.length; i++) {
//     const element = data[i];
//     console.log(i + 1, "name", element.name);
//     console.log("name", element.name);
//     console.log("email", element.email);
//     console.log("username", element.username);
//   }
// }

function displayUsers2(data) {
  const ul = document.getElementById("users-list");
  for (const user of data) {
    // console.log(user.name);
    const li = document.createElement("li");
    li.innerText = user.name;
    ul.appendChild(li);
  }
}
