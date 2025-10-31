# Files Directory

Place your downloadable files here.

## Files to Add

### Resume
- **Filename:** `resume.pdf`
- **Location:** `/public/files/resume.pdf`
- **Format:** PDF
- **Size:** Keep under 2MB

The resume will be available at: `yoursite.com/files/resume.pdf`

## Usage

The resume link is configured in `/data/siteData.ts`:

```typescript
export const resumeInfo = {
  pdfUrl: "/files/resume.pdf",
  lastUpdated: "October 2025",
};
```

## Tips

- Keep your resume up to date
- Ensure the PDF is readable on all devices
- Consider a clean, ATS-friendly format
- Include contact information in the PDF

