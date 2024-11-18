import { BUG_TYPES, STATUSES, TASK_TYPES } from './constants.ts';

type Values<T> = T[keyof T];

export type TaskTypes = Values<typeof TASK_TYPES>;

export type BugTypes = Values<typeof BUG_TYPES>;

export type Statuses = Values<typeof STATUSES>;

export type TaskManagerData = {
    taskItemsList: TaskItem[];
    getTaskList: () => TaskItem[];
    setTaskList: (newList: TaskItem[]) => void;
    findTaskById: (taskId: number) => TaskItem | undefined;
    deleteTaskById: (taskId: number | undefined) => void;
    addNewTask: (task: TaskItem) => void;
    changeTask: (taskId: number, newTask: TaskItem) => void;
    filterTaskListByType: (taskType: TaskTypes) => void;
    filterTaskListByStatus: (status: Statuses) => void;
    clearFilters: () => void;
};

export type TaskItem = {
    title: string;
    description: string;
    type: TaskTypes;
    creationDate: string;
    status: Statuses;
    id?: number;
    expirationDate?: string;
    bugType?: BugTypes;
    assignee?: string;
};
