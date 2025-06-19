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

        // Create a text node for the task text
        const textNode = document.createTextNode(taskText);
        listItem.appendChild(textNode);

        // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn'); // ✅ use classList.add()

        // Add event to remove the task when clicked
        removeButton.addEventListener('click', function () {
            taskList.removeChild(listItem);
        });

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Add click event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Add keypress event listener for the Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
