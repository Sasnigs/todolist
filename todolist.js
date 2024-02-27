let toDoList = [];

window.onload = function() {
    const storedData = localStorage.getItem('toDoList');
    if (storedData) {
        toDoList = JSON.parse(storedData);
        displayList();
    }
};


function addToList() {
    inputElem = document.querySelector('.js-to-do-list');
    inputElemDueDate = document.querySelector(".js-due-date");
    let toDoValue = inputElem.value;
    let dueDate = inputElemDueDate.value;

    toDoList.push({
        value: toDoValue,
        date: dueDate,
    });
    inputElem.value = " ";
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
    displayList();
}
function deleteItem(index) {
    // Remove the item at the specified index from the to-do list
    toDoList.splice(index, 1);

    // Update the local storage with the modified to-do list
    localStorage.setItem('toDoList', JSON.stringify(toDoList));

    // Update the displayed list
    displayList();
}

function displayList() {
    let addedHtml = '';

    for (i = 0; i < toDoList.length; i++) {
        let todoObject = toDoList[i];
        let listValue = todoObject.value;
        let listDate = todoObject.date;


        let html = `
        <div class"add-todo-input-text"> ${listValue}</div> 
        <div class="add-todo-input-date">${listDate}</div> 
        <button class="todo-list-delete-button"
            onclick= "
            deleteItem(${i});
            "
            >Delete</button>
        `
        addedHtml += html;
    }
    document.querySelector('.js-render-toDo').innerHTML = addedHtml;
}
