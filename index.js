const button = document.getElementById("btn");
let containerUl = document.querySelector(".container-ul");
let inputValue = document.getElementById("myInput");
let myUL = document.getElementById("myUL");

button.addEventListener("click", (event) => {
  event.preventDefault();
  newElement();
});

let listArr = localStorage.getItem("tarefas")
  ? localStorage.getItem("tarefas").split(",")
  : [];
render();

function newElement() {
  if (inputValue === "") {
    alert("Escreva algo!");
  } else {
    listArr.push(inputValue.value);
    localStorage.setItem("tarefas", listArr);
    render();
  }
}

function addStorage(tarefas) {
  tarefas.push(inputValue.value);

  let userData = inputValue.value;
  tarefas.push(userData);
}

function render() {
  myUL.innerHTML = "";
  ExtendsLi();

  listArr.forEach((element) => {
    let li = document.createElement("li");
    li.innerHTML = `${element} <img src="./assets/lixo.png" class="span-close">`;
    myUL.appendChild(li);
    inputValue.value = "";
  });
}

myUL.addEventListener("click", function (e) {
  if (e.target.className == "span-close") {
    const li = e.target.parentElement;
    myUL.removeChild(li);
    listArr = listArr.filter((x) => {
      return x != li.innerText.split(" ")[0];
    });

    localStorage.setItem("tarefas", listArr.join(","));
  }
});

function ExtendsLi() {
  if (listArr.length >= 3) {
    return (containerUl.style.overflow = "auto");
  }
}
