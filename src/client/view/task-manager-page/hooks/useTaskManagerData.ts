import { getUniqueId } from '../utils/get-unique-id.ts';
import { Statuses, TaskItem, TaskTypes } from '../types.ts';
import { MOCK_TASKS } from '../constants.ts';
import { useEffect, useState } from 'react';

export const useTaskManagerData = () => {
    const [taskItemsList, setTaskItemsList] = useState<TaskItem[]>(MOCK_TASKS);

    const getTaskList = () => {
        const savedTaskList = localStorage.getItem('taskList');

        if (!savedTaskList) {
            setTaskList(MOCK_TASKS);

            return MOCK_TASKS;
        }

        const parsedTaskItems: TaskItem[] = JSON.parse(savedTaskList);

        setTaskList(parsedTaskItems);

        return parsedTaskItems;
    };

    const setTaskList = (newList: TaskItem[]) => {
        localStorage.setItem('taskList', JSON.stringify(newList));
        setTaskItemsList(newList);
    };

    const findTaskById = (taskId: number) => {
        return taskItemsList.find((task) => task.id === taskId);
    };

    const deleteTaskById = (taskId: number | undefined) => {
        if (!taskId) {
            return;
        }

        const newTaskList = taskItemsList.filter((task) => task.id !== taskId);

        setTaskList(newTaskList);
    };

    const addNewTask = (task: TaskItem) => {
        const newTask = {
            ...task,
            id: getUniqueId(),
        };

        if (!task || !task.title || !task.description || !task.type) {
            return;
        }

        const newList = [...taskItemsList, newTask];

        setTaskList(newList);
        localStorage.setItem('taskList', JSON.stringify(newList));
    };

    const changeTask = (taskId: number, newTask: TaskItem) => {
        const currentTask = taskItemsList.find((task) => task.id === taskId);

        if (!currentTask) {
            return;
        }

        const newTaskList = taskItemsList.map((task) =>
            task.id === taskId ? newTask : task
        );

        setTaskList(newTaskList);
    };

    const filterTaskListByType = (taskType: TaskTypes) => {
        const currentTasksList = getTaskList();
        const filteredTaskList = currentTasksList.filter(
            (task) => task.type === taskType
        );

        setTaskItemsList(filteredTaskList);
    };

    const filterTaskListByStatus = (status: Statuses) => {
        const currentTasksList = getTaskList();
        const filteredTaskList = currentTasksList.filter(
            (task) => task.status === status
        );

        setTaskItemsList(filteredTaskList);
    };

    const clearFilters = () => {
        const currentTasksList = getTaskList();
        setTaskItemsList(currentTasksList);
    };

    useEffect(() => {
        getTaskList();
    }, []);

    return {
        taskItemsList,
        getTaskList,
        setTaskList,
        findTaskById,
        deleteTaskById,
        addNewTask,
        changeTask,
        filterTaskListByType,
        filterTaskListByStatus,
        clearFilters,
    };
};
