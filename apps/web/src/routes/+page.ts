import { getUserTasks } from '$lib/data/tasks';
import { getBoardLists } from '$lib/data/boards';

export const load = (async ({ url }) => {
    const status = url.searchParams.get('status') ;
	const tasks = await getUserTasks('3', {
        ...(status !== null && status !== undefined && { status })
    });

	const lists = await getBoardLists("1");

	return {
		lists,
		tasks
	};
});
