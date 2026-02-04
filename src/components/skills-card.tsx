import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import type { TSkill } from "@/lib/types";
import { Section } from "./ui/section";

// Skills component
const Skills = ({ skills }: { skills: TSkill[] }) => {
    
    return (
        <Section> 
              <h2 className="text-xl font-bold" id="skills-section">
                Skills
              </h2>
        <Card className="service-item gap-2 flex flex-col flex-wrap capitalize border border-muted p-3 print:border-none">
         <CardContent className="grid grid-cols-4 md:grid-cols-10 gap-2 lg:gap-4 justify-center items-center print:hidden">
             {skills.map((skill: TSkill, index: number) => (
                 <SkillItem key={index} href={skill.href} alt={skill.alt} icon={skill.icon} />))

             }
         </CardContent>
         <CardContent className="hidden p-2 print:block  print:text-[12px]">
             <ul className="list-disc text-xs grid grid-cols-2 gap-1 mx-2">
                 {skills.map((skill: TSkill, index: number) => (
                     <li key={index}> {skill.alt}</li>))

                 }
             </ul>
         </CardContent>

     </Card>
            </Section>
    )
};



// const SkillCategory = ({ title, skillItems }: { title: string, skillItems: any[] }) => {
//     const items = skillItems.filter(skill => skill.category === title);
//     return (<Card className="service-item gap-2 flex flex-col flex-wrap capitalize border border-muted p-3 print:border-none">
//         <CardHeader className="">
//             <CardTitle className="text-base">
//                 <p>{title}</p>
//             </CardTitle>
//         </CardHeader>
//         <CardContent className="grid grid-cols-4 md:grid-cols-6 gap-2 lg:gap-4 justify-center items-center print:hidden">
//             {items.map((skill: any, index: number) => (
//                 <SkillItem key={index} href={skill.href} alt={skill.skill} icon={skill.icon.light} />))

//             }
//         </CardContent>
//         <CardContent className="hidden p-2 print:block  print:text-[12px]">
//             <ul className="list-disc text-xs grid grid-cols-2 gap-1 mx-2">
//                 {items.map((skill: any, index: number) => (
//                     <li key={index}> {skill.skill}</li>))

//                 }
//             </ul>
//         </CardContent>

//     </Card>)
// }


const SkillItem = ({ icon, href, alt }: { icon: string, href: string, alt: string }) => (
    <>
        <a href={href} target="_blank" className="group relative flex justify-center items-center print:hidden">
            <div className="relative">
                <Image
                    className="print:hidden w-full h-auto rounded-xl transition-transform duration-300 transform group-hover:scale-150"
                    src={icon}
                    alt={alt}
                    width="0"
                    height="0"
                    sizes="50vw"
                />
            </div>
        </a>
    </>
);
export { Skills };
