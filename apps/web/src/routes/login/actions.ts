import { z } from 'zod';
import type { ZodErrorMap, ZodObject } from 'zod';
import { fail } from '@sveltejs/kit';
import { parseFormData, validateFormData } from "@repo/lib/formData";

const userSchema = z.object({
	username: z.string(),
	password: z.string()
});

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
