import { memo } from 'react';
import { EditIcon, TrashIcon } from '../../icons';
import { TASK_TYPES } from '../../constants.ts';
import { TaskProps } from './types.ts';
import { TASK_TEXTS } from './constants.ts';

import styles from './styles.module.scss';

const { TYPE, CREATION_DATE, EXPIRATION_DATE, ASSIGNEE, STATUS } = TASK_TEXTS;

export const Task = memo(
    ({ task, onEditButtonClick, onDeleteButtonClick }: TaskProps) => {
        return (
            <div className={styles.task}>
                <div className={styles.main}>
                    <h1 className={styles.title}>{task.title}</h1>
                    <p className={styles.description}>{task.description}</p>
                </div>
                <div className={styles.info}>
                    <p
                        className={styles.text}
                    >{`${TYPE}: ${task.type} ${task.type === TASK_TYPES.BUG && task.bugType ? task.bugType : ''}`}</p>
                    <p className={styles.text}>{`${STATUS}: ${task.status}`}</p>
                    <p
                        className={styles.text}
                    >{`${CREATION_DATE}: ${task.creationDate}`}</p>
                    {task.expirationDate && (
                        <p
                            className={styles.text}
                        >{`${EXPIRATION_DATE}: ${task.expirationDate}`}</p>
                    )}
                    {task.assignee && (
                        <p
                            className={styles.text}
                        >{`${ASSIGNEE}: ${task.assignee}`}</p>
                    )}
                </div>
                <div className={styles.buttons}>
                    <button
                        className={styles.button}
                        type="button"
                        onClick={onEditButtonClick}
                    >
                        <EditIcon />
                    </button>
                    <button
                        className={styles.button}
                        type="button"
                        onClick={onDeleteButtonClick}
                    >
                        <TrashIcon />
                    </button>
                </div>
            </div>
        );
    }
);
