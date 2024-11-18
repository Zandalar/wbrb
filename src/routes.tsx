import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './client/view/main-page';
import { TaskManagerPage } from './client/view/task-manager-page';
import { PAGE_URLS } from './client/constants.ts';

const { MAIN, TASK_MANAGER, COST_CALCULATOR, GAME } = PAGE_URLS;

export const AppRoutes = () => (
    <BrowserRouter
        future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
        }}
    >
        <Routes>
            <Route path={MAIN} element={<MainPage />} />
            <Route path={TASK_MANAGER} element={<TaskManagerPage />} />
            <Route path={COST_CALCULATOR} element={<TaskManagerPage />} />
            <Route path={GAME} element={<TaskManagerPage />} />
        </Routes>
    </BrowserRouter>
);
