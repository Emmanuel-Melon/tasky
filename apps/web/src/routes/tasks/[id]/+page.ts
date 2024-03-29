import { getTaskById } from '$lib/data/tasks';

export const load = async (event) => {
    const { params } = event;
	const task = await getTaskById(params.id);

	return {
		task: task?.data?.task
	};
};
