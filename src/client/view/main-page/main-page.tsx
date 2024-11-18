import { Link } from 'react-router-dom';
import { PAGE_URLS } from '../../constants.ts';
import { NAVIGATION_LINK_NAMES, PAGE_TEXTS } from './constants';

import styles from './styles.module.scss';

const { TASK_MANAGER, COST_CALCULATOR, GAME } = NAVIGATION_LINK_NAMES;

export const MainPage = () => {
    return (
        <main className={styles.main}>
            <h1>{PAGE_TEXTS.TITLE}</h1>
            <nav>
                <ul className={styles.navigation}>
                    <li>
                        <Link
                            className={styles['navigation-link']}
                            to={PAGE_URLS.TASK_MANAGER}
                        >
                            {TASK_MANAGER}
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={styles['navigation-link']}
                            to={PAGE_URLS.COST_CALCULATOR}
                        >
                            {COST_CALCULATOR}
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={styles['navigation-link']}
                            to={PAGE_URLS.GAME}
                        >
                            {GAME}
                        </Link>
                    </li>
                </ul>
            </nav>
        </main>
    );
};
