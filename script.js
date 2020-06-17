let data = [];

function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);

  document.getElementById("myUL").appendChild(li);

  let edit = document.createElement("BUTTON");
  let editText = document.createTextNode("Edit");

  edit.appendChild(editText);
  li.appendChild(edit);

  let hapus = document.createElement("BUTTON");
  let hapusText = document.createTextNode("Hapus");

  hapus.appendChild(hapusText);
  li.appendChild(hapus);
}

const button = document.getElementById("add");
button.addEventListener("click", newElement);
