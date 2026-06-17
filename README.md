<h1>Chronos</h1>
<h3>Chronos is an AI powered productivity dashboard that integrates Gmail, Google Calendar, an AI agent and multi-tenancy via Corsair.</h3>
<h4>It has been made to help people get more work done with less number of clicks!</h4>

<h2>Features:</h2>
<p>- Authentication using BetterAuth: Signup, Login, Logout, Session Management</p>
<p>- Gmail and Google Calendar Integration</p>
<p>- AI Agent Chat</p>
<p>- Sending emails and creating events</p>
<p>- Displaying Inbox and Calendar events</p>
<p>- Command Palette</p>
<p>- Keyboard shortcuts</p>
<p>- Multi-tenancy</p>

<h2>Tech Stack:</h2>
<p>React</p>
<p>NextJS</p>
<p>Postgres</p>
<p>Drizzle ORM</p>
<p>Corsair</p>
<p>BetterAuth</p>
<p>Tailwind CSS</p>
<p>Gemini AI</p>

<h2>Set up: </h2>
<p> clone this repo</p>
<p> npm i to install dependencies</p>
<p> configure env variables</p>
<p> run db migrations: npm run db:push</p>
<p> start development server: npm run dev and open http://localhost:3000</p>

<h2>Environment Variables:</h2>
<p>APP_URL = http://localhost:3000</p>
<p>DATABASE_URL = postgres://username:password@host/db_name</p>
<p>BETTER_AUTH_SECRET = your secret key (generate command: openssl rand -base64 32)</p>
<p>BETTER_AUTH_URL = http://localhost:3000 </p>
<p>GEMINI_API_KEY</p>
<p>CORSAIR_KEK</p>
<p>GMAIL_CLIENT_ID</p>
<p>GMAIL_CLIENT_SECRET</p>
<p>GITHUB_CLIENT_SECRET</p>
<p>GITHUB_CLIENT_ID</p>
<p>GMAIL_TOPIC_NAME</p>
<p>TOPIC_ID</p>

<h2>Example prompts: </h2>
<p>Send an email to youremail@example.com subject greetings body hi</p>
<p>Create an event for tomorrow at 5pm location college</p>

<h2>Deployments:</h2>
<p>I used Vercel and Neon PostgreSQL</p>

<h5>Built for the Corsair x ChaiCode Hackathon.</h5>


