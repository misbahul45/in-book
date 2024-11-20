import { z } from "zod";
export namespace UserSchema {
  export type User = {
      id: string;
      name: string;
      aboutMe?: string;
      avatar: string;
  };
  export type CreateUserSchema = z.infer<typeof Schema.CreateUserSchema> & { id: string };

  export class Schema {
    static CreateUserSchema=z.object({
      name:z.string().min(3),
      aboutMe:z.string().optional(),
      avatar:z.string().url()
    })
  }

}
