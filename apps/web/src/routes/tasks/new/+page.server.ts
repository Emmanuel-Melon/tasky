// routes/+page.server.ts

import { saveTaskAction } from '../../actions';

import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	// ...
};

export const actions: Actions = {
	saveTaskAction,
};
