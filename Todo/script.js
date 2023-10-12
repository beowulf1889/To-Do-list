document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("button")) {
      const newToDoContainer = document.createElement("div");
      newToDoContainer.className = "w-1/4 To-Do bg-slate-700 text-white rounded-md m-5 p-4";
      newToDoContainer.innerHTML = `
        <input class="flex bg-slate-700 text-xl rounded-md justify-center text-center mb-4 w-full" placeholder="To-Do" id="header">
        <div class="delete-button bg-red-500 focus:outline-none block w-1/4 text-center mb-2 p-2 hover:-translate-y-1 duration-300 rounded-md"></div>
        <div class="make-task bg-amber-400 focus:outline-none block w-full text-center hover:-translate-y-1 mb-2 p-2 hover:scale-105 duration-300 rounded-md"></div>
        <div class="Tasks-container"></div>
        <div class="delete-green-tasks bg-blue-500 focus:outline-none block w-1/4 text-center mb-2 p-2 hover:-translate-y-1 duration-300 rounded-md"></div>
      `;

      document.body.appendChild(newToDoContainer);

      const taskContainer = newToDoContainer.querySelector(".Tasks-container");

      taskContainer.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("text/plain", event.target.id);
        event.target.style.opacity = "0.5";
      });

      taskContainer.addEventListener("dragover", function (event) {
        event.preventDefault();
      });

      taskContainer.addEventListener("drop", function (event) {
        event.preventDefault();
        const taskId = event.dataTransfer.getData("text/plain");
        const draggedTask = document.getElementById(taskId);
        taskContainer.appendChild(draggedTask);
        draggedTask.style.opacity = "1";
      });



      newToDoContainer.addEventListener("click", function (event) {
        const taskContainer = newToDoContainer.querySelector(".Tasks-container");

        if (event.target.classList.contains("delete-green-tasks")) {
          const greenTasks = taskContainer.querySelectorAll('.tasks.bg-green-500');
          greenTasks.forEach(function (greenTask) {
            taskContainer.removeChild(greenTask);
          });
        } else if (event.target.classList.contains("make-task")) {
          const newTask = document.createElement("input");
          newTask.type = "text";
          newTask.classList.add("tasks", "justify-end", "bg-neutral-800", "mb-2", "p-2", "hover:-translate-y-1", "w-full", "text-center", "rounded-md", "hover:scale-105", "duration-300");
          newTask.setAttribute("placeholder", "New Task");

          newTask.addEventListener("dblclick", function () {
            newTask.classList.toggle('bg-green-500');
            newTask.classList.toggle('bg-neutral-800');
          });
          newTask.addEventListener("", function () {
            // Remove the clicked task
            taskContainer.removeChild(newTask);
          });

          taskContainer.appendChild(newTask);
        } else if (event.target.classList.contains("delete-button")) {
          document.body.removeChild(newToDoContainer);
        }
      });
    }
  });
});
