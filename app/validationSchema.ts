import { z } from "zod";

export const createIssueSchema = z.object({
  title: z.string().min(1, "Title harus di isi.").max(255),
  description: z.string().min(1, "Deskripsi Harus di isi."),
});
