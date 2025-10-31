# Images Directory

Place your images here to use them in your portfolio.

## Directory Structure

```
images/
├── profile.jpg           # Your profile photo (used on home page)
└── projects/            # Project screenshots
    ├── project1.jpg
    ├── project2.jpg
    └── ...
```

## Image Guidelines

### Profile Photo
- **Dimensions:** 400x400px or larger (square)
- **Format:** JPG or PNG
- **Size:** Keep under 500KB for optimal loading
- **Location:** `/public/images/profile.jpg`

### Project Screenshots
- **Dimensions:** 1200x800px (3:2 ratio recommended)
- **Format:** JPG or PNG
- **Size:** Keep under 1MB each
- **Location:** `/public/images/projects/`
- **Naming:** Use descriptive names (e.g., `ecommerce-app.jpg`)

## Usage in Code

Reference images from the `/public` directory:

```typescript
// In your components or data file
image: "/images/profile.jpg"
image: "/images/projects/my-project.jpg"
```

## Tips

- Use optimized images for better performance
- Consider using WebP format for better compression
- Always include alt text for accessibility
- Test images on different screen sizes

