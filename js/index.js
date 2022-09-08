const btnAdd = document.getElementById("btnAdd");
const todoList = document.getElementById("todoList");
const inputValue = document.getElementById("inputValue");

btnAdd.addEventListener("click", function(){
    var h3 = document.createElement('h3');
    h3.classList.add('h3-style');
    h3.innerHTML = inputValue.value;
    todoList.appendChild(h3);
    inputValue.value = "";

    h3.addEventListener('click', function(){
        h3.style.textDecoration = "line-through";
    })

    var btnExcluir = document.createElement('p');
    btnExcluir.classList.add('btnExcluir');
    btnExcluir.innerHTML = 'x';
    todoList.appendChild(btnExcluir);

    btnExcluir.addEventListener('click', function(){
        todoList.removeChild(h3);
        todoList.removeChild(btnExcluir);
    })
})