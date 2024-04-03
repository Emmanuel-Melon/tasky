import { z } from "zod";

export const taskSchema = z.object({
	title: z.string(),
	description: z.string(),
	deadline: z.date(),
	ownerId: z.string().optional()
});