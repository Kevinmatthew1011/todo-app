function saveTasks() {
    const tasks = [];

    document.querySelectorAll("#taskList span").forEach(task => {
        tasks.push({
            text: task.textContent,
            completed: task.classList.contains("completed")
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}
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
        saveTasks();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        li.remove();
        saveTasks();

    });

    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    saveTasks();
    input.value = "";
}

document
    .getElementById("taskInput")
    .addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
    function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        const li = document.createElement("li");

        const taskText = document.createElement("span");
        taskText.textContent = task.text;

        if (task.completed) {
            taskText.classList.add("completed");
        }

        taskText.addEventListener("click", () => {
            taskText.classList.toggle("completed");
            saveTasks();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", (event) => {
            event.stopPropagation();
            li.remove();
            saveTasks();
        });

        li.appendChild(taskText);
        li.appendChild(deleteBtn);

        document.getElementById("taskList").appendChild(li);
    });
}

loadTasks();