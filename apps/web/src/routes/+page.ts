import { getUserTasks } from '$lib/data/tasks';

export const load = (async ({ url }) => {
    const status = url.searchParams.get('status') ;
	const tasks = await getUserTasks('3', {
        ...(status !== null && status !== undefined && { status })
    });

	return {
		tasks
	};
});
