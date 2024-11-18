import { TaskItem } from './types.ts';
import { getUniqueId } from './utils/get-unique-id.ts';

export const TASK_MANAGER_PAGE_TEXTS = {
    TITLE: 'Менеджер задач',
    ADD_BUTTON: 'Добавить задачу',
} as const;

export const TASK_TYPES = {
    TASK: 'Задача',
    BUG: 'Баг',
    EPIC: 'Эпик',
};

export const BUG_TYPES = {
    CRITICAL: 'Критический',
    NORMAL: 'Обычный',
    MINOR: 'Минорный',
};

export const STATUSES = {
    DONE: 'Готово',
    IN_PROGRESS: 'В работе',
    OPEN: 'Открыт',
} as const;

export const MOCK_TASKS: TaskItem[] = [
    {
        id: getUniqueId(),
        title: 'Написать «Менеджер задач»',
        description:
            'Реализовать проект «Менеджер задач» — создать приложение для управления задачами с возможностью добавления, редактирования, удаления и фильтрации задач. Красивость интерфейса роли не играет, он может быть максимально простым.',
        creationDate: '01.11.2024',
        expirationDate: '17.11.2024',
        type: TASK_TYPES.TASK,
        status: STATUSES.DONE,
    },
    {
        id: getUniqueId(),
        title: 'Пофиксить баг №1',
        description: 'Пофиксить баг',
        creationDate: '05.11.2024',
        type: TASK_TYPES.BUG,
        assignee: 'Виталий',
        bugType: BUG_TYPES.CRITICAL,
        status: STATUSES.OPEN,
    },
    {
        id: getUniqueId(),
        title: 'Выполнить все задания',
        description: 'Выполнить экзамены 1, 2 и 3 по курсу React.База',
        creationDate: '10.11.2024',
        type: TASK_TYPES.EPIC,
        status: STATUSES.IN_PROGRESS,
    },
    {
        id: getUniqueId(),
        title: 'Написать «Калькулятор расходов»',
        description:
            'Реализовать проект «Калькулятор расходов» — разработать приложение для учета расходов,' +
            ' где можно управлять суммами расходов по категориям, а также выводить отчеты по категориям.',
        creationDate: '17.11.2024',
        expirationDate: '24.11.2024',
        type: TASK_TYPES.TASK,
        status: STATUSES.IN_PROGRESS,
    },
    {
        id: getUniqueId(),
        title: 'Написать «Игру»',
        description:
            'Реализовать проект «Игра с пошаговым боем» — разработать приложение-игру, в которой пользователь сражается с ИИ в пошаговом бою.',
        creationDate: '17.11.2024',
        expirationDate: '24.11.2024',
        type: TASK_TYPES.TASK,
        status: STATUSES.IN_PROGRESS,
    },
];
