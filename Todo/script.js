const ToDo = document.getElementById("ToDo");
const tasks = document.getElementById("Tasks");
const header =document.getElementById("header")


ToDo.addEventListener('dblclick', function(event) {
    // Create a new input element
    const input = document.createElement('input');
    input.type = 'text';
    input.style.color = 'white'; // Set text color to white
    input.style.background = 'black'; // Set background to black

    // Handle keydown event to detect Enter key press
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            // Create a new item with the input value
            const newItem = document.createElement('li');
            newItem.textContent = this.value;

            // Add the new item to the list
            tasks.appendChild(newItem);

            // Remove the input field and restore the original container text
            ToDo.removeChild(input);
            ToDo.textContent = 'Double click here to create a new item:';
        }
    });

    // Handle click event to exit the text box if clicked outside
    document.addEventListener('click', function(event) {
        if (event.target !== input) {
            ToDo.removeChild(input);
            ToDo.textContent = 'Double click here to create a new item:';
        }
    });

    // Replace the ToDo content with the input field
    this.innerHTML = '';
    this.appendChild(input);

    // Focus the input field
    input.focus();
    event.stopPropagation(); // Prevent click event from being triggered immediately
});
