// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Select the necessary DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get the trimmed input value
        const taskText = taskInput.value.trim();

        // Validate input
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Add event listener to remove the task
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Add click event listener to the add button
    addButton.addEventListener('click', addTask);

    // Add keypress event listener for "Enter" key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
