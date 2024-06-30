const inputBox = document.querySelector("#inputBox");
const listContainer = document.querySelector("#listContainer");
const note = document.querySelector(".note");

note.style.visibility = "hidden";

const addTask = () => {
    if (inputBox.value === "") {
        // note.style.visibility = "visible";
        alert("Please select");
    }
    else {
        const task = document.createElement("li");
        task.textContent = inputBox.value;
        listContainer.appendChild(task);

        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        task.appendChild(span);
    }
    inputBox.value = "";
    saveData();

}



listContainer.addEventListener("click", (e)=> {
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();