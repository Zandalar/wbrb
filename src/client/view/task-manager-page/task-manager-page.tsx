import { useMemo, useState } from 'react';
import { useTaskManagerData } from './hooks/useTaskManagerData.ts';
import { TaskForm } from './components/task-form';
import { Task } from './components/task';
import { Popup } from './components/popup';
import { TaskItem } from './types.ts';
import { TASK_MANAGER_PAGE_TEXTS } from './constants.ts';

import styles from './styles.module.scss';
import { Filters } from './components/filters';

export const TaskManagerPage = () => {
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const [editableTask, setEditableTask] = useState<TaskItem | undefined>(
        undefined
    );
    const taskManagerData = useTaskManagerData();
    const taskList = useMemo(() => {
        return taskManagerData.taskItemsList;
    }, [taskManagerData]);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const onPopupClose = () => {
        setIsPopupOpen(false);
        setEditableTask(undefined);
    };

    const onEditButtonCLick = (editableTask: TaskItem) => {
        openPopup();
        setEditableTask(editableTask);
    };

    const onDeleteButtonCLick = (task: TaskItem) => {
        taskManagerData.deleteTaskById(task.id);
    };

    const onAddNewTask = (task: TaskItem) => {
        taskManagerData.addNewTask(task);
        onPopupClose();
    };

    const onChangeTask = () => {
        onPopupClose();
    };

    return (
        <div className={styles.page}>
            <h1>{TASK_MANAGER_PAGE_TEXTS.TITLE}</h1>
            <button className={styles.button} type="button" onClick={openPopup}>
                {TASK_MANAGER_PAGE_TEXTS.ADD_BUTTON}
            </button>
            <Filters taskManagerData={taskManagerData} />
            <div className={styles['task-list']}>
                {taskList.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        onEditButtonClick={() => onEditButtonCLick(task)}
                        onDeleteButtonClick={() => onDeleteButtonCLick(task)}
                    />
                ))}
            </div>
            <Popup
                isPopupOpen={isPopupOpen}
                onPopupClose={onPopupClose}
                content={
                    <TaskForm
                        taskManagerData={taskManagerData}
                        task={editableTask}
                        onAddNewTask={onAddNewTask}
                        onChangeTask={onChangeTask}
                    />
                }
            />
        </div>
    );
};
