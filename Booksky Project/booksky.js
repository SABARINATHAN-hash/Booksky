// selecting popupoverlay popupbox button

var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addbutton = document.getElementById("#popup")



//function add
function add(){
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
}
// select cancelbutton
var cancelbutton = document.getElementById("cancel-button")
function cancel(event){
    event.preventDefault()
popupoverlay.style.display = "none"
popupbox.style.display = "none"
}
cancelbutton.addEventListener("click",cancel)

// selecting container

var container = document.querySelector(".container")
var insertbook = document.querySelector(".add-book")
var booknameinput = document.getElementById("book-name")
var bookauthorinput = document.getElementById("book-author")
var booktextinput = document.getElementById("book-text")
var deletebutton = document.getElementById(".Delete-button")

function addb(){
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = `<h2>${booknameinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${booktextinput.value}</p>
    <button id='delbutton' onclick="remove()">Delete</button>`
    popupoverlay.style.display = "none"
    popupbox.style.display = "none" 
    div.style.padding = "0px 20px 0px 0px"
    container.append(div)
   
    div.querySelector("#delbutton").addEventListener("click",function(){
        // remove div from the container
        container.removeChild(div);
    })


}



  




// select deletebook

var deletebook = document.querySelector(".book-container")
var deletebutton = document.getElementById("Delete-button")

deletebutton.addEventListener("click",function(){
    deletebook.remove()
})


