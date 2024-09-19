import { object, z } from "zod";

export const issueSchema = z.object({
  title: z.string().min(1, "Title is Required").max(255),
  description: z.string().min(1, "Description is Required"),
});

export const fullissueSchema = z.object({
  title: z.string().min(1, "Title is Required").max(255),
  description: z.string().min(1, "Description is Required"),
  createdAt: z.string(),
  status: z.string(),
});
