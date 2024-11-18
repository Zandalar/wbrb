import styles from './styles.module.scss';
import { FiltersProps } from './types.ts';
import { STATUSES, TASK_TYPES } from '../../constants.ts';
import { FILTERS_TEXTS } from './constants.ts';

export const Filters = ({ taskManagerData }: FiltersProps) => {
    return (
        <section className={styles.filters}>
            <h2>{FILTERS_TEXTS.TITLE}</h2>
            <div className={styles.container}>
                <button
                    className={styles.filter}
                    type="button"
                    onClick={() => {
                        taskManagerData.filterTaskListByType(TASK_TYPES.TASK);
                    }}
                >
                    {TASK_TYPES.TASK}
                </button>
                <button
                    className={styles.filter}
                    type="button"
                    onClick={() => {
                        taskManagerData.filterTaskListByType(TASK_TYPES.BUG);
                    }}
                >
                    {TASK_TYPES.BUG}
                </button>
                <button
                    className={styles.filter}
                    type="button"
                    onClick={() => {
                        taskManagerData.filterTaskListByType(TASK_TYPES.EPIC);
                    }}
                >
                    {TASK_TYPES.EPIC}
                </button>
            </div>
            <div className={styles.container}>
                <button
                    className={styles.filter}
                    type="button"
                    onClick={() => {
                        taskManagerData.filterTaskListByStatus(STATUSES.OPEN);
                    }}
                >
                    {STATUSES.OPEN}
                </button>
                <button
                    className={styles.filter}
                    type="button"
                    onClick={() => {
                        taskManagerData.filterTaskListByStatus(
                            STATUSES.IN_PROGRESS
                        );
                    }}
                >
                    {STATUSES.IN_PROGRESS}
                </button>
                <button
                    className={styles.filter}
                    type="button"
                    onClick={() => {
                        taskManagerData.filterTaskListByStatus(STATUSES.DONE);
                    }}
                >
                    {STATUSES.DONE}
                </button>
            </div>
            <button
                className={styles.button}
                type="button"
                onClick={taskManagerData.clearFilters}
            >
                {FILTERS_TEXTS.CLEAR_FILTERS_BUTTON}
            </button>
        </section>
    );
};
