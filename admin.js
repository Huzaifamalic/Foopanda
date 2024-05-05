
let getul = document.querySelector('#getUl');

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

   
}

// Responsive behavior
function isMobile() {
    return window.innerWidth < 768; 
    
}

function addtodoResponsive() {
    if (isMobile()) {
        // Adjust behavior for mobile devices
        // For example, show a different UI or execute different actions
    } else {
        // Default behavior for non-mobile devices
        addtodo();
    }
}


function deltodoall() {
    getul.innerHTML = "";
}

function deltodo(abc) {
    abc.parentNode.remove();
}

function edittodo(abc) {
    var newText = prompt("Enter new text:");
    if (newText !== null && newText !== "") {
        abc.parentNode.firstChild.nodeValue = newText;
    }
}
