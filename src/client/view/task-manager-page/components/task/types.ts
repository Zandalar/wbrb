import { MouseEvent } from 'react';
import { TaskItem } from '../../types.ts';

export type TaskProps = {
    task: TaskItem;
    onEditButtonClick: (event: MouseEvent<HTMLButtonElement>) => void;
    onDeleteButtonClick: () => void;
};
