let username = document.getElementById("username");
const avatar = document.getElementById("avatar");
const comment = document.getElementById("comment");
let chat = document.querySelector(".chat");
const button = document.querySelector(".button");
let time;

function capitalize(userName) {
  const newName =
    userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
  return newName;
}
function timeConverter() {
  let date = new Date();
  let day = date.getDay();
  let number = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (day == 0) day = "Вс";
  else if (day == 1) day = "Пн";
  else if (day == 2) day = "Вт";
  else if (day == 3) day = "Ср";
  else if (day == 4) day = "Чт";
  else if (day == 5) day = "Пт";
  else if (day == 6) day = "Сб";

  if (month == 0) month = "января";
  else if (month == 1) month = "февраля";
  else if (month == 2) month = "марта";
  else if (month == 3) month = "апреля";
  else if (month == 4) month = "мая";
  else if (month == 5) month = "июня";
  else if (month == 6) month = "июля";
  else if (month == 7) month = "августа";
  else if (month == 8) month = "сентября";
  else if (month == 9) month = "октября";
  else if (month == 10) month = "ноября";
  else if (month == 11) month = "декабря";

  if (hours < 10) hours = `0${hours}`;

  if (minutes < 10) minutes = `0${minutes}`;

  if (seconds < 10) seconds = `0${seconds}`;

  time = `${day}, ${number} ${month} ${year} в ${hours}:${minutes}:${seconds}`;

  return time;
}

function addNewComment() {
  // console.log("1", username.value);
  chat.innerHTML = `<div class="message">
  <img src="${avatar.value}" alt="face">
  <p class="username">${capitalize(username.value)}</p>
  <p class="date">${timeConverter()}</p>
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
// button.addEventListener("click", timeConverter);
