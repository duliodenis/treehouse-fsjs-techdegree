/*
  Create an array of 'pet' objects.
  Each object should have the following properties: 
  name, type, breed, age, and photo

      <h2>Joey</h2>
      <h3>Dog | Australian Shepherd</h3>
      <p>Age: 8</p>
      <img src="img/aussie.jpg" alt="Australian Shepherd">

*/
const pets = [
  { name: 'Joey', type: 'Dog | Aussie', age: 8, image: 'img/aussie.jpg', alt: "Australian Shepard" },
  { name: 'Petey', type: 'Dog | Daschshund', age: 3, image: 'img/dachshund.jpg', alt: "Dachshund" },
  { name: 'Charlie', type: 'Dog | Golden Retriever', age: 12, image: 'img/golden.jpg', alt: "Golden Retriever" },
  { name: 'Alex', type: 'Cat | Persian', age: 11, image: 'img/persian.jpg', alt: "Persian Cat" },
  { name: 'Balls', type: 'Dog | Pug', age: 7, image: 'img/pug.jpg', alt: "Pug" },
  { name: 'Yellow', type: 'Cat | Tabby', age: 9, image: 'img/tabby.jpg', alt: "Tabby" }
]

const main = document.querySelector('main')

let html = ""
for (let i = 0; i < pets.length; i++) {
  html += `<h2>${pets[i].name}</h2><h3>${pets[i].type}</h3><p>Age ${pets[i].age}</p><img src="${pets[i].image}" alt="${pets[i].alt}">`
}

main.insertAdjacentHTML("beforeend", html)
