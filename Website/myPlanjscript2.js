

function myFunctionbright() {
    const header = document.getElementById('header');
    document.body.style.backgroundColor="white";
    document.body.style.color="black";
    header.classList.remove('blueheader', 'darkheader');
    const todoButton = document.getElementsByClassName('todo-button');
    todoButton.classList.remove();
    
}

function myFunctiondark(){
    const header = document.getElementById('header');
    document.body.style.backgroundColor = "#262626";
    document.body.style.color = "white";
    header.classList.remove('blueheader')
    header.classList.add('darkheader');
    const todoButton = document.getElementsByClassName('todo-button');
    todoButton.classList.add('darkbutton');
    const kalenderLine= document.getElementsByClassName("kalenderline");
    kalenderLine.classList.add('darkkalenderline');

    
    
}

function myFunctionblue(){
    const header = document.getElementById('header');
    document.body.style.backgroundColor ="#4366a7 ";
    document.body.style.color = "white";
    header.classList.remove('darkheader');
    header.classList.add('blueheader');
    const todoButton = document.getElementsByClassName('todo-button');
    todoButton.classList.remove();
    todoButton.classList.add('bluebutton');
}

//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listener
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener("click",addTodo);
todoList.addEventListener('click', deleteCheck);




//Functions

function addTodo(event){
    //Prevent form from submitting 
    event.preventDefault();

    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value ;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //Add todo to localstorage
    saveLocalTodos(todoInput.value);

    //Checkmark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i> ';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

     //Delete Button
     const deleteButton = document.createElement('button');
     deleteButton.innerHTML = '<i class = "fas fa-trash"></i> ';
     deleteButton.classList.add("trash-btn");
     todoDiv.appendChild(deleteButton);

     //append whole todo element created to list
     todoList.appendChild(todoDiv);

     //Clear todo INPUT Value
     todoInput.value = "";
} 


function deleteCheck(event){
    const item = event.target;
    //Delete Todo
    if (item.classList[0]=== "trash-btn"){
        const todo = item.parentElement;
        todo.remove();
        removeLocalTodos(todo);
        /*todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
            todo.remove();
        });*/
    }

    //Checkmark
    if (item.classList[0]==="complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

//save todos
function saveLocalTodos(todo){
    //Check if there are already inputs:
    let todos;
    if(localStorage.getItem('todos')===null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));

}

function getTodos(){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
    //Todo div
        const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //Checkmark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i> ';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

     //Delete Button
     const deleteButton = document.createElement('button');
     deleteButton.innerHTML = '<i class = "fas fa-trash"></i> ';
     deleteButton.classList.add("trash-btn");
     todoDiv.appendChild(deleteButton);

     //append whole todo element created to list
     todoList.appendChild(todoDiv);
    })
}

function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}

//date
var options = { day: 'numeric', month: 'long', year: 'numeric' };
const date = document.getElementById("dateDiv");
date.innerHTML = new Date().toLocaleDateString("en-DE", options);



let montag = document.getElementById("mo");
let dienstag = document.getElementById("di");
let mittwoch = document.getElementById("mi");
let donnerstag = document.getElementById("do");
let freitag = document.getElementById("fr");
let samstag = document.getElementById("sa");
let sonntag = document.getElementById("so");

let today;
switch (new Date().getDay()) {
    case 0:  
        today = sonntag;
        today.style.background = "rgb(245, 155, 96)";
        today.style.color = "white"
      break;
    case 1:
        today = montag;
        today.style.background = "rgb(245, 155, 96)"
        today.style.color = "white";
      break;
    case 2:
        today = dienstag;
        today.style.background = "rgb(245, 155, 96)";
        today.style.color = "white";
      break;
    case 3:
        today = mittwoch;
        today.style.background = "rgb(245, 155, 96)";
        today.style.color = "white"
      break;
    case 4:
        today = donnerstag;
        today.style.background = "rgb(245, 155, 96)";
        today.style.color = "white"
      break;
    case 5:
        today = freitag;
        today.style.background = "rgb(245, 155, 96)";
        today.style.color = "white"
      break;
    case 6:
        today = samstag;
        today.style.background = "rgb(245, 155, 96)";
        today.style.color = "white"
        
  }

  console.log(today);

  
  

















