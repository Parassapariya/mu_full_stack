//innnerhtml
document.getElementById("demo").innerHTML = "Hello paras!";

// getattribute and chnage the value of an attribute
const element = document.getElementById("testimonials");
console.log(element.getAttribute("data-info"));
const chnagebutton = document.getElementById("changeButton");
chnagebutton.addEventListener("click", function() {
    element.setAttribute("data-info", "New Value");
    console.log("Attribute changed to:", element.getAttribute("data-info"));
});


//create element and todo lsit using input button and ul list
const todoInput = document.getElementById("todoInput");
const todoButton = document.getElementById("todoButton");
const todoList = document.getElementById("todoList");
todoButton.addEventListener("click", function() {
    const todoText = todoInput.value.trim();
    if (todoText) {
        const li = document.createElement("li");
        li.textContent = todoText;
        todoList.appendChild(li);
        //added remove button to each todo item
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function() {
            todoList.removeChild(li);
        });
        li.appendChild(removeButton);
        todoInput.value = ""; // Clear input field
    } else {
        alert("Please enter a todo item.");
    }
});
