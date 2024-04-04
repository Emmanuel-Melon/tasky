import { client } from '$lib/axios';

type Task = Record<string, any>;

export const getBoardLists = async (boardId: string): Promise<Task[]> => {
	const urlString = `/boards/${boardId}/lists`;
	const res = await client.get(urlString);
	return res?.data.lists;
};
