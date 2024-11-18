import { useState, ChangeEvent } from 'react';
import cn from 'classnames';
import { TaskItem } from '../../types.ts';
import { BUG_TYPES, STATUSES, TASK_TYPES } from '../../constants.ts';
import { TaskFormProps } from './types.ts';
import { TASK_FORM_TEXTS } from './constants.ts';

import styles from './styles.module.scss';

const {
    TITLE,
    DESCRIPTION,
    ADD_BUTTON,
    EDIT_BUTTON,
    TASK_TYPE,
    BUG_TYPE,
    ASSIGNEE,
    STATUS,
} = TASK_FORM_TEXTS;

const initialState: TaskItem = {
    title: '',
    description: '',
    assignee: '',
    status: STATUSES.OPEN,
    creationDate: new Intl.DateTimeFormat('Ru-ru').format(new Date()),
    type: TASK_TYPES.TASK,
    bugType: BUG_TYPES.CRITICAL,
} as const;

export const TaskForm = ({
    taskManagerData,
    task,
    onAddNewTask,
    onChangeTask,
}: TaskFormProps) => {
    const [newTask, setNewTask] = useState<TaskItem>(
        task ? task : initialState
    );

    const onChangeValue = (
        event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const target = event.target;
        const newValue = target.value;
        const key = target.name;

        setNewTask({
            ...newTask,
            [key]: newValue,
        });
    };

    const onAddNewTaskClick = () => {
        onAddNewTask(newTask);
        setNewTask(initialState);
    };

    const onChangeTaskClick = () => {
        onChangeTask();

        if (task && task.id) {
            taskManagerData.changeTask(task.id, newTask);
        }

        setNewTask(initialState);
    };

    return (
        <section className={styles.form}>
            <div className={styles.container}>
                <input
                    className={styles.input}
                    type="text"
                    name="title"
                    placeholder={TITLE}
                    value={newTask.title}
                    onChange={onChangeValue}
                    required
                />
                <input
                    className={styles.input}
                    type="text"
                    name="description"
                    placeholder={DESCRIPTION}
                    value={newTask.description}
                    onChange={onChangeValue}
                    required
                />
                <input
                    className={styles.input}
                    type="text"
                    name="assignee"
                    placeholder={ASSIGNEE}
                    value={newTask.assignee}
                    onChange={onChangeValue}
                    required
                />
                <label className={styles.label}>
                    {TASK_TYPE}
                    <select
                        className={cn(styles.input, styles.select)}
                        value={newTask.type}
                        name="type"
                        onChange={onChangeValue}
                    >
                        <option value={TASK_TYPES.TASK}>
                            {TASK_TYPES.TASK}
                        </option>
                        <option value={TASK_TYPES.BUG}>{TASK_TYPES.BUG}</option>
                        <option value={TASK_TYPES.EPIC}>
                            {TASK_TYPES.EPIC}
                        </option>
                    </select>
                </label>
                {newTask.type === TASK_TYPES.BUG && (
                    <label className={styles.label}>
                        {BUG_TYPE}
                        <select
                            className={cn(styles.input, styles.select)}
                            value={newTask.bugType}
                            name="bugType"
                            onChange={onChangeValue}
                        >
                            <option value={BUG_TYPES.CRITICAL}>
                                {BUG_TYPES.CRITICAL}
                            </option>
                            <option value={BUG_TYPES.MINOR}>
                                {BUG_TYPES.MINOR}
                            </option>
                            <option value={BUG_TYPES.NORMAL}>
                                {BUG_TYPES.NORMAL}
                            </option>
                        </select>
                    </label>
                )}
                <label className={styles.label}>
                    {STATUS}
                    <select
                        className={cn(styles.input, styles.select)}
                        value={newTask.status}
                        name="status"
                        onChange={onChangeValue}
                    >
                        <option value={STATUSES.DONE}>{STATUSES.DONE}</option>
                        <option value={STATUSES.IN_PROGRESS}>
                            {STATUSES.IN_PROGRESS}
                        </option>
                        <option value={STATUSES.OPEN}>{STATUSES.OPEN}</option>
                    </select>
                </label>
            </div>
            <button
                className={styles.button}
                onClick={task ? onChangeTaskClick : onAddNewTaskClick}
            >
                {task ? EDIT_BUTTON : ADD_BUTTON}
            </button>
        </section>
    );
};
