function loadData2() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// function loadUser() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// }

function loadUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => displayUser(json));
}
// function displayUser(json) {
//   let output = "";
//   for (let i = 0; i < json.length; i++) {
//     output += `<li>${json[i].name}</li>`;
//   }
//   document.getElementById("output").innerHTML = output;
// }
function displayUser(data) {
  console.log(data);
}
