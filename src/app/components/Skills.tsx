import React from "react";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type SkillItem = {
  href: string;
  icon: string;
  alt: string;
};

type GroupedSkills = {
  tools: SkillItem[];
  frameworkAndRuntime: SkillItem[];
  programmingLanguage: SkillItem[];
  databases: SkillItem[];
};

interface SkillsProps {
  skills: GroupedSkills;
  className?: string;
}

function SkillsGrid({ title, items }: { title: string; items: SkillItem[] }) {
  return (
    <div className="rounded-xl border p-6">
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>

      <div className="flex flex-wrap gap-6">
        {items.map((skill) => (
          <a
            key={skill.alt}
            href={skill.href}
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:scale-105"
            title={skill.alt}
          >
            <img
              src={skill.icon}
              alt={skill.alt}
              className="h-10 w-10 object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export function Skills({ skills, className }: SkillsProps) {
  return (
    <Section className={cn(className)}>
      <h2 className="mb-6 text-xl font-bold" id="skills-section">
        Skills
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <SkillsGrid title="Tools" items={skills.tools} />

        <SkillsGrid
          title="Framework And Runtime"
          items={skills.frameworkAndRuntime}
        />

        <SkillsGrid
          title="Programming Language"
          items={skills.programmingLanguage}
        />

        <SkillsGrid title="Databases" items={skills.databases} />
      </div>
    </Section>
  );
}
