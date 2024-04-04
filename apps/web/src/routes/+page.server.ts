// routes/+page.server.ts

import {addKanbanListAction, saveTaskAction, searchTasksAction } from './actions';

import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	// ...
};

export const actions: Actions = {
	addKanbanListAction,
	saveTaskAction,
	searchTasksAction
};
