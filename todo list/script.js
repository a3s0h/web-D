const task_text = document.querySelector(".task-enter");
// const cross = document.querySelector(".cross-icon");
const list_container = document.querySelector("#task-list");

const button = document.querySelector("#add-task");
button.addEventListener("click",function(){
    
    const task = task_text.value;
    if(task === '')
    {
        alert("Please Enter something!!");

    }
    else{
        let li = document.createElement("li");
        li.innerHTML = task;
        list_container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // cross icon
        li.appendChild(span);
    }
    task_text.value = "";
    saveData();
    console.log(task);
});

list_container.addEventListener("click",function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
})



// to store locally in browser:
function saveData()
{
    localStorage.setItem("data",list_container.innerHTML);

}

// reload krne ke baad localstorage me jo data name ke under store ha wo show krne ke liye
function showtask()
{
    list_container.innerHTML = localStorage.getItem("data");
}
showtask();