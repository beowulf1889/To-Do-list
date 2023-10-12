document.addEventListener("DOMContentLoaded", function() {
    const makeTaskButtons = document.getElementsByClassName("button");
  
    Array.from(makeTaskButtons).forEach(function(button) {
      button.addEventListener("click", function() {
        // Create a new to-do list container
        const newToDoContainer = document.createElement("div");
        newToDoContainer.className = "w-1/4 To-Do bg-slate-700 text-white rounded-md m-5 p-4";
  
        // Create header input element
        const headerInput = document.createElement("input");
        headerInput.id = "header";
        headerInput.className = "flex bg-slate-700 text-xl rounded-md justify-center text-center mb-4 w-full";
        newToDoContainer.appendChild(headerInput);
        headerInput.setAttribute("placeholder", "To-Do");
  
        // Create "Delete" button
        const deleteButton = document.createElement("div");
        deleteButton.className = "delete-button bg-red-500 focus:outline-none block w-full text-center mb-2 p-2 hover:-translate-y-1 duration-300 rounded-md";
        deleteButton.innerText = "";
        newToDoContainer.appendChild(deleteButton);
  
        // Create "Make Task" button
        const makeTaskButton = document.createElement("div");
        makeTaskButton.className = "make-task bg-amber-400 focus:outline-none block w-full text-center hover:-translate-y-1 mb-2 p-2 hover:scale-105 duration-300 rounded-md";
        makeTaskButton.innerText = "";
        newToDoContainer.appendChild(makeTaskButton);
  
        // Create tasks container
        const tasksContainer = document.createElement("div");
        tasksContainer.className = "Tasks-container";
        newToDoContainer.appendChild(tasksContainer);
  
        // Append the new to-do list to the body or another container
        document.body.appendChild(newToDoContainer);
  
        // Event listener for adding tasks to the new to-do list
        makeTaskButton.addEventListener("click", function() {
          // Create a new task element
          const newTask = document.createElement("input");
          newTask.type = "text";
          newTask.classList.add("tasks", "bg-neutral-800", "mb-2", "p-2", "hover:-translate-y-1", "w-full", "text-center", "rounded-md", "hover:scale-105", "duration-300");
          newTask.setAttribute("placeholder", "New Task");
  
          // Add double-click event listener to the new task
          newTask.addEventListener("dblclick", function() {
            // Toggle Tailwind CSS classes to change background color
            newTask.classList.toggle('bg-green-500');
            newTask.classList.toggle('bg-neutral-800');
          });
  
          // Append the new task element to the tasks container of the new to-do list
          tasksContainer.appendChild(newTask);
        });
  
        // Event listener for deleting the to-do list
        deleteButton.addEventListener("click", function() {
          // Remove the to-do list container from the document
          document.body.removeChild(newToDoContainer);
        });
      });
    });
  });
  
// Function to delete individual task
function deleteTask(taskElement) {
    taskElement.remove();
}

// Function to delete all green tasks
function deleteAllGreenTasks() {
    const greenTasks = document.querySelectorAll('.task.bg-green-500');
    greenTasks.forEach(task => task.remove());
}

// Event listener for deleting individual tasks using backspace key
document.addEventListener('keydown', function(event) {
    // Check if the pressed key is the backspace key (keyCode 8)
    if (event.keyCode === 8) {
        // Check if the active element has the class 'task'
        if (document.activeElement.classList.contains('task')) {
            deleteTask(document.activeElement);
        }
    }
});

// Event listener for deleting all green tasks
document.getElementById('deleteGreenTasksButton').addEventListener('click', function() {
    deleteAllGreenTasks();
});
