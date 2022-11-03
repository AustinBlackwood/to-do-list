
function addToDo(){
    input=document.getElementsByClassName('input-bar')[0].value;
    if(input.length > 0){
        toDoItem = document.createElement("div");
        checkBox = document.createElement("input");
        toDoText = document.createElement("textarea");

        checkBox.type= "checkbox";

        toDoItem.classList.add("to-do-item");
        checkBox.classList.add("check-box")
        toDoText.classList.add("to-do-text")
        
        toDoText.setAttribute("maxlength","45");
        toDoText.innerText = input;

        toDoItem.appendChild(checkBox);
        toDoItem.appendChild(toDoText);

        createDeleteButton();

        toDoItem.appendChild(deleteButton);
        document.getElementsByClassName('container')[0].appendChild(toDoItem);
        document.getElementsByClassName('input-bar')[0].value='';
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


function deleteAllToDos(){
    toDoItems = document.getElementsByClassName('to-do-item');
    console.log(toDoItems);
    for(let i = toDoItems.length-1; i > -1; i--) {
        console.log(toDoItems[0]);
        toDoItems[i].remove();
    }
}

//Allows enter key to add a to-do
function prepKeyPress(){
    input=document.getElementsByClassName('input-bar')[0];
    console.log(input);
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
        document.getElementById("add-button").click();
        }
    })
};

window.onload = prepKeyPress;