import { getUserTasks } from '$lib/data/tasks';

import { saveTaskAction, searchTasksAction } from './actions';

import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, url }) => {
	const query = new URLSearchParams(url.searchParams);
	
	const tasks = await getUserTasks('3', {
        query
    });

	return {
		tasks
	};
};

export const actions: Actions = {
	saveTaskAction,
	searchTasksAction
};
