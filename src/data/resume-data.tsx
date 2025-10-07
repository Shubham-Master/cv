// app/resume/page.tsx
"use client";

export const RESUME_DATA: ResumeData = {
  name: "Bartosz Jarocki",
  initials: "BJ",
  location: "Wrocław, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about: "Full Stack Engineer dedicated to building high-quality products.",
  summary: (
    <>
      Full Stack Engineer specializing in high-performance React applications,
      scalable Node.js services, and real-time collaboration systems.
      Experienced in technical architecture design and remote team leadership.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "bartosz.jarocki@hey.com",
    tel: "+48530213401",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/BartoszJarocki",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bjarocki/",
        icon: "linkedin",
      },
      {
        name: "X",
        url: "https://x.com/BartoszJarocki",
        icon: "x",
      },
    ],
  },
  education: [
    {
      school: "Wrocław University of Technology",
      degree: "Bachelor's Degree in Control systems engineering and Robotics",
      start: "2007",
      end: "2010",
    },
  ],
  work: [
    {
      company: "Motion",
      link: "https://motionapp.com/",
      badges: ["Remote", "AI", "React", "Next.js", "TypeScript", "AdonisJS"],
      title: "Senior Software Engineer",
      start: "2025",
      end: null,
      description: (
        <>
          Working on internal AI agents platform allowing marketing specialists
          to create AI workflows.
        </>
      ),
    },
    {
      company: "Film.io",
      link: "https://film.io",
      badges: ["Remote", "React", "Next.js", "TypeScript", "Node.js"],
      title: "Software Architect",
      start: "2024",
      end: "2025",
      description: (
        <>
          Leading technical architecture of a blockchain-based film funding
          platform.
          <ul className="list-inside list-disc">
            <li>
              Architecting migration from CRA to Next.js for improved
              performance, SEO, and DX
            </li>
            <li>
              Established release process enabling faster deployments and
              reliable rollbacks
            </li>
            <li>
              Implementing system-wide monitoring and security improvements
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Parabol",
      link: "https://parabol.co",
      badges: [
        "Remote",
        "React",
        "TypeScript",
        "Node.js",
        "GraphQL",
        "Tailwind CSS",
      ],
      title: "Senior Full Stack Developer",
      start: "2021",
      end: "2024",
      description: (
        <>
          Senior developer and squad leader for an enterprise agile meeting
          platform.
          <ul className="list-inside list-disc">
            <li>
              Built design system with Tailwind CSS, improving development speed
              and time to market
            </li>
            <li>
              Implemented engineering practices: PR automation, code review
              guidelines, and workflows
            </li>
            <li>
              Open source contributions to Relay DevTools and React i18n tooling
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Clevertech",
      link: "https://clevertech.biz",
      badges: ["Remote", "React", "TypeScript", "Node.js", "Android", "Kotlin"],
      title: "Lead Android Developer → Full Stack Developer",
      start: "2015",
      end: "2021",
      description: (
        <>
          Successfully transitioned from mobile to full-stack development while
          leading distributed teams.
          <ul className="list-inside list-disc">
            <li>
              Led frontend team at Evercast, building real-time platform
              supporting 30+ users per room with HD streaming and collaboration
              tools
            </li>
            <li>
              Developed offline-first Android app for DKMS, improving donor
              registration process
            </li>
            <li>
              Led development teams across multiple successful client projects
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Jojo Mobile",
      link: "https://bsgroup.eu/",
      badges: ["On Site", "Android", "Java", "Kotlin"],
      title: "Android Developer → Lead Android Developer",
      start: "2012",
      end: "2015",
      description: (
        <>
          First Android developer, grew and led a team of 15+ engineers while
          establishing engineering culture.
          <ul className="list-inside list-disc">
            <li>
              Developed apps for major Polish companies including LOT, Polskie
              Radio, and Agora
            </li>
            <li>Built and mentored high-performing mobile development team</li>
          </ul>
        </>
      ),
    },
    {
      company: "Nokia Siemens Networks",
      link: "https://www.nokia.com",
      badges: ["On Site", "C/C++", "LTE", "Agile"],
      title: "C/C++ Developer",
      start: "2010",
      end: "2012",
      description:
        "Developed software for LTE base stations at enterprise scale, gaining strong fundamentals in software architecture, testing practices, and cross-team collaboration.",
    },
  ],
  skills: [
    "React/Next.js/Remix",
    "TypeScript",
    "Tailwind CSS",
    "Design Systems",
    "WebRTC",
    "WebSockets",
    "Node.js",
    "GraphQL",
    "Relay",
    "System Architecture",
    "Remote Team Leadership",
  ],
  projects: [
    {
      title: "Monito",
      techStack: ["TypeScript", "Next.js", "Browser Extension", "PostgreSQL"],
      description:
        "Browser extension for debugging web applications. Includes taking screenshots, screen recording, E2E tests generation and generating bug reports",
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Consultly",
      techStack: [
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
        "Tailwind CSS",
        "PostgreSQL",
        "Redis",
      ],
      description:
        "Platform for online consultations with real-time video meetings and scheduling",
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Minimalist CV",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "An open source minimalist, print friendly CV template with a focus on readability and clean design. >9k stars on GitHub",
      link: {
        label: "Minimalist CV",
        href: "https://github.com/BartoszJarocki/cv",
      },
    },
  ],
} as const;
let motion: any;
try {
  motion = require("framer-motion").motion;
  console.log("✅ Framer Motion animations enabled.");
} catch {
  console.warn("⚠️ framer-motion not found, animations disabled.");
  motion = { div: (props: any) => <div {...props} /> };
}

import Link from "next/link";
import { RESUME_DATA } from "@/data/resume-data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ResumePage() {
  const { name, initials, about, summary, contact, education, work, projects, skills, location } = RESUME_DATA;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 px-6 md:px-16 py-10">
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row items-center justify-between mb-8"
      >
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white">{name}</h1>
          <p className="text-sm text-gray-400 mt-1">{location}</p>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          {contact.social.map((s) => (
            <Link key={s.name} href={s.url} target="_blank" className="hover:text-sky-400 transition-colors">
              <i className={`ri-${s.icon}-line text-2xl`} />
            </Link>
          ))}
        </div>
      </motion.header>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="mb-10"
      >
        <h2 className="text-xl font-semibold text-sky-400 mb-2">About</h2>
        <p className="max-w-3xl text-gray-300 leading-relaxed">{about}</p>
        <div className="mt-2 text-gray-400">{summary}</div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-10"
      >
        <h2 className="text-xl font-semibold text-sky-400 mb-3">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} className="bg-gray-800 text-gray-200 hover:bg-sky-700">
              {skill}
            </Badge>
          ))}
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-10"
      >
        <h2 className="text-xl font-semibold text-sky-400 mb-4">Experience</h2>
        <div className="space-y-6">
          {work.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-gray-900/40 border-gray-800 hover:border-sky-700 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <Link href={job.link} target="_blank" className="text-lg font-semibold text-white hover:text-sky-400">
                        {job.company}
                      </Link>
                      <p className="text-gray-400 text-sm">
                        {job.title} • {job.start}–{job.end ?? "Present"}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2 md:mt-0">
                      {job.badges.map((b) => (
                        <Badge key={b} className="bg-gray-800 text-gray-300 hover:bg-sky-700">{b}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 text-gray-300 text-sm leading-relaxed">{job.description}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-10"
      >
        <h2 className="text-xl font-semibold text-sky-400 mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="bg-gray-900/40 border-gray-800 hover:border-sky-600">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    <Link href={project.link.href} target="_blank" className="text-sky-400 text-sm hover:underline">
                      {project.link.label}
                    </Link>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {project.techStack.map((t) => (
                      <Badge key={t} className="bg-gray-800 text-gray-300">{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-xl font-semibold text-sky-400 mb-4">Education</h2>
        {education.map((e) => (
          <div key={e.school} className="text-gray-300 text-sm">
            <p className="font-medium text-white">{e.school}</p>
            <p>{e.degree}</p>
            <p className="text-gray-500">
              {e.start} – {e.end}
            </p>
          </div>
        ))}
      </motion.section>

      {/* Footer */}
      <footer className="text-center text-gray-600 mt-16 text-sm">
        Built with ❤️ by {name}. Last updated {new Date().getFullYear()}.
      </footer>
    </div>
  );
}
