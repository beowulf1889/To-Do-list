// Get the ToDo element by its id
const ToDo = document.getElementById("make-task");
const tasksContainer = document.getElementById("Tasks");

ToDo.addEventListener('dblclick', function(event) {
    // Create a new input element
    const input = document.createElement('input');
    input.type = 'text';
    input.style.color = 'white'; // Set text color to white
    input.style.background = 'black'; // Set background to black

    // Handle keydown event to detect Enter key press
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            // Generate a random ID for the task
            const taskId = generateRandomId();

            // Create a new div element for the task with the generated ID
            const taskDiv = document.createElement('div');
            taskDiv.className = 'tasks'; // Apply CSS class for styling
            taskDiv.textContent = this.value;
            taskDiv.id = taskId;

            // Append the new task div to the tasks container
            tasksContainer.appendChild(taskDiv);

            // Remove the input field and restore the original container text
            ToDo.removeChild(input);
            ToDo.textContent = 'Double click here to create a new item:';
        }
    });

    // Handle click event to exit the text box if clicked outside
    document.addEventListener('click', function(event) {
        if (event.target !== input) {
            ToDo.removeChild(input);
            
        }
    });

    // Replace the ToDo content with the input field
    this.innerHTML = '';
    this.appendChild(input);
s
    // Focus the input field
    input.focus();
    event.stopPropagation(); // Prevent click event from being triggered immediately
});

// Function to generate a random ID for tasks
function generateRandomId() {
    return 'task-' + Math.random().toString(36).substr(2, 9);
}

