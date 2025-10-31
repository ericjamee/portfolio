'use client';

import { motion } from 'framer-motion';
import { personalInfo, skills } from '@/data/siteData';

/**
 * ABOUT PAGE
 * Detailed information about background, education, and skills
 * Update content in /data/siteData.ts
 */

export default function About() {
  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Profile Picture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-8">
            <img
              src="/images/profile.jpg"
              alt="James Erickson"
              className="w-40 h-40 rounded-full object-cover shadow-xl border-4 border-gray-100"
              style={{ objectPosition: 'center 20%' }}
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            James Edwin Erickson
          </h1>
          <p className="text-xl text-gray-600 mb-2">Full-Stack Developer</p>
          <div className="flex justify-center gap-4 text-gray-600 text-sm">
            <span>541-908-6020</span>
            <span>•</span>
            <a href="mailto:jamesee2@byu.edu" className="hover:text-gray-900">jamesee2@byu.edu</a>
            <span>•</span>
            <a href="https://linkedin.com/in/JamesEdErickson" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">LinkedIn</a>
          </div>
        </motion.div>

        {/* Bio Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Full-Stack Developer who enjoys building complete, high-quality applications from start to finish. 
              I focus on creating software that's fast, reliable, and user-friendly—combining solid engineering with 
              thoughtful design. Experienced in React, .NET, and Azure, I deliver solutions that balance speed, 
              scalability, and great user experience.
            </p>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Bachelor of Science in Information Systems</h3>
                <p className="text-lg text-gray-700">Brigham Young University - Marriott School of Business</p>
                <p className="text-gray-600">Full-Stack Development Emphasis, STEM-designated technical program</p>
              </div>
              <div className="text-right mt-4 md:mt-0">
                <p className="text-lg font-semibold text-gray-900">Expected Jun 2026</p>
                <p className="text-gray-600">GPA: 3.52</p>
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <p className="text-gray-700">• Associate of Information Systems</p>
              <p className="text-gray-700">• 1st Place Winner - BYU IS INTEX Competition</p>
              <p className="text-gray-700 text-sm mt-4"><strong>Relevant Coursework:</strong> Web Development (React, .NET), Database Design & Management, 
              Data Communications & Networking, Information Systems Security & Controls, Project Management, Enterprise Application Development</p>
            </div>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
          <div className="space-y-8">
            {/* Research Assistant */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Research Assistant and Web Developer</h3>
                  <p className="text-lg text-gray-700">Record Linking Lab at BYU</p>
                </div>
                <p className="text-gray-600 mt-2 md:mt-0">May 2024 - Present</p>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Built and deployed donor platform (React + .NET) enabling contributions that fund and employ African student researchers</li>
                <li>• Designed responsive front-end (JavaScript, TypeScript, HTML, CSS) and optimized UI/UX for accessibility</li>
                <li>• Developed Khan Academy–style learning system with admin tools for course uploads and progress badges</li>
                <li>• Partnered with faculty to ensure data security, accessibility, and scalability</li>
              </ul>
            </div>

            {/* Spanish Area Supervisor */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Spanish Area Supervisor</h3>
                  <p className="text-lg text-gray-700">Missionary Training Center, Provo, Utah</p>
                </div>
                <p className="text-gray-600 mt-2 md:mt-0">May 2022 - Present</p>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Managed logistics and training for 15+ teachers weekly, using monday.com, Oracle to optimize scheduling and feedback</li>
                <li>• Delivered weekly vision and pedagogy training, improving instructional consistency across the team</li>
                <li>• Conducted bi-weekly classroom observations and demonstrations, providing targeted feedback to enhance teaching quality</li>
              </ul>
            </div>

            {/* CEO/Founder */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">CEO/Founder</h3>
                  <p className="text-lg text-gray-700">GoodAd Marketing, Provo, Utah</p>
                </div>
                <p className="text-gray-600 mt-2 md:mt-0">Jan 2022 - Mar 2024</p>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Built no-code client websites, ran Facebook, Instagram, and Google Ads campaigns, generating daily inbound leads</li>
                <li>• Oversaw pricing strategy, ad performance optimization, and client onboarding</li>
              </ul>
            </div>

            {/* Volunteer Representative */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Volunteer Representative - Spanish</h3>
                  <p className="text-lg text-gray-700">Church of Jesus Christ of Latter-Day Saints, Montevideo, Uruguay</p>
                </div>
                <p className="text-gray-600 mt-2 md:mt-0">Oct 2019 - Oct 2021</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technical Skills - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Skills</h2>
          <div className="bg-gray-50 rounded-2xl p-8 space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Languages & Frameworks</h3>
              <p className="text-gray-700">Python, C#, JavaScript, React, ASP.NET Core, HTML/CSS, SQL, VBA, Swift</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Web Development & UX</h3>
              <p className="text-gray-700">React + Tailwind CSS, Secure user authentication systems, Stripe Integration, Accessibility, UI/UX</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Backend & Databases</h3>
              <p className="text-gray-700">PostgreSQL, MySQL, SQLite, RESTful APIs, Authentication (cookies, sessions), ERD Modeling</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Cloud & Infrastructure</h3>
              <p className="text-gray-700">Azure, AWS EC2, Render, Vercel, Nginx, Ubuntu Linux, SSL Setup, Static IPs</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Security & Cyber</h3>
              <p className="text-gray-700">Encryption & Hashing, Network Scanning (Nmap), VPN Configuration, Forensics</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">AI & Automation</h3>
              <p className="text-gray-700">OpenAI API Integration, Prompt Engineering, GPT-4o Business Applications, Automation using Cursor</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Version Control</h3>
              <p className="text-gray-700">Git, GitHub (Private/Public Repositories, CI/CD Deployment)</p>
            </div>
          </div>
        </motion.div>

        {/* Project Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Highlights</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <p className="text-gray-700">• Launched math tutoring website (React/.NET) with mobile-first design and scheduling tools – 2025</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <p className="text-gray-700">• Built streaming platform (React + .NET + Azure) with ML models to predict user preferences and boost engagements - 2025</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <p className="text-gray-700">• Designed and deployed full-stack website (HTML/CSS, SQL, ERD Modeling, AWS EC2) – Awarded 1st Place - 2024</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <p className="text-gray-700">• Developed budgeting application with Stripe integration, user auth, and custom API logic (React + .NET + Azure) - 2024</p>
            </div>
          </div>
        </motion.div>

        {/* Other Achievements & Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Beyond Code</h2>
          <div className="bg-gray-50 rounded-2xl p-8 space-y-4">
            <p className="text-gray-700">
              <strong>Achievements:</strong> Eagle Scout (Boy Scouts of America), On-Campus Internship for Engage Now Africa (2025), 
              Notion Campus Leader for BYU (2025)
            </p>
            <p className="text-gray-700">
              <strong>Interests & Hobbies:</strong> When I'm not coding, you'll find me playing tennis, biking and working on bikes, 
              or doing technical woodworking projects. I enjoy hands-on activities that combine creativity with precision—much like building software.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

