import { pgTable, text, timestamp} from "drizzle-orm/pg-core";

export const emails = pgTable('emails', {
    id: text('id').primaryKey(),
    tenantId: text('tenant_id').notNull(),
    userId:text('user_id').notNull(),
    gmailId: text('gmail_id'),
    subject: text('subject'),
    sender: text('sender'),
    snippet: text('snippet'),
    priority: text('priority'),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    receivedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
})
