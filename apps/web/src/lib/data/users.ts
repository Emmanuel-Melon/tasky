import { client } from '$lib/axios';

type User = Record<string, any>;

export const getUserById = async (userId: string): Promise<User> => {
	const response = await client.get(`/users/${userId}`);
	return response?.data?.user;
};

export const loginUser = async (userId: string): Promise<User> => {
	return await client.get(`/users/${userId}`);
};

export const createNewUser = async (userAttributes: any): Promise<any> => {
	return client.post('/users', {
		...userAttributes
	});
};
