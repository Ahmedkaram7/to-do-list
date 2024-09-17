let inputBox = document.getElementById("input-box");
let listContainer = document.querySelector(".list-container");
let addBtn = document.getElementById("add");

addBtn.addEventListener("click", addTask);

function addTask() {
  if (inputBox.value === "") {
    alert("Write Something");
  } else {
    //create li;
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    // console.log("Error");
    console.log(li);
    listContainer.appendChild(li);
    // console.log("Error");
  }
  inputBox.value = "";
}
