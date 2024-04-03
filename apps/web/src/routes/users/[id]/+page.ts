import { getUserById } from '$lib/data/users';

export const load = async (event) => {
    const { params } = event;
	const user = await getUserById(params.id);
	return {
		user
	};
};
