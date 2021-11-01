let input = document.querySelector(".task-holder");
let addButton = document.querySelector(".confirm-button");
let incompletedMainDiv = document.querySelector(".incompleted-main-div");
let completedMainDiv = document.querySelector(".completed-main-div");
let deleteButton = document.querySelector(".delete-button");
let saveButton = document.querySelector(".save-button");
let taskReminder = document.querySelector(".task-reminder");

let updateTaskRemainder = function () {
  let allIncompletedDiv = document.querySelectorAll(".incompleted-div");
  if (allIncompletedDiv.length == 0) {
    return (taskReminder.textContent = "You complete all task!");
  }
  taskReminder.textContent =
    "You must complete " + allIncompletedDiv.length + " task.";
};

let addTask = function () {
  if (!input.value) return;
  let incompletedDiv = document.createElement("div");
  let cancelButton = document.createElement("button");
  cancelButton.className = "cancel-button";
  cancelButton.textContent = "delete";
  incompletedDiv.className = "incompleted-div";
  incompletedDiv.textContent = input.value;
  input.value = "";
  incompletedMainDiv.append(incompletedDiv);
  incompletedDiv.append(cancelButton);
  input.focus();
  updateTaskRemainder();
};

let removeTask = function (event) {
  if (event.target.className == "cancel-button") {
    let removeDiv = event.target.closest(".incompleted-div");
    if (removeDiv == null) {
      removeDiv = event.target.closest(".completed-div");
    }
    removeDiv.remove();
    updateTaskRemainder();
  }
};

addButton.addEventListener("click", addTask);
input.addEventListener("keypress", (keyPressed) => {
  const keyEnter = 13;
  if (keyPressed.which == keyEnter) {
    addTask();
  }
});

document.addEventListener("click", removeTask);

incompletedMainDiv.addEventListener("click", function (event) {
  if (event.target.className != "incompleted-div") return;
  let completedDiv = event.target;
  completedDiv.className = "completed-div";
  completedMainDiv.append(completedDiv);
  updateTaskRemainder();
});

completedMainDiv.addEventListener("click", function (event) {
  if (event.target.className != "completed-div") return;
  let incompletedDiv = event.target;
  incompletedDiv.className = "incompleted-div";
  incompletedMainDiv.append(incompletedDiv);
  updateTaskRemainder();
});

saveButton.addEventListener("click", () => {
  localStorage.setItem("incompleted-task", incompletedMainDiv.innerHTML);
  localStorage.setItem("completed-task", completedMainDiv.innerHTML);
});

function loadTask() {
  let dataIncompleteTask = localStorage.getItem("incompleted-task");
  let dataCompleteTask = localStorage.getItem("completed-task");
  if (dataIncompleteTask) {
    incompletedMainDiv.innerHTML = dataIncompleteTask;
  }
  if (dataCompleteTask) {
    completedMainDiv.innerHTML = dataCompleteTask;
  }
}

deleteButton.addEventListener("click", () => {
  incompletedMainDiv.innerHTML = "";
  completedMainDiv.innerHTML = "";
  taskReminder.textContent = "Please, add your task.";
  localStorage.clear();
});

document.addEventListener("DOMContentLoaded", loadTask);
