// app/resume/page.tsx
"use client";

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
