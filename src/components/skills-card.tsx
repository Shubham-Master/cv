import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Section } from "./ui/section";

type SkillItemType = {
  href: string;
  icon: string;
  alt: string;
};

type GroupedSkills = {
  tools: SkillItemType[];
  frameworkAndRuntime: SkillItemType[];
  programmingLanguage: SkillItemType[];
  databases: SkillItemType[];
};

const SkillGrid = ({
  title,
  items,
}: {
  title: string;
  items: SkillItemType[];
}) => {
  return (
    <Card className="service-item gap-2 flex flex-col border border-muted p-4 print:border-none">
      <CardHeader className="p-2">
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-wrap gap-4 justify-start items-center print:hidden">
        {items.map((skill, index) => (
          <SkillItem
            key={index}
            href={skill.href}
            alt={skill.alt}
            icon={skill.icon}
          />
        ))}
      </CardContent>

      <CardContent className="hidden p-2 print:block print:text-[12px]">
        <ul className="list-disc text-xs grid grid-cols-2 gap-1 mx-2">
          {items.map((skill, index) => (
            <li key={index}>{skill.alt}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

// Skills component (grouped layout)
const Skills = ({ skills }: { skills: GroupedSkills }) => {
  return (
    <Section>
      <h2 className="mb-6 text-xl font-bold" id="skills-section">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SkillGrid title="Tools" items={skills.tools} />
        <SkillGrid
          title="Framework And Runtime"
          items={skills.frameworkAndRuntime}
        />
        <SkillGrid
          title="Programming Language"
          items={skills.programmingLanguage}
        />
        <SkillGrid title="Databases" items={skills.databases} />
      </div>
    </Section>
  );
};

const SkillItem = ({
  icon,
  href,
  alt,
}: {
  icon: string;
  href: string;
  alt: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="group relative flex justify-center items-center print:hidden"
    title={alt}
  >
    <div className="relative">
      <Image
        className="w-10 h-10 object-contain rounded-xl transition-transform duration-300 transform group-hover:scale-110"
        src={icon}
        alt={alt}
        width={40}
        height={40}
      />
    </div>
  </a>
);

export { Skills };
