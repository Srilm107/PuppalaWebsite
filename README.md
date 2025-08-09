# Puppala Portfolio Website

A modern, full-stack portfolio website showcasing Lakshmi Durga Puppala's professional background, skills, experience, and projects.

## 🚀 Features

- **Modern Stack**: React 18 + TypeScript + Express.js
- **Responsive Design**: Beautiful UI with Tailwind CSS and shadcn/ui components
- **Full Portfolio**: Profile, skills, experience, education, projects, and certifications
- **Fast Performance**: Vite for development and optimized production builds
- **Type-Safe**: End-to-end TypeScript with shared schemas

## 🛠️ Tech Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS + shadcn/ui components
- TanStack Query for state management
- Wouter for routing
- Vite for building

### Backend
- Node.js + Express.js
- TypeScript
- In-memory storage (easily upgradeable to PostgreSQL)
- RESTful API design

## 📦 Installation & Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd PuppalaWebsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run locally**
   ```bash
   # Option 1: Use the dev script (runs both frontend and backend)
   node dev-local.js
   
   # Option 2: Run separately
   npm run dev  # Backend only
   npx vite --port 3000  # Frontend only (in another terminal)
   ```

4. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000/api

## 🚀 Deploy to Vercel

This project is ready for one-click deployment to Vercel:

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the configuration from `vercel.json`
   - Click "Deploy"

### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

## 📁 Project Structure

```
PuppalaWebsite/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/         # Page components
│   │   ├── data/          # Static data
│   │   └── hooks/         # Custom hooks
├── server/                # Backend Express application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── storage.ts        # Data storage layer
├── shared/               # Shared TypeScript schemas
└── attached_assets/      # Static assets
```

## 🔧 Configuration Files

- `vercel.json` - Vercel deployment configuration
- `vite.config.ts` - Frontend build configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `drizzle.config.ts` - Database configuration (for future PostgreSQL setup)

## 🗄️ Database (Optional Upgrade)

Currently using in-memory storage. To upgrade to PostgreSQL:

1. Set up a PostgreSQL database (Neon, Supabase, etc.)
2. Add `DATABASE_URL` environment variable in Vercel
3. Update `server/storage.ts` to use Drizzle ORM instead of MemStorage
4. Run database migrations with `npm run db:push`

## 🌐 API Endpoints

- `GET /api/profile` - Get profile information
- `GET /api/skills` - Get skills data
- `GET /api/experience` - Get work experience
- `GET /api/education` - Get education history
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get specific project
- `GET /api/certifications` - Get certifications

## 📄 License

MIT License

## 👨‍💻 Developer

**Lakshmi Durga Puppala**
- Email: lpuppala81@students.cumberland.edu
- LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/lakshmi-durga-puppala-a81752208/) 