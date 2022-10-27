
function addToDo(){
    input=document.getElementById('noteInput').value;
    if(input.length > 0){
        newDiv = document.createElement("div");
        newDiv.classList.add("to-do-item");
        newText = document.createTextNode(input);
        newDiv.appendChild(newText);
    
        deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.innerText = "Done!";
        deleteButton.addEventListener('click', function deleteToDo(event) {
            event.target.parentElement.remove();
        })
    
        newDiv.appendChild(deleteButton);
        document.getElementsByClassName('container')[0].appendChild(newDiv);
        document.getElementById('noteInput').value = "";
    }
}