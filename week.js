function task(){
    var taskInput = document.getElementById("week");
    var taskText = taskInput.value.trim();
     if (taskText===""){
        alert("Please enter a task");
        return;
     }
     var taskList = document.getElementById("pooja");
     var listItem = document.createElement("li");
     listItem.textContent = taskText;

     var deletebutton = document.createElement("button");
     deletebutton.textContent = "delete";
     deletebutton.onclick = function() {
        listItem.remove();
     };
     listItem.appendChild(deletebutton);
     taskList.appendChild(listItem);

     week.value="";
}