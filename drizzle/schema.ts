import { pgTable, text, doublePrecision, timestamp } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const products = pgTable("products", {
	id: text().default('uuid_generate_v4()').primaryKey().notNull(),
	name: text().notNull(),
	imageId: text().notNull(),
	price: doublePrecision().notNull(),
	description: text(),
	createdAt: timestamp({ mode: 'string' }).defaultNow(),
	updatedAt: timestamp({ mode: 'string' }).defaultNow(),
});
