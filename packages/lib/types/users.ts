import { z } from "zod";

export const userSchema = z.object({
	title: z.string(),
	description: z.string(),
	deadline: z.date(),
	ownerId: z.string().optional(),
	kanbanListId: z.string().optional()
});

export type UserAttributes = z.infer<typeof userSchema>;
