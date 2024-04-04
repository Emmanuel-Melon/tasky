import { z } from 'zod';
import type { ZodErrorMap, ZodObject } from 'zod';
import { fail } from '@sveltejs/kit';
import { parseFormData, validateFormData } from "@repo/lib/formData";
import { registerUser } from '$lib/data/users';

const userSchema = z.object({
	email: z.string(),
	password: z.string()
});

export const registerUserAction = async ({ request }) => {
	try {
		const parsedFormData = parseFormData(await request.formData());
		const {
			formData: { email, password }
		} = validateFormData(parsedFormData, userSchema);
		const user = await registerUser({
			email,
			password
		})
		return {
			headers: {
				'Set-Cookie': `token=${user.token}; Path=/; HttpOnly; Secure; SameSite=Lax`
			}
		};
	} catch (error) {
		console.log(error);
		return fail(400, {
			message: error.message
		});
	}
};
