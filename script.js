let divList = document.querySelector(".display-todo");
let listTodo = [];
let addButton = document.getElementById("add-button");

displayTodos = () => {
  divList.innerHTML = null;

  listTodo.forEach((item, index) => {
    let itemTodo = document.createTextNode(item);
    let textTodo = document.createElement("p");
    textTodo.appendChild(itemTodo);
    let divTodo = createDiv("class", "todo").appendChild(textTodo);

    let divButton = createDiv("class", "button");
    let editbutton = createButton("edit");
    let deleteButton = createButton("delete");
    divButton.appendChild(editbutton);
    divButton.appendChild(deleteButton);

    let list = createDiv("class", "list");
    list.appendChild(divTodo);
    list.appendChild(divButton);
    divList.appendChild(list);

    editbutton.addEventListener("click", () => {
      editItem(index);
    });
    deleteButton.addEventListener("click", () => {
      deleteItem(index);
    });
  });
};

createButton = (element) => {
  let button = document.createElement("button");
  button.setAttribute("type", "button");
  button.setAttribute("class", `btn btn-primary btn-sm ${element}`);
  button.setAttribute("id", `${element}`);
  let buttonText = document.createTextNode(`${element}`);
  button.appendChild(buttonText);
  // console.log(button);
  return button;
};

createDiv = (attName, valueAtt) => {
  let div = document.createElement("div");
  div.setAttribute(attName, valueAtt);
  return div;
};

editItem = (index) => {
  newItem = prompt("Mau edit jadi apa?");
  listTodo.splice(index, 1, newItem);

  displayTodos();
};

deleteItem = (index) => {
  listTodo.splice(index, 1);

  displayTodos();
};

addButton.addEventListener("click", () => {
  const inputTodo = document.getElementById("inputTodo").value;
  listTodo.push(inputTodo);
  displayTodos();
});
