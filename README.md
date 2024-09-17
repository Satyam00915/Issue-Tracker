
# Issue Tracker

A simple issue tracking system built using Prisma, Next.js, Tailwind CSS, Radix UI, and PostgreSQL.

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS, Radix UI
- **Backend**: Prisma, Next.js API routes
- **Database**: PostgreSQL

## Features

- Create, update, and delete issues
- Categorize issues based on status (open, in progress, closed)
- Filter issues by priority or tags
- User authentication (if applicable)
- Responsive design

## Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/your-username/issue-tracker.git
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   cd issue-tracker
   npm install
   \`\`\`

3. Set up the database:
   - Make sure you have PostgreSQL installed.
   - Create a `.env` file and add your database URL:
     \`\`\`
     DATABASE_URL=postgresql://user:password@localhost:5432/your-database
     \`\`\`
   - Run Prisma migrations:
     \`\`\`bash
     npx prisma migrate dev
     \`\`\`

4. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## License

This project is open-source and available under the [MIT License](LICENSE).
