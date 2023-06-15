let username = document.getElementById("username");
const avatar = document.getElementById("avatar");
const comment = document.getElementById("comment");
let chat = document.querySelector(".chat");
const button = document.querySelector(".button");

function capitalize() {
  username.value = username[0].toUpperCase() + username.slice(1).toLowerCase();
}

function addNewComment() {
  chat.innerHTML = `<div class="container">
  <img src="${avatar.value}" alt="face">
  <p class="username">${username.value}</p>
  <p class="message">${comment.value.replace(/(xxx|viagra)/gi, "***")}</p>
  </div>`;
}

function resetForm() {
  username.value = "";
  avatar.value = "";
  comment.value = "";
}

button.addEventListener("click", addNewComment);
button.addEventListener("click", resetForm);
button.addEventListener("click", capitalize);
