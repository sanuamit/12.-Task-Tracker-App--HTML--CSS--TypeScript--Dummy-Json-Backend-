// Select DOM elements
const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const addTaskBtn = document.getElementById("addTaskBtn") as HTMLButtonElement;
const taskList = document.getElementById("taskList") as HTMLUListElement;

// Task array to hold all tasks
let tasks: string[] = [];

// Function to add a task
function addTask(): void {
  const task = taskInput.value.trim();
  if (task) {
    tasks.push(task);
    taskInput.value = "";
    renderTasks();
  }
}

// Function to delete a task
function deleteTask(index: number): void {
  tasks.splice(index, 1);
  renderTasks();
}

// Function to render tasks
function renderTasks(): void {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteButton";
    deleteBtn.addEventListener("click", () => deleteTask(index));

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

// Event listener for the Add Task button
addTaskBtn.addEventListener("click", addTask);

// Render initial tasks
renderTasks();
