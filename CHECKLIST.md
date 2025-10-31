# Portfolio Setup Checklist

Use this checklist to ensure your portfolio is fully customized and ready to deploy.

## 📝 Content Updates

### Personal Information
- [ ] Update name in `/data/siteData.ts`
- [ ] Update title/role in `/data/siteData.ts`
- [ ] Update tagline in `/data/siteData.ts`
- [ ] Update bio and philosophy in `/data/siteData.ts`
- [ ] Update education information
- [ ] Update location

### Contact Information
- [ ] Update email address
- [ ] Update LinkedIn URL
- [ ] Update GitHub URL
- [ ] Update email in contact form (`/app/contact/page.tsx`)

### Skills
- [ ] Update frontend skills list
- [ ] Update backend skills list
- [ ] Update cloud/DevOps skills
- [ ] Update database skills
- [ ] Update tools list

### Projects
- [ ] Add/update project 1 (title, description, links)
- [ ] Add/update project 2
- [ ] Add/update project 3
- [ ] Add/update project 4
- [ ] Add/update project 5
- [ ] Add/update project 6
- [ ] Remove sample projects if not needed

## 🖼️ Media Files

### Images
- [ ] Add profile photo to `/public/images/profile.jpg`
- [ ] Add project screenshot 1 to `/public/images/projects/`
- [ ] Add project screenshot 2
- [ ] Add project screenshot 3
- [ ] Add project screenshot 4
- [ ] Add project screenshot 5
- [ ] Add project screenshot 6
- [ ] Update image paths in project data

### Files
- [ ] Add resume PDF to `/public/files/resume.pdf`
- [ ] Update resume last updated date
- [ ] Test resume download link

## 🎨 Design Customization

### Colors
- [ ] Review primary color (currently blue)
- [ ] Review secondary color
- [ ] Update colors in `tailwind.config.ts` if desired
- [ ] Test color contrast for accessibility

### Fonts
- [ ] Review current font (Inter)
- [ ] Change font if desired in `/app/layout.tsx`

## 🔧 Technical Setup

### Dependencies
- [ ] Run `npm install`
- [ ] Verify all packages installed correctly
- [ ] Check for any dependency warnings

### Development
- [ ] Run `npm run dev` to start development server
- [ ] Verify site loads at `localhost:3000`
- [ ] Check browser console for errors

### Testing
- [ ] Test Home page
- [ ] Test About page
- [ ] Test Projects page (all cards and links)
- [ ] Test Resume page and download
- [ ] Test Contact page form
- [ ] Test navigation (all links work)
- [ ] Test mobile menu (responsive design)
- [ ] Test on mobile device or browser dev tools
- [ ] Test on tablet view
- [ ] Test on desktop view

### SEO & Meta
- [ ] Update meta title in `/app/layout.tsx`
- [ ] Update meta description
- [ ] Update meta keywords
- [ ] Add custom favicon if desired

## 📧 Contact Form

- [ ] Choose contact form method (FormSubmit, mailto, etc.)
- [ ] Update form action URL with your email
- [ ] Test form submission
- [ ] Verify you receive emails

## 🚀 Deployment

### Pre-Deployment
- [ ] Run `npm run build` to test production build
- [ ] Fix any build errors
- [ ] Test the production build locally
- [ ] Push code to GitHub repository

### Deploy
- [ ] Choose hosting platform (Vercel, Netlify, etc.)
- [ ] Connect repository to hosting platform
- [ ] Configure build settings if needed
- [ ] Deploy the site
- [ ] Test live site URL
- [ ] Check all pages on live site
- [ ] Test on real mobile device

### Post-Deployment
- [ ] Set up custom domain (optional)
- [ ] Configure SSL certificate (usually automatic)
- [ ] Add site to Google Search Console
- [ ] Share site URL on social media
- [ ] Add site URL to resume
- [ ] Add site URL to LinkedIn

## 📱 Sharing

- [ ] Add portfolio link to resume
- [ ] Add portfolio link to LinkedIn profile
- [ ] Add portfolio link to GitHub profile
- [ ] Share on social media
- [ ] Add to email signature

## 🔄 Maintenance

- [ ] Plan to update projects regularly
- [ ] Keep resume up to date
- [ ] Update skills as you learn new technologies
- [ ] Check for broken links periodically
- [ ] Update dependencies occasionally (`npm update`)

---

## Quick Command Reference

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

**Tip:** Print this checklist or keep it open while setting up your portfolio!

🎉 Once all items are checked, your portfolio is ready to impress!

