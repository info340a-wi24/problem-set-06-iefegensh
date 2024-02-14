"use stirct";

import {getIncompleteTasks} from './Model.js';

let renderSingleTask = function(task, markCompleteCallback) {
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = ` ${task.description}`;

    let button = document.createElement("button");
    button.classList.add("btn" ,"btn-sm", "btn-warning");
    button.innerHTML = '<span class="material-icons-outlined">done</span>';
    button.addEventListener("click", () => {
        if(markCompleteCallback) {
            markCompleteCallback(task);
        }
    });

    li.prepend(button);
    return li;
}

export function renderTaskList(markCompleteCallback) {
    let ul = document.createElement("ul");
    ul.classList.add("list-group", "list-group-flush");

    let tasks = getIncompleteTasks();
    if (tasks.length === 0) {
        let div = document.createElement("div");
        div.textContent = "No tasks!";
        return div;
    }

    tasks.forEach(task => {
        let li = renderSingleTask(task, markCompleteCallback);
        ul.appendChild(li);
    })

    return ul;
}