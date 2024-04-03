// routes/+page.server.ts
import { getUserById } from '$lib/data/users';
import { profileInfoAction } from './actions';

import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
    const response = await getUserById("3");

    console.log(response)
	return {
        user: {}
    }
};

export const actions: Actions = {
	profileInfoAction,
};
