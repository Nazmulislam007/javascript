const cardTemplate = document.querySelector("[data-card-template]");
const search = document.querySelector("#search");
const userContainer = document.querySelector("[data-user-container]");

let users = [];

search.addEventListener("input", (e) => {
  const val = e.target.value;
  users.forEach((user) => {
    const isTrue =
      user.name.toLowerCase().includes(val) ||
      user.email.toLowerCase().includes(val);
    user.element.classList.toggle("hide", !isTrue);
  });
});

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    users = data.map((user) => {
      const card = cardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");
      header.textContent = user.name;
      body.textContent = user.email;
      userContainer.append(card);
      return { name: user.name, email: user.email, element: card };
    });
  });
