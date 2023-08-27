let userName = document.getElementById("username");
const avatar = document.getElementById("avatar");
const comment = document.getElementById("comment");
let chat = document.querySelector(".chat");
const button = document.querySelector(".button");

function capitalize(userName) {
  const newName =
    userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();

  return newName;
}

function addNewComment() {
  chat.innerHTML = `<div class="message">
  <img src="${avatar.value}" alt="face">
  <p class="username">${capitalize(userName.value)}</p>
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
