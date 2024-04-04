import { client } from '$lib/axios';

type User = Record<string, any>;

export const getUsers = async (): Promise<User> => {
	const response = await client.get("/api/users");
	return response?.data?.users;
};

export const getUserById = async (userId: string): Promise<User> => {
	const response = await client.get(`/api/users/${userId}`);
	return response?.data?.user;
};

export const createNewUser = async (userAttributes: any): Promise<any> => {
	return client.post('/api/users', {
		...userAttributes
	});
};

export const updateUserInfo = async (userId: string, userAttributes: any): Promise<any> => {
	return client.put(`/api/users/${userId}`, {
		...userAttributes
	});
};

export const deleteUser = async (userAttributes: any): Promise<any> => {
	return client.delete('/api/users/:userId', {
		...userAttributes
	});
};


export const registerUser = async (userAttributes: any): Promise<any> => {
	return client.post('/auth/register', {
		...userAttributes
	});
};

export const loginUser = async (userAttributes: any): Promise<User> => {
	return await client.post(`/auth/login`, {
		...userAttributes
	});
};
