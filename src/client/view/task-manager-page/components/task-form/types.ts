import { TaskItem, TaskManagerData } from '../../types.ts';

export type TaskFormProps = {
    taskManagerData: TaskManagerData;
    task?: TaskItem;
    onAddNewTask: (task: TaskItem) => void;
    onChangeTask: () => void;
};
