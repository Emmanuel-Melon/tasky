import { fail } from '@sveltejs/kit';
import { createNewTask, updateTask } from '$lib/data/tasks';
import { parseFormData, validateFormData } from "@repo/lib/formData";
import { taskSchema } from '@repo/lib/types/tasks';


export const saveTaskAction = async ({ request }) => {
	try {
		const parsedFormData = parseFormData(await request.formData());

		const {
			formData: { title, deadline, description }
		} = validateFormData(parsedFormData, taskSchema);

		const res = await createNewTask({
			title,
			description,
			ownerId: 3,
			deadline: new Date(deadline),
			status: 'COMPLETED'
		});
		return res.data;
	} catch (error) {
		return fail(400, {
			message: error.message
		});
	}
};

export const updateTaskAction = async ({ request, params }) => {
	try {
		const parsedFormData = parseFormData(await request.formData());
		const {
			formData
		} = validateFormData(parsedFormData, taskSchema);

	
		const result = await updateTask(params.id, {
			...formData,
			deadline: new Date(formData.deadline)
		});

		return {
			message: "Success",
			data: result?.data
		};

	} catch (error) {
		return fail(400, {
			message: error.message
		});
	}
}

export const searchTasksAction = async ({ request }) => {
	try {
		const result = parseFormData(await request.formData());
	} catch (error) {
		return fail(400, {
			message: error.message
		});
	}
}