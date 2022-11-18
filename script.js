function addToDo(){
    input=document.getElementsByClassName('to-do-input')[0].value;
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
        document.getElementsByClassName('to-do-container')[0].appendChild(toDoItem);
        document.getElementsByClassName('to-do-input')[0].value='';

        //saves container to local storage
        localStorage.currentSave = document.getElementsByClassName('to-do-container')[0].outerHTML;
    }
}

function createDeleteButton(){
    deleteButton = document.createElement("button");
    deleteButton.classList.add("to-do-delete-button");
    deleteButton.innerText = "X";
    deleteButton.addEventListener('click', function deleteToDo(event) {
        event.target.parentElement.remove();
        localStorage.currentSave = document.getElementsByClassName('to-do-container')[0].outerHTML;
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

//Re-adds event listener to delete buttons when reloading page
function reAddEvents(){
    deleteButtons= document.getElementsByClassName('to-do-delete-button');
    for(let i = 0; i<deleteButtons.length; i++){
        deleteButtons[i].addEventListener('click', function deleteToDo(event) {
            event.target.parentElement.remove();
            localStorage.currentSave = document.getElementsByClassName('to-do-container')[0].outerHTML;
        })
    }
}

//Makes 'enter' key add a to-do
function prepKeyPress(){
    input=document.getElementsByClassName('to-do-input')[0];
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
        document.getElementById("to-do-add-button").click();
        }
    })
};

function loadSavedToDos(){
    let currentSave = localStorage.currentSave;
    if(currentSave == undefined){
        return;
    }
    const container = document.getElementsByClassName('to-do-container')[0];

    //loads local storage
    container.outerHTML=currentSave;
}

function onLoad(){
    loadSavedToDos();
    reAddEvents();
    prepKeyPress();
}

window.onload = onLoad;
