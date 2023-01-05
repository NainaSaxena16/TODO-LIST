var form = document.getElementById("addForm")
// console.log(form);
let ulList = document.getElementById("items")
// console.log(ulList)
let search=document.getElementById('search')
// console.log(search)


function submitHandler(e) {
    // console.log(e);

    e.preventDefault()

    var item = document.getElementById("item").value
    // console.log(item)                              

    var li = document.createElement("li")
    li.className = "list-group-item";
    var button = document.createElement("button")
    button.className = "btn-danger pull-right";
    button.append(document.createTextNode("X"))

    li.append(document.createTextNode(item))
    //    console.log(li); 
    li.append(button)
    var ullist = document.getElementById("items")
    // console.log(list)
    ullist.appendChild(li)
    document.getElementById('item').value=''
}

function deleteHandler(e){
//    console.log(e)
    // console.log(e.target.classList.contains("btn-danger"))
     e.preventDefault();
    if(e.target.classList.contains("btn-danger")){
        if(confirm("Are you sure, You want to delete this?")){
    ulList.removeChild(e.target.parentElement);
        }
    }else{
        alert("Please click on the delete button properly")
    }
   
}

function searchHandler(e){
// console.log(e)
e.preventDefault();
var text=(e.target.value)
var items=document.getElementsByTagName("li")
// console.log(items)
var newAry = Array.from(items)
// console.log(newAry)
newAry.forEach(function(i){
    if(i.firstChild.textContent.indexOf(text) !=-1){
        i.style.display='block'
    }else{
        i.style.display='none'
    }
})
}
form.addEventListener("submit", submitHandler)

ulList.addEventListener("click", deleteHandler)

search.addEventListener("input",searchHandler)