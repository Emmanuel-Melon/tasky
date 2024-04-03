import { client } from '$lib/axios';

type Task = Record<string, any>;

export const getUserTasks = async (userId: string, options = {}): Promise<Task[]> => {
	const { status } = options;
	console.log(status);

	let urlString = `/tasks/${userId}/tasks`;

	if (status !== null && status !== undefined) {
		urlString += `?status=${status}`;
	}

	const res = await client.get(urlString);
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

export const updateTask = async (taskId: string, taskAttributes: any): Promise<any> => {
	return client.put(`/tasks/${taskId}`, {
		...taskAttributes
	});
};


export const deleteTask = async (taskId: string): Promise<any> => {
	return client.delete(`/tasks/${taskId}`);
};
