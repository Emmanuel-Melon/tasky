import { client } from "$lib/axios";

type Tasks = Record<string, any>;

export const getUserTasks = async (userId: string): Promise<Tasks[]> => {
    const res = await client.get("/tasks");
    return res?.data.tasks;
}