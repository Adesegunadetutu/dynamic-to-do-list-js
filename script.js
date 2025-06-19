// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create <li> element
        const listItem = document.createElement('li');

        // Create a text node for task text
        const textNode = document.createTextNode(taskText);
        listItem.appendChild(textNode);

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Set onclick event to remove the list item
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Append remove button to list item
        listItem.appendChild(removeButton);

        // Append list item to the task list
        taskList.appendChild(listItem);

        // Clear input
        taskInput.value = '';
    }

    // Add click event listener to Add Task button
    addButton.addEventListener('click', addTask);

    // Add keypress event listener to allow adding task with "Enter"
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
