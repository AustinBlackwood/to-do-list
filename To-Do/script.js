
function addToDo(){
    input=document.getElementById('noteInput').value;
    if(input.length > 0){
        toDoItem = document.createElement("div");
        checkBox = document.createElement("input");
        checkBox.type= "checkbox";
        checkBox.classList.add("check-box")
        toDoItem.classList.add("to-do-item");
        toDoText = document.createElement("textarea");
        toDoText.classList.add("to-do-text")
        toDoText.setAttribute("maxlength","60");
        toDoText.innerText = input;
        toDoItem.appendChild(checkBox);
        toDoItem.appendChild(toDoText);
    

        createDeleteButton();
        toDoItem.appendChild(deleteButton);
        document.getElementsByClassName('container')[0].appendChild(toDoItem);
        document.getElementById('noteInput').value = "";
    }
}

function createDeleteButton(){
    deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerText = "X";
    deleteButton.addEventListener('click', function deleteToDo(event) {
        event.target.parentElement.remove();
    })
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