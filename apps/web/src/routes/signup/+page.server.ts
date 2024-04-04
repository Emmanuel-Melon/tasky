// routes/+page.server.ts
import { registerUserAction } from './actions';

import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
   
	return {
        user: {}
    }
};

export const actions: Actions = {
	registerUserAction,
};
