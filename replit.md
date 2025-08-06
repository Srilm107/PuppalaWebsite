# Portfolio Website Development Project

## Overview

This is a professional portfolio website showcasing Lakshmi Durga Puppala's professional background, skills, experience, and projects. The application is a full-stack web development project that presents a comprehensive view of her technical expertise and professional journey.

The project demonstrates modern web development practices, featuring a React frontend with TypeScript, an Express.js backend, and in-memory data storage. It includes sections for professional profile, skills showcase, work experience, project portfolio, education, and contact information with a responsive, modern design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Styling**: Tailwind CSS with custom CSS variables for theming, using the shadcn/ui component library for consistent UI components
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript for consistent type safety across the full stack
- **API Design**: RESTful endpoints for milestone and project information management
- **Development Tools**: tsx for TypeScript execution in development, esbuild for production bundling

### Data Storage Solutions
- **Database**: PostgreSQL with Neon serverless hosting for scalable cloud-based data storage
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Schema**: Well-defined tables for milestones and project information with proper relationships
- **Migrations**: Drizzle Kit for database schema migrations and version control

### Authentication and Authorization
- **Current State**: No authentication system implemented
- **Session Management**: Basic session storage configuration present but not actively used
- **Security**: Basic CORS and request parsing middleware in place

### External Dependencies
- **Database**: Neon PostgreSQL serverless database
- **Development**: Replit-specific tooling for development environment integration
- **UI Components**: Radix UI primitives for accessible, unstyled component foundations
- **Icons**: Lucide React for consistent iconography
- **Utilities**: Various utility libraries for date formatting, class management, and validation

The application follows a monorepo structure with shared TypeScript schemas between client and server, ensuring type consistency across the full stack. The architecture prioritizes developer experience with hot reloading, type safety, and modern tooling while maintaining simplicity for educational purposes.