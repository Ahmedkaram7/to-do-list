let inputBox = document.getElementById("input-box");
let listContainer = document.querySelector(".list-container");
let addBtn = document.getElementById("add");

addBtn.addEventListener("click", addTask);

// add task in list
function addTask() {
  if (inputBox.value === "") {
    alert("Write Something");
  } else {
    //create li;
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    // console.log("Error");
    // console.log(li);
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    // console.log("Error");
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  (el) => {
    if (el.target.tagName === "LI") {
      el.target.classList.toggle("cheched");
      saveData();
    } else if (el.target.tagName === "SPAN") {
      el.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("task", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("task");
}
showTask();
