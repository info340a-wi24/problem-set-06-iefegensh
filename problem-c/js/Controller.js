'use strict';

import * as model from './Model.js';
import { renderTaskList } from './View.js';

let markCompleteCallback = function(task) {
    model.markComplete(task.id);
    renderTaskView();
}

export function renderTaskView() {
  let tasksRoot = document.getElementById('tasks-root');
  tasksRoot.innerHTML = '';
  let taskListView = renderTaskList(markCompleteCallback);
  tasksRoot.appendChild(taskListView);
}

let button = document.getElementById("add-task-button");
button.addEventListener('click', () => {
    let  taskInput = document.querySelector('input');
    let taskValue = taskInput.value;
    if (taskValue === '') {
      return;
    }
    model.addTask(taskValue);
    taskInput.value = '';
    renderTaskView();
});
  