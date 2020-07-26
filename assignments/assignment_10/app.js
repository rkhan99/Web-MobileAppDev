var list = document.getElementById("list")
function addItem () {
    
    var todo_item = document.getElementById("todo-list")
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    var input = document.createElement("input")
    li.classList.add("todoitem")
    
    li.appendChild(liText)
    list.appendChild(li)

    var delbtn = document.createElement("button")
    var delbtnText = document.createTextNode("DELETE")
    delbtn.classList.add("delbtn")
    delbtn.setAttribute("onclick", "deleteItem(this)")
    delbtn.appendChild(delbtnText)
 
    var editbtn = document.createElement("button")
    var editbtnText = document.createTextNode("EDIT")
    editbtn.setAttribute("class","editbtn")
    editbtn.appendChild(editbtnText)
    editbtn.setAttribute("onclick","editItem(this)")

    li.appendChild(editbtn)
    li.appendChild(delbtn)
    console.log(li)
}

function deleteItem(e) {
    e.parentNode.remove()
}

function deleteAll() {
    list.innerHTML = ""
}  

function editItem(e) {
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt ("Enter edit Value", val)
    val = editValue

}