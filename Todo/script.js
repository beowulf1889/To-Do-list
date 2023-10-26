function saveToLocalStorage(id, data) {
  localStorage.setItem(id, JSON.stringify(data));
}
document.addEventListener("DOMContentLoaded", () => {

  Object.keys(localStorage).forEach(id => {
    const toDoData = JSON.parse(localStorage.getItem(id));
    document.body.appendChild(toDoData);
  });



});
document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("button")) {
      const newToDoContainer = document.createElement("div");
      saveToLocalStorage(newToDoContainer.id, {
        header: "",
        tasks: []
      });




      localStorage.setItem(newToDoContainer.id, JSON.stringify(newToDoContainer));
      newToDoContainer.className = "w-1/4 To-Do bg-slate-700 text-white rounded-md m-5 p-4";
      newToDoContainer.innerHTML = `
        <input class="flex bg-slate-700 text-xl rounded-md justify-center text-center mb-4 w-full" placeholder="To-Do" id="header">
        <div class="delete-button bg-red-500 focus:outline-none block w-1/4 text-center mb-2 p-2 hover:-translate-y-1 duration-300 rounded-md"></div>
        <div class="make-task bg-amber-400 focus:outline-none block w-full text-center hover:-translate-y-1 mb-2 p-2 hover:scale-105 duration-300 rounded-md"></div>
        <div class="Tasks-container "></div>
        <div class=" w-full flex"></div>
        <div class="delete-green-tasks ml-auto bg-blue-500 justify-end focus:outline-none block w-1/4 text-center mb-2 p-2 hover:-translate-y-1 duration-300 rounded-md"></div>
      `;

      document.body.appendChild(newToDoContainer);

      const taskContainer = newToDoContainer.querySelector(".Tasks-container");






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
          newTask.addEventListener("keydown", function (event) {
            // Check if the pressed key is the delete key (keycode 46)
            if (event.keyCode === 46) {
              // Remove the task if the delete key is pressed
              taskContainer.removeChild(newTask);
            }
          });

          taskContainer.appendChild(newTask);
        } else if (event.target.classList.contains("delete-button")) {
          document.body.removeChild(newToDoContainer);
        }
        taskContainer.addEventListener("click", e => {
          // Mark task as complete
          if (e.target.classList.contains('complete-task')) {
            const taskId = e.target.parentElement.id;
            const taskData = JSON.parse(localStorage.getItem(taskId));
            // Modify taskData.tasks based on the completion status
            localStorage.setItem(taskId, JSON.stringify(taskData));
          }

          // Delete to-do
          if (e.target.classList.contains('delete-button')) {
            const toDoId = e.target.parentElement.id;
            localStorage.removeItem(toDoId);
            e.target.parentElement.remove();
          }

        });
      });
    }
  });
});