import { client } from "$lib/axios";

type Tasks = Record<string, any>;

export const getUserTasks = async (userId: string): Promise<Tasks[]> => {
    const res = await client.get("/tasks");
    return res?.data.tasks;
}

export const createNewTask = async (taskAttributes: any): Promise<any> => {
    return client.post("/tasks", {
        ...taskAttributes
    });
}

export const deleteTask = async (taskId: string): Promise<any> => {
    return client.delete(`/tasks/${taskId}`);
}