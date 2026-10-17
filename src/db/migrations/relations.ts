import { defineRelations } from "drizzle-orm";
import * as schema from "./schema";

export const relations = defineRelations(schema, (r) => ({
	session: {
		user: r.one.user({
			from: r.session.userId,
			to: r.user.id
		}),
	},
	user: {
		sessions: r.many.session(),
	},
}))