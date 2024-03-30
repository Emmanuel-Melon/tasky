import { client } from '$lib/axios';

type Task = Record<string, any>;

export const getUserTasks = async (userId: string, options = {}): Promise<Task[]> => {
    const { filter } = options;
    const params = new URLSearchParams({ filter });
    console.log(params);
    const res = await client.get(`/tasks?${params.toString()}=value`);
	return res?.data.tasks;
};

export const getTaskById = async (taskId: string): Promise<Task> => {
	return await client.get(`/tasks/${taskId}`);
};

export const createNewTask = async (taskAttributes: any): Promise<any> => {
	return client.post('/tasks', {
		...taskAttributes
	});
};

export const deleteTask = async (taskId: string): Promise<any> => {
	return client.delete(`/tasks/${taskId}`);
};
