let todolist=[
    {
    item:'Task 1',
    duedate:'14/6/2024'
},
{
    item:'Task 2',
    duedate:'14/6/2024'
}
];
showitems();
function AddToDo()
{
    let inputElement = document.querySelector
    ('#input-data');
    let dateElement = document.querySelector
    ('#input-date');
    let ToDo_item = inputElement.value;
    let ToDo_date = dateElement.value;
    todolist.push({item:ToDo_item,duedate:ToDo_date});
    inputElement.value = '';
    dateElement.value = '';
    showitems();
}

function showitems()
{
    let viewcontainer = document.querySelector
    ('.todo-container');
    
    let new_HTML = '';

    for(let i=0;i<todolist.length;i++){
        let {item,duedate}=todolist[i];
        new_HTML +=`
        <span> ${item}</span>
        <span> ${duedate}</span>
        <button class="delete-button" onclick = "todolist.splice(${i},1);
        showitems();"> Delete </button>
        `;
    }
    viewcontainer.innerHTML = new_HTML;
}