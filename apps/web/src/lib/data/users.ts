import { client } from '$lib/axios';

type User = Record<string, any>;

export const getUsers = async (): Promise<User> => {
	const response = await client.get("/users");
	return response?.data?.users;
};

export const getUserById = async (userId: string): Promise<User> => {
	const response = await client.get(`/users/${userId}`);
	return response?.data?.user;
};

export const loginUser = async (userAttributes: any): Promise<User> => {
	return await client.post(`/login`, {
		...userAttributes
	});
};

export const createNewUser = async (userAttributes: any): Promise<any> => {
	return client.post('/users', {
		...userAttributes
	});
};

export const updateUserInfo = async (userId: string, userAttributes: any): Promise<any> => {
	return client.put(`/users/${userId}`, {
		...userAttributes
	});
};

export const deleteUser = async (userAttributes: any): Promise<any> => {
	return client.delete('/:userId', {
		...userAttributes
	});
};
