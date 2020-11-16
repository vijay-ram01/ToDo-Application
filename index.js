var inputArea = document.getElementById("inputArea")
var btn = document.getElementById("button")

var todoList = document.getElementById("list")

var showComment = document.getElementById("fullListWrapper")

var count = 0;

var comment = document.createElement("p")
comment.innerHTML = "No ToDo's till now"
showComment.appendChild(comment)

function createTODOlist() {

    count++
    console.log(count)
    if(count != 0) {
        comment.remove()
    }

    console.log(inputArea.value)

    var checkIcon = document.createElement("i")
    checkIcon.className = "fas fa-check tick"

    var listItem = document.createElement("li")
    listItem.className = "listItem"
    listItem.id = new Date().getTime()
    // listItem.innerHTML = inputArea.value

    var listText = document.createElement("span")
    listText.innerHTML = inputArea.value

    var deleteIcon = document.createElement("i")
    deleteIcon.className = "fas fa-times delete"

    listItem.appendChild(checkIcon)
    listItem.appendChild(listText)
    listItem.appendChild(deleteIcon)

    todoList.appendChild(listItem)

    inputArea.value = null

    // =====================================================

    deleteIcon.onclick = function() {
        // document.getElementById(e.id)
        var delTODO = document.getElementById(listItem.id)
        delTODO.remove();

        count--
        console.log(count)
        if (count == 0) {
            showComment.appendChild(comment)
        }

    }

    // =====================================================

    // function createCompletedTODOlist() {
    //     var completedList = document.getElementById("list-crossed")
    //     var completedTODO = document.getElementById(listItem.id)
    //     completedList.appendChild(completedTODO)

    // }

    checkIcon.onclick = function() {

        deleteIcon.remove()

        var trashIcon = document.createElement("i")
        trashIcon.className = "fas fa-trash-alt trash"

        listItem.appendChild(trashIcon)

        var completedList = document.getElementById("list-crossed")
      
        var completedTODO = document.getElementById(listItem.id)
        completedList.appendChild(completedTODO)

        trashIcon.onclick = function() {
            var deleteCompletedTODO = document.getElementById(listItem.id)
            deleteCompletedTODO.remove();

            count--
            console.log(count)
            if (count == 0) {
                showComment.appendChild(comment)
            }
    
        }
    }


}

inputArea.onkeyup = function(e) {
    
    if(e.key === 'Enter') {
        createTODOlist();
    }
}

btn.onclick = function() {
    
    createTODOlist();
}

