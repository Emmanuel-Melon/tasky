import { getTaskById } from '$lib/data/tasks';
import { updateTaskAction } from '../../../actions';

import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals }) => {
	const taskId = params.id as string;
	
	try {
		const response = await getTaskById(taskId);
		return {
			task: response.data.task
		};
	} catch (error) {
		return {
			status: 404, // Not found status code
			error: new Error('Task not found') // Custom error message
		};
	}
};

export const actions: Actions = {
	updateTaskAction
};
