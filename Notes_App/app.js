const noteBox = document.querySelector(".noteBox");
const createBtn = document.querySelector(".createBtn");
let notes = document.querySelectorAll(".note");

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");

  inputBox.className = "note";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "delete.png";
  img.className = "delete";
  noteBox.appendChild(inputBox).appendChild(img);
});

noteBox.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
  }
});

