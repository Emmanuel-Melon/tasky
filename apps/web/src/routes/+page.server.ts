import { createNewTask } from '$lib/data/tasks';

export const actions = {
	saveTask: async function ({ request }) {
		const data = await request.formData();
		const res = await createNewTask({
			title: '[TASK-6]: Create new task',
			description: '[TASK-6]: Create new task',
			ownerId: 1,
			status: 'COMPLETED'
		});

		console.log(res.data);
	}
};
