const todoList = [{ name: 'make dinner', dueDate: '2022-12-04' }, { name: 'wash dishes', dueDate: '2022-03-23' }];

function renderTodoList() {
    let todoListHTML = '';
    todoList.forEach(function (todoObject, index) {
        const { name, dueDate } = todoObject; //take ppty out of obj

        const html =
            `<div>${name}</div>
        <div>${dueDate}</div>
        <button 

        class="delete-todo-button js-delete-todo-button">Delete</button>
        `;
        todoListHTML += html;
    });
            // onclick="
        // todoList.splice(${index}, 1); 
        // renderTodoList();"
        
    // for (let i = 0; i < todoList.length; i++) {
    //     // const todo = todoList[i];
    //     const todoObject = todoList[i];
    //     // const name = todoObject.name;
    //     // const dueDate = todoObject.dueDate;
    //     const { name, dueDate } = todoObject; //take ppty out of obj

    //     const html = 
    //     // `<p>
    //     // ${name} ${dueDate} <button onclick="
    //     // todoList.splice(${i}, 1); 
    //     // renderTodoList();
    //     // ">Delete</button>
    //     // </p>`; //generating the html
    //     `<div>${name}</div>
    //     <div>${dueDate}</div>
    //     <button onclick="
    //     todoList.splice(${i}, 1); 
    //     renderTodoList();"
    //     class="delete-todo-button">Delete</button>
    //     `;
    //     todoListHTML += html;
    // }
    //console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1); 
            renderTodoList();
        });
    });
            //closure - if a func has access to a valie
            //console.log(index); //closure for index


    // Save the updated todo list HTML to local storage
    //localStorage.setItem('todoListHTML', todoListHTML);

}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
    addTodo();
});

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    //console.log(name);
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    // todoList.push({name: name,dueDate: dueDate }); //if ppty & value name is same, use below
    todoList.push({ name, dueDate });

    //console.log(todoList);
    localStorage.setItem('todoList', JSON.stringify(todoList));

    inputElement.value = ''; //makes textbox empty, reset
    dateInputElement.value = ''; //makes textbox empty, reset

    renderTodoList();
}



// let todoList = [];


// function renderTodoList() {
//     let todoListHTML = '';

//     for (let i = 0; i < todoList.length; i++) {
//         const todoObject = todoList[i];
//         const { name, dueDate } = todoObject;

//         const html = `
//             <div>${name}</div>
//             <div>${dueDate}</div>
//             <button onclick="deleteTodoItem(${i})" class="delete-todo-button">Delete</button>
//         `;
//         todoListHTML += html;
//     }

//     document.querySelector('.js-todo-list').innerHTML = todoListHTML;

//     // Save the updated todo list HTML to local storage
//     localStorage.setItem('todoListHTML', todoListHTML);
// }

// function deleteTodoItem(index) {
//     todoList.splice(index, 1);
//     renderTodoList();
// }

// function addTodo() {
//     const inputElement = document.querySelector('.js-name-input');
//     const name = inputElement.value;
//     const dateInputElement = document.querySelector('.js-due-date-input');
//     const dueDate = dateInputElement.value;

//     todoList.push({ name, dueDate });
//     localStorage.setItem('todoList', JSON.stringify(todoList));

//     inputElement.value = '';
//     dateInputElement.value = '';

//     renderTodoList();
// }

// // Retrieve the todo list HTML from local storage
// const todoListHTML = localStorage.getItem('todoListHTML');
// document.querySelector('.js-todo-list').innerHTML = todoListHTML;

// // Retrieve the todo list from local storage
// const storedTodoList = localStorage.getItem('todoList');
// if (storedTodoList) {
//     todoList = JSON.parse(storedTodoList);
// }
