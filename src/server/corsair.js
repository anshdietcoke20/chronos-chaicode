import 'dotenv/config';
import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { createCorsair } from 'corsair';
import { gmail } from '@corsair-dev/gmail';
import { googlecalendar} from '@corsair-dev/googlecalendar';
import { github } from '@corsair-dev/github';
import * as schema from '@/server/db/main-schema.js'

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
export const db = drizzle(pool, {schema}); // your app tables

console.log("Corsair initialized");

export const corsair = createCorsair({
    plugins: [gmail({
        authType: 'oauth_2',
        credentials: {
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
    },
    }), 
    googlecalendar({
        authType: 'oauth_2',
        credentials: {
        clientId: process.env.GOOGLE_CALENDAR_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CALENDAR_CLIENT_SECRET,
    },
    }),
    github({
          authType: "oauth_2",
          credentials: {
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        },
})],
    database: pool,
    kek: process.env.CORSAIR_KEK,
    multiTenancy: true,
});


export {pool};

