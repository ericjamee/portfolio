# James Erickson - Portfolio Website

A modern, responsive portfolio website built with Next.js 14 and Tailwind CSS. Features smooth animations, clean design, and easy customization.

## 🚀 Features

- ✨ Modern, clean UI with smooth animations
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Built with Next.js 14 (App Router) and TypeScript
- 🎨 Styled with Tailwind CSS
- 🎭 Framer Motion animations
- ♿ Accessible with semantic HTML
- 🔧 Easy to customize with centralized data file

## 📋 Pages

- **Home** - Hero section with introduction and call-to-action
- **About** - Detailed bio, education, and technical skills
- **Projects** - Grid of projects with descriptions and links
- **Resume** - Downloadable resume and experience summary
- **Contact** - Contact form and social links

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (React)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Deployment:** Ready for Vercel, Netlify, or any hosting platform

## 📦 Installation

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ✏️ Customization Guide

### 1. Personal Information & Content

Edit `/data/siteData.ts` to update:
- Personal information (name, title, bio, education)
- Contact information (email, LinkedIn, GitHub)
- Skills and technologies
- Projects list
- Resume file path

```typescript
// Example: Update personal info
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  tagline: "Your tagline",
  // ... more fields
};
```

### 2. Colors & Theme

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: '#3B82F6',    // Change to your preferred accent color
  secondary: '#1E40AF',   // Change to your preferred secondary color
},
```

### 3. Projects

Add or edit projects in `/data/siteData.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description",
    image: "/images/projects/project.jpg", // Add image to public folder
    tags: ["React", "TypeScript"],
    liveUrl: "https://...",
    githubUrl: "https://github.com/...",
  },
  // Add more projects...
];
```

### 4. Images

Add your images to the `/public` directory:

```
/public
  /images
    /projects
      - project1.jpg
      - project2.jpg
    - profile.jpg
  /files
    - resume.pdf
```

### 5. Resume

1. Place your PDF resume in `/public/files/resume.pdf`
2. Update the resume info in `/data/siteData.ts`:

```typescript
export const resumeInfo = {
  pdfUrl: "/files/resume.pdf",
  lastUpdated: "Your Date",
};
```

### 6. Contact Form

The contact form uses [FormSubmit](https://formsubmit.co/) (free service).

**Setup:**
1. Open `/app/contact/page.tsx`
2. Update the email in the form action:
   ```typescript
   action={`https://formsubmit.co/${contactInfo.email}`}
   ```
3. Submit the form once to verify your email with FormSubmit

**Alternative:** Use a `mailto:` link or integrate with other services like:
- Netlify Forms
- Formspree
- EmailJS
- Your own backend API

### 7. Fonts

The site uses Google Fonts (Inter). To change:

Edit `/app/layout.tsx`:
```typescript
import { YourFont } from 'next/font/google'

const yourFont = YourFont({ subsets: ['latin'] })
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

Vercel will automatically detect Next.js and configure everything.

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Connect your repository
4. Build command: `npm run build`
5. Publish directory: `.next`

### Other Hosting

Build the project:
```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

## 📁 Project Structure

```
Portfolio Site/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── resume/            # Resume page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ProjectCard.tsx
├── data/                  # Site data and configuration
│   └── siteData.ts       # ⭐ Main config file
├── public/               # Static files
│   ├── images/          # Images
│   └── files/           # PDFs, etc.
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Customization Tips

### Adding a New Page

1. Create a new folder in `/app/yourpage/`
2. Add a `page.tsx` file
3. Add the route to the Navbar in `/components/Navbar.tsx`
4. Add the route to the Footer in `/components/Footer.tsx`

### Changing Animations

Animations use Framer Motion. Adjust them in any page:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* Your content */}
</motion.div>
```

### Mobile Menu

The responsive mobile menu is built into the Navbar component. Customize it in `/components/Navbar.tsx`.

## 📝 To-Do After Setup

- [ ] Update all personal information in `/data/siteData.ts`
- [ ] Add your profile photo to `/public/images/profile.jpg`
- [ ] Add project screenshots to `/public/images/projects/`
- [ ] Add your resume PDF to `/public/files/resume.pdf`
- [ ] Update email in contact form
- [ ] Test the contact form
- [ ] Update colors in `tailwind.config.ts` if desired
- [ ] Add your real project data
- [ ] Update meta tags in `/app/layout.tsx` for SEO
- [ ] Test on mobile devices
- [ ] Deploy to your hosting platform

## 🐛 Common Issues

### Images not loading
- Make sure images are in the `/public` folder
- Use paths starting with `/` (e.g., `/images/photo.jpg`)
- Check file names match exactly (case-sensitive)

### Contact form not working
- Verify your email in FormSubmit
- Check browser console for errors
- Consider alternative form services

### Styling issues
- Run `npm install` to ensure Tailwind is installed
- Check that `globals.css` is imported in `layout.tsx`
- Clear browser cache

## 📧 Support

For issues or questions:
- Check the Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Check the Tailwind CSS documentation: [tailwindcss.com/docs](https://tailwindcss.com/docs)

## 📄 License

This project is open source and available for personal and commercial use.

---

Built with ❤️ using Next.js and Tailwind CSS

