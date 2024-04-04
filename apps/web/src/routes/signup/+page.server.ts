// routes/+page.server.ts
import { loginUserAction } from './actions';

import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
   
	return {
        user: {}
    }
};

export const actions: Actions = {
	loginUserAction,
};
