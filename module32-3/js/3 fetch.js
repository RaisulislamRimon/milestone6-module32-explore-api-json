// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// for (let i = 1; i < 10; i++) {
//   fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
//     .then((response) => response.json())
//     .then((json) => console.log(json));
//   console.log(i);
// }

// fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
//   console.log(response);
// });

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// const url = "https://jsonplaceholder.typicode.com/todos/1";
// fetch(url)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// function loadData() {
//   const url = "https://jsonplaceholder.typicode.com/todos/1";
//   fetch(url)
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// }
// loadData();

function loadData() {
  const jsonViewer = document.getElementById("json-viewer");
  const p = document.createElement("p");

  const url = "https://jsonplaceholder.typicode.com/todos/1";
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      p.innerText = json.title;
      jsonViewer.appendChild(p);
    })
    .catch((error) => {
      console.log(error);
      p.innerText = error;
      p.style.color = "red";
      jsonViewer.appendChild(p);
    });
}
