import { personalInfo, projects, skills, contactInfo, resumeInfo } from '@/data/siteData'

export default function Home() {
  return (
    <div className="bg-offwhite">
      {/* Home */}
      <section id="home" className="min-h-screen flex items-center justify-center">
        <div className="text-center select-none">
          <p className="text-2xl sm:text-4xl text-black tracking-[0.06em]">FULL STACK DEVELOPER</p>
          <p className="mt-2 text-sm sm:text-base text-black/70">(yep, the entire stack)</p>
        </div>
      </section>

      {/* Photos grid (under first section) */}
      <section id="photos" className="py-5 sm:py-6">
        <div className="mx-auto max-w-7xl px-3 sm:px-6">
          <h2 className="mb-3 sm:mb-4 text-center text-2xl sm:text-4xl tracking-[0.06em] text-black">James Erickson</h2>
          <div
            className="grid grid-cols-12 gap-2.5 sm:gap-3 auto-rows-[94px] sm:auto-rows-[128px] md:auto-rows-[153px] lg:auto-rows-[170px]"
            aria-label="Personal photos gallery"
          >
            {/* Row 1 */}
            <div className="col-span-12 md:col-span-6 row-span-2 overflow-hidden rounded-sm">
              <img src="/images/Photos-1-001/DSCF2816-EDIT.jpg" alt="Bikes at sunset" className="h-full w-full object-cover" />
            </div>
            <div className="col-span-6 md:col-span-3 row-span-2 overflow-hidden rounded-sm">
              <img src="/images/Photos-1-001/DSCF3035.jpg" alt="Wedding portrait" className="h-full w-full object-cover" />
            </div>
            <div className="col-span-6 md:col-span-3 row-span-2 overflow-hidden rounded-sm">
              <img src="/images/Photos-1-001/DSCF4228.jpg" alt="Tandem bike ride" className="h-full w-full object-cover" />
            </div>
            <div className="col-span-6 md:col-span-3 row-span-2 overflow-hidden rounded-sm">
              <img src="/images/Photos-1-001/IMG_1773.jpeg" alt="Selfie" className="h-full w-full object-cover" />
            </div>

            {/* Row 2 */}
            <div className="col-span-12 md:col-span-6 row-span-2 overflow-hidden rounded-sm">
              <img src="/images/Photos-1-001/IMG_3206.JPG" alt="Kayaking at sunset" className="h-full w-full object-cover" />
            </div>
            <div className="col-span-6 md:col-span-3 row-span-2 overflow-hidden rounded-sm">
              <img src="/images/Photos-1-001/IMG_4103.jpg" alt="Portrait" className="h-full w-full object-cover" />
            </div>
            
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-5xl tracking-tight text-black">About</h2>
          <p className="mt-6 text-sm sm:text-base leading-relaxed text-black/80 max-w-2xl mx-auto">
            I&apos;m James Erickson — a full-stack developer and Information Systems student at BYU&apos;s Marriott School of Business. I&apos;m passionate about creating modern, meaningful software that simplifies life and helps people connect.
          </p>

          <p className="mt-6 text-sm sm:text-base leading-relaxed text-black/80">Currently, I work on projects that blend technology, leadership, and impact:</p>

          <ul className="mt-4 text-left max-w-2xl mx-auto space-y-3 text-sm sm:text-base leading-relaxed text-black/80">
            <li>
              <span className="font-medium">MTC Spanish Supervisor</span> — Lead a team of teachers and develop automations that streamline scheduling, attendance, and communication.
            </li>
            <li>
              <span className="font-medium">Record Linking Lab</span> — Build React and .NET web applications that support family history research with Professor Joe Price.
            </li>
            <li>
              <span className="font-medium">Engage Now Africa</span> — Contribute to literacy and teacher training initiatives in Sierra Leone and Ghana.
            </li>
          </ul>

          <p className="mt-6 text-sm sm:text-base leading-relaxed text-black/80 max-w-2xl mx-auto">
            My technical toolkit includes React, TypeScript, .NET (C#), PostgreSQL, Tailwind, Google Apps Script, and Nginx. I enjoy building scalable, purposeful systems that make a real difference.
          </p>

          <p className="mt-6 text-sm sm:text-base leading-relaxed text-black/80 max-w-2xl mx-auto">
            Outside of work, I love playing tennis, riding my tandem bike with my wife, and spending time with friends.
          </p>

        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-3xl px-6">
          <h2 className="text-center text-3xl sm:text-5xl tracking-tight text-black">Projects</h2>
          <ul className="mt-8 divide-y divide-black/10">
            <li className="py-5">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <div>
                  <a href="https://tutorange.com" target="_blank" rel="noreferrer" className="text-sm sm:text-base text-black hover:underline">Tutorange</a>
                  <p className="mt-1 text-xs sm:text-sm text-black/70">A full-stack tutoring platform for independent tutors and small teams. Users can create accounts, manage lessons, and handle payments through integrated Stripe checkout (cancellable). Built with React and .NET; strong end‑to‑end integration, auth, and persistence.</p>
                </div>
                <a href="https://tutorange.com" target="_blank" rel="noreferrer" className="text-xs text-black/60 hover:text-black hover:underline">tutorange.com</a>
              </div>
            </li>
            <li className="py-5">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <div>
                  <a href="https://humanconnectionprojectbyu.vercel.app/" target="_blank" rel="noreferrer" className="text-sm sm:text-base text-black hover:underline">Human Connection Project</a>
                  <p className="mt-1 text-xs sm:text-sm text-black/70">Developed for a BYU professor to support donations that fund BYU Pathway scholarships for students who later become employed. Features donation management and a clean, accessible UI with fast loads on Vercel.</p>
                </div>
                <a href="https://humanconnectionprojectbyu.vercel.app/" target="_blank" rel="noreferrer" className="text-xs text-black/60 hover:text-black hover:underline">humanconnectionprojectbyu.vercel.app</a>
              </div>
            </li>
            <li className="py-5">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <div>
                  <a href="https://moneytobudget.com" target="_blank" rel="noreferrer" className="text-sm sm:text-base text-black hover:underline">MoneyToBudget</a>
                  <p className="mt-1 text-xs sm:text-sm text-black/70">A personal budgeting app that makes financial tracking simple and meaningful. Originally featured Stripe subscriptions; now streamlined for personal/friends use. Includes daily expense tracking, visual summaries, and goal setting. Demonstrates practical .NET + React and backend deployment skills.</p>
                </div>
                <a href="https://moneytobudget.com" target="_blank" rel="noreferrer" className="text-xs text-black/60 hover:text-black hover:underline">moneytobudget.com</a>
              </div>
            </li>
            <li className="py-5">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <div>
                  <a href="https://talitha-tutors.vercel.app/" target="_blank" rel="noreferrer" className="text-sm sm:text-base text-black hover:underline">Talitha Tutors</a>
                  <p className="mt-1 text-xs sm:text-sm text-black/70">A lightweight, elegant site for Talitha, a math education major. Highlights services, contact options, and scheduling in a clean, mobile‑optimized design. Emphasizes maintainability and user‑friendly structure; a good example of minimalist frontend work.</p>
                </div>
                <a href="https://talitha-tutors.vercel.app/" target="_blank" rel="noreferrer" className="text-xs text-black/60 hover:text-black hover:underline">talitha-tutors.vercel.app</a>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-3xl px-6">
          <h2 className="text-center text-3xl sm:text-5xl tracking-tight text-black">Resume</h2>

          {/* Header */}
          <div className="mt-6 text-center">
            <p className="text-sm text-black">James Edwin Erickson</p>
            <p className="mt-1 text-xs text-black/70">541-908-6020 · {contactInfo.email} · linkedin.com/in/JamesEdErickson</p>
            <p className="sr-only">Full-Stack Developer</p>
          </div>

          {/* Summary */}
          <div className="mt-6">
            <p className="text-[11px] tracking-wide text-black/60">SUMMARY</p>
            <p className="mt-2 text-sm text-black/80">Full-Stack Developer who enjoys building complete, high-quality applications from start to finish. I focus on creating software that’s fast, reliable, and user-friendly—combining solid engineering with thoughtful design. Experienced in React, .NET, and Azure, I deliver solutions that balance speed, scalability, and great user experience.</p>
          </div>

          {/* Education */}
          <div className="mt-8">
            <p className="text-[11px] tracking-wide text-black/60">EDUCATION</p>
            <div className="mt-2 text-sm text-black/80">
              <p>Brigham Young University — Marriott School of Business, Provo, Utah</p>
              <p className="text-black/60 text-xs mt-1">B.S. Information Systems, Full-Stack Development Emphasis (STEM) · GPA 3.52 · Associate of Information Systems · BYU IS INTEX competition winner · Relevant coursework: Web Dev (React, .NET), DB Design & Management, Data Comms & Networking, IS Security & Controls, Project Management, Enterprise App Dev · Expected Jun 2026</p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mt-8">
            <p className="text-[11px] tracking-wide text-black/60">TECHNICAL SKILLS</p>
            <ul className="mt-2 space-y-2 text-sm text-black/80">
              <li><span className="text-black/60">Languages & Frameworks:</span> Python, C#, JavaScript, React, ASP.NET Core, HTML/CSS, SQL, VBA, Swift</li>
              <li><span className="text-black/60">Web Development & UX:</span> React + Tailwind CSS, Secure auth, Stripe, Accessibility, UI/UX</li>
              <li><span className="text-black/60">Backend & Databases:</span> PostgreSQL, MySQL, SQLite, REST APIs, Auth (cookies/sessions), ERD Modeling</li>
              <li><span className="text-black/60">Cloud & Infrastructure:</span> Azure, AWS EC2, Render, Vercel, Nginx, Ubuntu, SSL, Static IPs</li>
              <li><span className="text-black/60">Security & Cyber:</span> Encryption/Hashing, Nmap, VPN, Forensics</li>
              <li><span className="text-black/60">AI & Automation:</span> OpenAI API, Prompt Engineering, GPT‑4o business apps, Cursor automation</li>
              <li><span className="text-black/60">Version Control:</span> Git, GitHub (private/public, CI/CD)</li>
            </ul>
          </div>

          {/* Project Experience */}
          <div className="mt-8">
            <p className="text-[11px] tracking-wide text-black/60">PROJECT EXPERIENCE</p>
            <ul className="mt-2 space-y-3 text-sm text-black/80">
              <li>Launched math tutoring website (React/.NET) with mobile-first design and scheduling tools — 2025</li>
              <li>Built streaming platform (React + .NET + Azure) with ML models to predict preferences and boost engagement — 2025</li>
              <li>Designed and deployed full-stack website (HTML/CSS, SQL, ERD, AWS EC2) — 1st Place — 2024</li>
              <li>Developed budgeting app with Stripe, user auth, and custom API logic (React + .NET + Azure) — 2024</li>
            </ul>
          </div>

          {/* Experience */}
          <div className="mt-8">
            <p className="text-[11px] tracking-wide text-black/60">EXPERIENCE</p>
            <div className="mt-3 space-y-5">
              <div>
                <p className="text-sm text-black">Research Assistant and Web Developer · Record Linking Lab at BYU — Provo, UT <span className="text-black/60">(May 2024 – Present)</span></p>
                <ul className="mt-2 list-disc list-inside text-sm text-black/80 space-y-1">
                  <li>Built and deployed donor platform (React + .NET) enabling contributions that fund and employ African student researchers</li>
                  <li>Designed responsive front-end and optimized accessibility</li>
                  <li>Developed Khan Academy–style learning system with admin tools for course uploads and progress badges</li>
                  <li>Partnered with faculty to ensure data security, accessibility, and scalability</li>
                </ul>
              </div>
              <div>
                <p className="text-sm text-black">Spanish Area Supervisor · Missionary Training Center — Provo, UT <span className="text-black/60">(May 2022 – Present)</span></p>
                <ul className="mt-2 list-disc list-inside text-sm text-black/80 space-y-1">
                  <li>Managed logistics and training for 15+ teachers weekly using Monday.com and Oracle</li>
                  <li>Delivered weekly vision and pedagogy training; improved instructional consistency</li>
                  <li>Led bi-weekly observations and demonstrations with targeted feedback</li>
                </ul>
              </div>
              <div>
                <p className="text-sm text-black">CEO/Founder · GoodAd Marketing — Provo, UT <span className="text-black/60">(Jan 2022 – Mar 2024)</span></p>
                <ul className="mt-2 list-disc list-inside text-sm text-black/80 space-y-1">
                  <li>Built no-code client sites; ran Facebook, Instagram, and Google Ads generating daily inbound leads</li>
                  <li>Owned pricing strategy, optimization, and client onboarding</li>
                </ul>
              </div>
              <div>
                <p className="text-sm text-black">Volunteer Representative – Spanish · Church of Jesus Christ of Latter-day Saints — Montevideo, Uruguay <span className="text-black/60">(Oct 2019 – Oct 2021)</span></p>
              </div>
            </div>
          </div>

          {/* Other */}
          <div className="mt-8">
            <p className="text-[11px] tracking-wide text-black/60">OTHER SKILLS & ACHIEVEMENTS</p>
            <ul className="mt-2 space-y-1 text-sm text-black/80">
              <li>Eagle Scout, Boy Scouts of America</li>
              <li>On-Campus Internship for Engage Now Africa – 2025; Notion Campus Leader for BYU – 2025</li>
              <li>Enjoy tennis, biking and working on bikes, technical woodworking</li>
            </ul>
          </div>

          {/* Download */}
          <div className="mt-8 text-center">
            <a href={resumeInfo.pdfUrl} className="inline-block text-sm px-4 py-2 rounded-lg bg-black text-offwhite hover:opacity-90" target="_blank" rel="noreferrer">Download PDF</a>
            <p className="mt-2 text-[11px] text-black/60">Last updated {resumeInfo.lastUpdated}</p>
          </div>
        </div>
      </section>

    </div>
  );
}
