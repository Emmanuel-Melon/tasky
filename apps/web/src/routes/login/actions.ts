import { z } from 'zod';
import type { ZodErrorMap, ZodObject } from 'zod';
import { fail } from '@sveltejs/kit';

const userSchema = z.object({
	username: z.string(),
	password: z.string()
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

export const loginUserAction = async ({ request }) => {
	try {
		const parsedFormData = parseFormData(await request.formData());
		console.log('form data', parsedFormData);

		const {
			formData: { username, password }
		} = validateFormData(parsedFormData, userSchema);
		console.log('login');
	} catch (error) {
		console.log(error);
		return fail(400, {
			message: error.message
		});
	}
};
