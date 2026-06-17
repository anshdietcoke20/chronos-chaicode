import { pgTable, text,timestamp } from "drizzle-orm/pg-core"; 

export const calendarEvents = pgTable('calendar_events', {
    id: text('id').primaryKey(),
    tenantId: text('tenant_id').notNull(),
    userId:text('user_id'),
    googleEventId: text('google_event_id'),
    title: text('title'),
    startTime: timestamp('start_time', { withTimezone: true }).notNull().defaultNow(),
    endTime: timestamp('end_time', { withTimezone: true }).notNull().defaultNow(),
})