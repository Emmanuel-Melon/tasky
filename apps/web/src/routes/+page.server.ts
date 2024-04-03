// routes/+page.server.ts

import { saveTaskAction, searchTasksAction } from './actions';

import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	// ...
};

export const actions: Actions = {
	saveTaskAction,
	searchTasksAction
};
