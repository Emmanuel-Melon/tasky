import { z } from 'zod';
import type { ZodErrorMap, ZodObject } from 'zod';
import { fail } from '@sveltejs/kit';
import { createNewTask } from '$lib/data/tasks';

const taskSchema = z.object({
	title: z.string(),
	description: z.string(),
	deadline: z.date(),
	ownerId: z.string().optional()
});

export const parseFormData = (formData: FormData) => {
	return Object.fromEntries(formData) as Record<string, string>;
};

type ValidatedFormData = {
	formData: Record<string, string>;
	errors: ZodErrorMap | null;
};

export const validateFormData = (
	parsedFormData: Record<string, string>,
	schema: ZodObject<any>
): ValidatedFormData => {
	try {
		const formData = schema.parse(parsedFormData);
		return {
			formData,
			errors: null
		};
	} catch (error) {
		const errors = error.flatten();
		return {
			formData: parsedFormData,
			errors
		};
	}
};

export const saveTaskAction = async ({ request }) => {
	try {
		const parsedFormData = parseFormData(await request.formData());
		console.log('form data', parsedFormData);

		const {
			formData: { title, deadline, description }
		} = validateFormData(parsedFormData, taskSchema);

		console.log('description', description);
		console.log('title', title);
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

export const searchTasksAction = async ({ request }) => {
	try {
		const result = parseFormData(await request.formData());
		console.log("result", result);
	} catch (error) {
		return fail(400, {
			message: error.message
		});
	}
}