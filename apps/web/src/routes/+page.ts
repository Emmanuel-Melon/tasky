import { getUserTasks } from '$lib/data/tasks';

export const load = (async ({ url }) => {
    const filter = url.searchParams.get('filter') ;
	const tasks = await getUserTasks('1', {
        filter
    });

	return {
		tasks
	};
});
