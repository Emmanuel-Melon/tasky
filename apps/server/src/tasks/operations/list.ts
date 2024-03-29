const tasks = [
    {
        id: 1,
        title: '[TASK-2]: List Tasks',
        description: 'Build a tasks list',
        deadline: '2024-4-11T10:37:01.188224+00:00',
        users: [
            {
                id: 1,
                name: 'Emmanuel Gatwech',
                avatar: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
            }
        ]
    },
    {
        id: 2,
        title: '[TASK-3]: View Task Details',
        description: 'Build a tasks list',
        deadline: '2024-4-11T10:37:01.188224+00:00',
        users: [
            {
                id: 1,
                name: 'Emmanuel Gatwech',
                avatar: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
            },
            {
                id: 2,
                name: 'Emmanuel Gatwech',
                avatar: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
            }
        ]
    },
    {
        id: 3,
        title: '[TASK-4]: Edit Task',
        description: 'Build a tasks list',
        deadline: '2024-4-11T10:37:01.188224+00:00',
        users: []
    }
];

export const listUserTasks = (userId: string): Promise<any> => {
    return Promise.resolve(tasks);
}