
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
        localStorage.currentSave = document.getElementsByClassName('container')[0].outerHTML;
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
    for(let i = toDoItems.length-1; i > -1; i--) {
        toDoItems[i].remove();
    }
    delete localStorage.currentSave;
    prepKeyPress();
}

function loadSavedToDos(){
    let currentSave = localStorage.currentSave;
    if(currentSave == undefined){
        return;
    }
    const container = document.getElementsByClassName('container')[0];
    container.outerHTML=currentSave;
}

//Allows enter key to add a to-do
function prepKeyPress(){
    input=document.getElementsByClassName('input-bar')[0];
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
        document.getElementById("add-button").click();
        }
    })
};

function onPageLoad(){
    prepKeyPress();
    loadSavedToDos();
}

window.onload = onPageLoad;