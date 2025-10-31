# Portfolio Site Structure

Complete overview of your portfolio website architecture.

## 📂 Directory Structure

```
Portfolio Site/
│
├── 📁 app/                          # Next.js App Directory (main application)
│   ├── 📁 about/                    # About page route
│   │   └── page.tsx                 # About page component
│   ├── 📁 contact/                  # Contact page route
│   │   └── page.tsx                 # Contact page with form
│   ├── 📁 projects/                 # Projects page route
│   │   └── page.tsx                 # Projects grid display
│   ├── 📁 resume/                   # Resume page route
│   │   └── page.tsx                 # Resume display & download
│   ├── favicon.ico                  # Site favicon
│   ├── globals.css                  # Global styles & Tailwind imports
│   ├── layout.tsx                   # Root layout with Navbar & Footer
│   └── page.tsx                     # Home page (landing page)
│
├── 📁 components/                   # Reusable React components
│   ├── Footer.tsx                   # Site footer with links
│   ├── Navbar.tsx                   # Responsive navigation bar
│   └── ProjectCard.tsx              # Project card component
│
├── 📁 data/                         # Site data & configuration
│   └── siteData.ts                  # ⭐ MAIN CONFIG FILE
│                                    #    - Personal info
│                                    #    - Contact info
│                                    #    - Projects data
│                                    #    - Skills
│                                    #    - Resume info
│
├── 📁 public/                       # Static assets (served as-is)
│   ├── 📁 files/                    # Downloadable files
│   │   ├── README.md                # Instructions for files
│   │   └── [resume.pdf]             # ← Add your resume here
│   └── 📁 images/                   # Image assets
│       ├── 📁 projects/             # Project screenshots folder
│       ├── README.md                # Instructions for images
│       └── [profile.jpg]            # ← Add your photo here
│
├── 📄 Configuration Files
│   ├── .eslintrc.json               # ESLint configuration
│   ├── .gitignore                   # Git ignore rules
│   ├── next.config.js               # Next.js configuration
│   ├── package.json                 # Dependencies & scripts
│   ├── postcss.config.js            # PostCSS configuration
│   ├── tailwind.config.ts           # Tailwind CSS configuration
│   └── tsconfig.json                # TypeScript configuration
│
└── 📄 Documentation Files
    ├── CHECKLIST.md                 # Setup checklist
    ├── README.md                    # Main documentation
    ├── SETUP.md                     # Quick setup guide
    └── STRUCTURE.md                 # This file
```

## 🎯 Key Files to Edit

### 1. Main Content Configuration
**File:** `/data/siteData.ts`
- Contains ALL customizable content
- Update personal info, projects, skills, contact info
- ⭐ **Start here for customization!**

### 2. Color Theme
**File:** `tailwind.config.ts`
- Change primary and secondary colors
- Adjust font family
- Modify theme settings

### 3. SEO & Metadata
**File:** `/app/layout.tsx`
- Update page title
- Update meta description
- Update meta keywords

### 4. Contact Form
**File:** `/app/contact/page.tsx`
- Configure form submission service
- Update form action URL

## 🔄 Data Flow

```
User visits site
    ↓
app/layout.tsx (loads)
    ↓
Includes: Navbar + Footer
    ↓
Route loads (page.tsx)
    ↓
Imports data from data/siteData.ts
    ↓
Renders with animations (Framer Motion)
    ↓
Styled with Tailwind CSS
```

## 🎨 Styling System

### Global Styles
- **File:** `app/globals.css`
- Imports Tailwind directives
- Includes Google Fonts
- Custom utility classes

### Component Styles
- Uses Tailwind CSS utility classes
- Inline in JSX (className="...")
- Responsive breakpoints:
  - `sm:` - 640px+
  - `md:` - 768px+
  - `lg:` - 1024px+
  - `xl:` - 1280px+

### Theme Colors
```typescript
primary: '#3B82F6'    // Main accent color
secondary: '#1E40AF'  // Secondary color
gray-50: '#F9FAFB'    // Background
gray-900: '#111827'   // Text
```

## 🧩 Component Architecture

### Layout Components
```
RootLayout (layout.tsx)
├── Navbar
│   ├── Desktop Navigation
│   └── Mobile Menu (hamburger)
├── Page Content (children)
└── Footer
    ├── Brand Section
    ├── Quick Links
    └── Social Links
```

### Page Components
All pages follow this structure:
```typescript
'use client'  // Client-side component

import { motion } from 'framer-motion'
import data from '@/data/siteData'

export default function Page() {
  return (
    <motion.div>
      {/* Animated content */}
    </motion.div>
  )
}
```

## 🚀 Routes

| Route | File | Purpose |
|-------|------|---------|
| `/` | `app/page.tsx` | Home page |
| `/about` | `app/about/page.tsx` | About page |
| `/projects` | `app/projects/page.tsx` | Projects gallery |
| `/resume` | `app/resume/page.tsx` | Resume display |
| `/contact` | `app/contact/page.tsx` | Contact form |

## 📦 Dependencies

### Core
- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety

### Styling
- **Tailwind CSS** - Utility-first CSS
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

### Animations
- **Framer Motion** - React animation library

### Development
- **ESLint** - Code linting
- **TypeScript** - Type checking

## 🔑 Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Responsive navigation with mobile menu

### Animations
- Smooth page transitions
- Scroll animations (whileInView)
- Hover effects on cards and buttons

### SEO Optimized
- Semantic HTML elements
- Meta tags for social sharing
- Clean URL structure

### Accessibility
- ARIA labels
- Keyboard navigation
- Semantic markup
- Alt text for images

### Performance
- Optimized images
- Code splitting
- Static generation where possible
- Fast page loads

## 🛠️ Development Commands

```bash
npm install          # Install dependencies
npm run dev         # Start dev server (localhost:3000)
npm run build       # Build for production
npm start           # Start production server
npm run lint        # Run ESLint
```

## 📱 Mobile Responsiveness

The site automatically adjusts for:
- **Mobile** (< 768px): Single column, hamburger menu
- **Tablet** (768px - 1024px): Two columns, compact layout
- **Desktop** (> 1024px): Full multi-column layout

## 🎭 Animation System

Using Framer Motion for:
- **Page entry animations** - Fade in + slide up
- **Scroll animations** - Elements animate when in view
- **Hover states** - Interactive feedback
- **Staggered children** - Sequential animations

## 💡 Best Practices Implemented

✅ TypeScript for type safety
✅ Component-based architecture
✅ Centralized data configuration
✅ Responsive mobile-first design
✅ Semantic HTML for SEO
✅ Accessible navigation
✅ Clean, maintainable code
✅ Consistent styling with Tailwind
✅ Smooth animations with Framer Motion
✅ Optimized performance

---

**Need to update content?** → Edit `/data/siteData.ts`

**Need to change colors?** → Edit `tailwind.config.ts`

**Need to add a page?** → Create folder in `/app/yourpage/`

**Need to add an image?** → Place in `/public/images/`

