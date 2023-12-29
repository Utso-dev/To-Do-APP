let button = document.querySelector("#sm-button");
let menu = document.querySelector("#menu");
let closeButton = document.querySelector(".hidden");


button.addEventListener("click", myFunction);

function myFunction(){

    menu.classList.toggle("hidden");
   
   
}

// to do apps=============
const form = document.querySelector("form");
const inputText = document.querySelector("#input");
const incompleteUl = document.querySelector("#incomplete-ul");
const completeUl = document.querySelector("#complete-ul");

let createTask= function(task){
   let listItem = document.createElement("li");
   let chackBox = document.createElement("input");
   let text = document.createElement("p");

   chackBox.type= "checkbox";
   text.innerText=task;
   listItem.appendChild(chackBox);
   listItem.appendChild(text);

   return listItem;

}

let addTask = function(event){
    event.preventDefault()
   let listItem = createTask(inputText.value);
   incompleteUl.appendChild(listItem);
   inputText.value = " " ;
// incomplet to complete task
   bindIncompleteTask(listItem, completeTask );

   listItem.classList.add("incomlistitem");
   let p =listItem.children
   p[1].style.paddingLeft= "10px"
}
let completeTask = function(){

    let listItem = this.parentNode;
    listItem.classList.add("listitem");
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.id = 'delete';
    deleteBtn.className = 'delete-btn';
    listItem.appendChild(deleteBtn);

   let chackBox =listItem.querySelector('input[type="checkbox"]');
   chackBox.remove();
   completeUl.appendChild(listItem);

   baindCompleteTask(listItem, deleteTask );
}
let deleteTask=function(){
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);


}
let baindCompleteTask= function(listItem , onclickDeleteTask){
   let deleteButton = listItem.querySelector("#delete");
    
   deleteButton.onclick= onclickDeleteTask;
}

let bindIncompleteTask = function(listItem, clickChackBox){
 let chackBox = listItem.querySelector('input[type="checkbox"]');
 chackBox.onchange= clickChackBox;
}

for(let i=0; i<incompleteUl.children.length; i++ ){
    bindIncompleteTask(incompleteUl.children[i], completeTask);
}
for(let i=0; i<completeUl.children.length; i++ ){
    baindCompleteTask(completeUl.children[i], deleteTask);
}

form.addEventListener("submit", addTask);