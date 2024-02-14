'use strict';

import initialTasks from './task-data.js';
//console.log(initialTasks)

let currentTaskList = initialTasks.map((task, index) => ({ ...task , id: index + 1}));

export function getIncompleteTasks() {
    return currentTaskList.filter((task) => task.status === 'incomplete');
}

export function addTask(taskDescription) {
    let task = {
        description: taskDescription,
        id: currentTaskList.length + 1, 
        status:"incomplete",
    };
    currentTaskList = [...currentTaskList, task];
}

export function markComplete(taskId) {
    currentTaskList = currentTaskList.map(task => {
        let copy = { ...task };
        if (copy.id === taskId) {
            copy.status = 'complete';
        }
        return copy;
    });
}


