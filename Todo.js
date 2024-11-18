function addTask() {
    const newTask = document.createElement('li'); // Create a new <li> element
    const taskList = document.getElementById('task-list'); // Corrected method name: getElementById
    newTask.textContent = document.getElementById('inputTask').value; // Get task text from input field
    taskList.appendChild(newTask); // Append the new task to the task list
    document.getElementById('inputTask').value = ''; // Clear the input field

    // Add the delete button to the task
    deleteTask(newTask);
}

function deleteTask(newTask) {
    const deleteBtn = document.createElement('button'); // Create a delete button
    deleteBtn.textContent = "Delete"; // Set button text
    newTask.appendChild(deleteBtn); // Append button to the task
    
    deleteBtn.onclick = function() {
        newTask.remove(); // Remove the task when the button is clicked
    }
}
