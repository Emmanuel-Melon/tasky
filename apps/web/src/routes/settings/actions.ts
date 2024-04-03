import { fail } from '@sveltejs/kit';
import { updateUserInfo } from '$lib/data/users';
import { parseFormData, validateFormData } from "@repo/lib/formData";
import { taskSchema } from "@repo/lib/types/tasks";


export const profileInfoAction = async ({ request }) => {
	try {
		const parsedFormData = parseFormData(await request.formData());
		const {
			formData
		} = validateFormData(parsedFormData, taskSchema);

	
		const result = await updateUserInfo("3", {
			...formData
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

export const accountInfoAction = async ({ request }) => {
	try {
		const parsedFormData = parseFormData(await request.formData());
		const {
			formData
		} = validateFormData(parsedFormData, taskSchema);

	
		const result = await updateUserInfo("3", {
			...formData
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

export const accountSecurityAction = async ({ request }) => {
	try {
		const parsedFormData = parseFormData(await request.formData());
		const {
			formData
		} = validateFormData(parsedFormData, taskSchema);

	
		const result = await updateUserInfo("3", {
			...formData
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

export const deleteAccountAction = async ({ request }) => {
	try {
		const parsedFormData = parseFormData(await request.formData());
		const {
			formData
		} = validateFormData(parsedFormData, taskSchema);

	
		const result = await updateUserInfo("3", {
			...formData
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