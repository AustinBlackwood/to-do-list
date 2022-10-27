
function addToDo(){
    input=document.getElementById('noteInput').value;
    if(input.length > 0){
        toDoItem = document.createElement("div");
        toDoItem.classList.add("to-do-item");
        newText = document.createTextNode(input);
        toDoItem.appendChild(newText);
    
        deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.innerText = "Done!";
        deleteButton.addEventListener('click', function deleteToDo(event) {
            event.target.parentElement.remove();
        })
    
        toDoItem.appendChild(deleteButton);
        document.getElementsByClassName('container')[0].appendChild(toDoItem);
        document.getElementById('noteInput').value = "";
    }
}

function prepKeyPress(){
    input=document.getElementById('noteInput');
    input.addEventListener("keypress", function(event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("add-button").click();
        }
    })
};

window.onload = prepKeyPress;