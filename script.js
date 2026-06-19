function addTask() {
    const input = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (input.value.trim() === "") {
        return;
    }

    const li = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = input.value;

    taskText.addEventListener("click", () => {
        taskText.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        li.remove();
    });

    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    input.value = "";
}

document
    .getElementById("taskInput")
    .addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });