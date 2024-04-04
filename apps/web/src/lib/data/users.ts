import { client } from '$lib/axios';
import { User } from "@prisma/client";
import type { UserAttributes } from "@repo/lib/types/users"

export const getUsers = async (): Promise<User> => {
	const response = await client.get("/api/users");
	return response?.data?.users;
};

export const getUserById = async (userId: string): Promise<User> => {
	const response = await client.get(`/api/users/${userId}`);
	return response?.data?.user;
};

export const createNewUser = async (userAttributes: UserAttributes): Promise<User> => {
	return client.post('/api/users', {
		...userAttributes
	});
};

export const updateUserInfo = async (userId: string, userAttributes: UserAttributes): Promise<UserAttributes> => {
	return client.put(`/api/users/${userId}`, {
		...userAttributes
	});
};

export const deleteUser = async (userAttributes: UserAttributes): Promise<User> => {
	return client.delete('/api/users/:userId', {
		...userAttributes
	});
};


export const registerUser = async (userAttributes: UserAttributes): Promise<UserAttributes> => {
	return client.post('/auth/register', {
		...userAttributes
	});
};

export const loginUser = async (userAttributes: UserAttributes): Promise<User> => {
	return await client.post(`/auth/login`, {
		...userAttributes
	});
};
