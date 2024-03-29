import { getUserTasks } from '$lib/data/tasks';

export const load = async (event) => {
	const tasks = await getUserTasks('1');

	return {
		tasks
	};
};
