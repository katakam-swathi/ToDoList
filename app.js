const addbutton = document.querySelector(".addbutton")
const tododiv = document.querySelector(".tasks-div")
const completed = document.querySelector(".completed-div")

// here we are checking add button click to add new task
addbutton.addEventListener('click', (e) =>{     
    if(document.querySelector(".tasks-div").contains(document.querySelector(".empty"))){
        document.querySelector(".taskempty").remove()
    }
    if(document.querySelector(".todoinput").value != ""){
        createcontainer() // calling a function to create a task div
    }
})

// this function is to create new task div
function createcontainer() {
    const inputtext = document.querySelector(".todoinput").value
    //creating a div object
    const containerobject = document.createElement("div")
    containerobject.className = "container"
    //creating a h4 to store text
    const text = document.createElement("p")
    text.innerHTML = inputtext
    text.className = 'text'
    //icon for done
    const doneimg = document.createElement("img")
    doneimg.src = "./images/taskcompleted.png"
    doneimg.classList.add("icon")
    doneimg.classList.add("taskdone")
    //icon for deletion
    const deleteicon = document.createElement("img")
    deleteicon.src = "./images/close.png"
    deleteicon.classList.add("icon")
    deleteicon.classList.add("deletetask")
    // appending all childs to div
    containerobject.appendChild(text)
    containerobject.appendChild(doneimg)
    containerobject.appendChild(deleteicon)
    document.querySelector(".tasks-div").appendChild(containerobject)
    // clearing the input field
    document.querySelector(".todoinput").value = ""
}



// here we are waiting for click on icons, if happens we delete task div
tododiv.addEventListener("click", (e)=> {
    if(e.target.className == "icon taskdone"){
        taskcompleted(e.target)
        if(completed.contains(document.querySelector(".donetask"))){
            document.querySelector(".donetask").remove()
        }

    }
    else if(e.target.className == "icon deletetask"){
        deletetask(e.target)
        if(tododiv.childElementCount == 1){
            const empty = document.createElement('p')
            empty.innerHTML = "no pending tasks"
            empty.classList.add("empty")
            empty.classList.add("taskempty")
            document.querySelector(".tasks-div").appendChild(empty)
        }
    }
    
})

// waiting for click on completed div
completed.addEventListener("click", (e)=> {
    if(e.target.className == "icon deletetask"){
        deletetask(e.target)
        if(completed.childElementCount == 1){
            const notyet = document.createElement('p')
            notyet.innerHTML = "Not completed one task yet"
            notyet.classList.add("donetask")
            completed.appendChild(notyet)
        }
    }
})


function taskcompleted(e){
    const taskobject = e.parentElement
    // removing completed button
    taskobject.querySelector(".taskdone").remove()
    document.querySelector(".completed-div").appendChild(taskobject)
    if(tododiv.childElementCount == 1){
        const empty = document.createElement('p')
        empty.innerHTML = "No pending tasks"
        empty.classList.add("empty")
        empty.classList.add("taskempty")
        document.querySelector(".tasks-div").appendChild(empty)
    }
}


function deletetask(e){
    e.parentElement.remove()
}


function defaultfunction(){
    // checking the children count in completed div
    if(completed.childElementCount == 1){
        const notyet = document.createElement('p')
        notyet.innerHTML = "Not completed one task yet"
        notyet.classList.add("donetask")
        completed.appendChild(notyet)
    }
    // checking the children count in task div
    if(tododiv.childElementCount == 1){
        const empty = document.createElement('p')
        empty.innerHTML = "No pending tasks"
        empty.classList.add("empty")
        empty.classList.add("taskempty")
        document.querySelector(".tasks-div").appendChild(empty)
    }
}

defaultfunction()