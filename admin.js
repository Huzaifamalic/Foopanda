

const getul = document.querySelector('#getUl');

// Load to-dos from local storage on page load
window.onload = function() {
    loadTodos();
};

function addtodo() {
    var getinp = document.getElementById('Inp');
    var cerataeli = document.createElement('li');
    var litext = document.createTextNode(getinp.value);
    cerataeli.appendChild(litext);
    getul.appendChild(cerataeli);
    getinp.value = "";

    // Apply CSS styles
    cerataeli.setAttribute('style', 'text-align: left; font-size: 26px;'); // Align left and increase font size

    var deltebtn = document.createElement('button');
    var txtbtn = document.createTextNode('Delete');
    deltebtn.appendChild(txtbtn);
    deltebtn.setAttribute('onclick', "deltodo(this)");
    deltebtn.setAttribute('style', 'background-color: red; color: white; border-radius: 5px;');
    cerataeli.appendChild(deltebtn);

    var editbtn = document.createElement('button');
    var editTxtBtn = document.createTextNode('Edit');
    editbtn.appendChild(editTxtBtn);
    editbtn.setAttribute('onclick', "edittodo(this)");
    editbtn.setAttribute('style', 'background-color: green; color: white; border-radius: 5px;');
    cerataeli.appendChild(editbtn);

    // Save to-dos to local storage
    saveTodos();
}

function deltodoall() {
    getul.innerHTML = "";
    saveTodos();
}

function deltodo(abc) {
    abc.parentNode.remove();
    saveTodos();
}

function edittodo(abc) {
    var newText = prompt("Enter new text:");
    if (newText !== null && newText !== "") {
        abc.parentNode.firstChild.nodeValue = newText;
        saveTodos();
    }
}

function saveTodos() {
    let todos = [];
    const items = getul.getElementsByTagName('li');
    for (let i = 0; i < items.length; i++) {
        let text = items[i].firstChild.nodeValue;
        todos.push(text);
    }
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos) {
        for (let i = 0; i < todos.length; i++) {
            var cerataeli = document.createElement('li');
            var litext = document.createTextNode(todos[i]);
            cerataeli.appendChild(litext);
            getul.appendChild(cerataeli);

            // Apply CSS styles
            cerataeli.setAttribute('style', 'text-align: left; font-size: 26px;');

            var deltebtn = document.createElement('button');
            var txtbtn = document.createTextNode('Delete');
            deltebtn.appendChild(txtbtn);
            deltebtn.setAttribute('onclick', "deltodo(this)");
            deltebtn.setAttribute('style', 'background-color: red; color: white; border-radius: 5px;');
            cerataeli.appendChild(deltebtn);

            var editbtn = document.createElement('button');
            var editTxtBtn = document.createTextNode('Edit');
            editbtn.appendChild(editTxtBtn);
            editbtn.setAttribute('onclick', "edittodo(this)");
            editbtn.setAttribute('style', 'background-color: green; color: white; border-radius: 5px;');
            cerataeli.appendChild(editbtn);
        }
    }
}