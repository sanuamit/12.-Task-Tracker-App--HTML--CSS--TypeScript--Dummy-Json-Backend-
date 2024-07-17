"use strict";
// Select DOM elements
var taskInput = document.getElementById("taskInput");
var addTaskBtn = document.getElementById("addTaskBtn");
var taskList = document.getElementById("taskList");
// Task array to hold all tasks
var tasks = [];
// Function to add a task
function addTask() {
    var task = taskInput.value.trim();
    if (task) {
        tasks.push(task);
        taskInput.value = "";
        renderTasks();
    }
}
// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
// Function to render tasks
function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach(function (task, index) {
        var li = document.createElement("li");
        li.textContent = task;
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "deleteButton";
        deleteBtn.addEventListener("click", function () { return deleteTask(index); });
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}
// Event listener for the Add Task button
addTaskBtn.addEventListener("click", addTask);
// Render initial tasks
renderTasks();
