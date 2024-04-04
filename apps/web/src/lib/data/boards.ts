import { client } from '$lib/axios';

type Task = Record<string, any>;

export const getBoardLists = async (boardId: string): Promise<Task[]> => {
	const urlString = `/api/boards/${boardId}/lists`;
	const res = await client.get(urlString);
	return res?.data.lists;
};

export const getListById = async (listId: string): Promise<Task[]> => {
	const urlString = `/api/boards/lists/${listId}`;
	const res = await client.get(urlString);
	return res?.data.list;
};


export const createNewList = async (listAttributes: any): Promise<Task[]> => {
	const urlString = `/api/boards/lists/`;
	const res = await client.post(urlString, {
        ...listAttributes
    });
	return res?.data.list;
};

