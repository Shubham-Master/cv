import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Shubham Kumar",
  initials: "SK",
  location: "Gurugram, India (IST)",
  locationLink: "https://www.google.com/maps/place/Gurugram,+India",
  about: "Senior DevOps and Embedded Systems Engineer specializing in automation, embedded Linux, and AWS infrastructure.",
  summary: (
    <>
      Senior DevOps and Embedded Systems Engineer with expertise in automation,
      embedded Linux development, and managing scalable AWS cloud infrastructure.
      Experienced in building CI/CD pipelines and embedded systems solutions.
    </>
  ),
  avatarUrl: " https://avatars.githubusercontent.com/u/155751376?v=4",
  personalWebsiteUrl: "https://github.com/Shubham-Master",
  contact: {
    email: "contactshubham.kr@gmail.com",
    tel: "+91 8073314155",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Shubham-Master",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/contactshubham-kr/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "RNS Institute of Technology",
      degree: "B.Tech in Electronics and Communication Engineering",
      start: "2014",
      end: "2018",
    },
  ],
  work: [
    {
      company: "AirFi Aviation Solutions",
      link: "https://airfi.aero/",
      badges: ["DevOps", "AWS", "CI/CD", "Automation"],
      title: "Senior DevOps Engineer",
      start: "2025",
      end: "Present",
      description: (
        <>
          Promoted to lead AirFi’s DevOps initiatives, expanding collaboration with AirFi HQ in the Netherlands.
          <ul className="list-disc list-inside mt-2">
            <li>Spearheaded cross-country release strategies aligning hardware and firmware development.</li>
            <li>Drove CI/CD automation reducing release cycles by 50%.</li>
            <li>Mentored engineers across India and NL offices, strengthening cross-functional collaboration.</li>
          </ul>
        </>
      ),
    },
    {
      company: "AirFi Aviation Solutions",
      link: "https://airfi.aero/",
      badges: ["Embedded Linux", "AWS", "Networking"],
      title: "DevOps Engineer",
      start: "2023",
      end: "2024",
      description: (
        <>
          Developed and deployed automation solutions across a fleet of 8,000+ embedded devices.
          <ul className="list-disc list-inside mt-2">
            <li>Automated firmware rollout pipelines cutting release time by 40%.</li>
            <li>Built telemetry-based PMIC monitoring for proactive fault detection.</li>
            <li>Developed secure remote diagnostics over LTE networks reducing MTTR by 35%.</li>
          </ul>
        </>
      ),
    },
    {
      company: "Innoitus",
      link: "",
      badges: ["SRE", "Monitoring", "Documentation"],
      title: "Site Reliability Engineer",
      start: "2023",
      end: "2023",
      description: (
        <>
          Improved reliability practices through custom tooling and knowledge sharing.
          <ul className="list-disc list-inside mt-2">
            <li>Developed internal monitoring tools to enhance observability.</li>
            <li>Streamlined ServiceNow incident workflows reducing escalation rates.</li>
          </ul>
        </>
      ),
    },
    {
      company: "Amazon",
      link: "https://www.amazon.in/",
      badges: ["AWS", "CI/CD", "Kubernetes", "Monitoring"],
      title: "Quality Analyst",
      start: "2021",
      end: "2023",
      description: (
        <>
          Contributed to automation and infrastructure optimization within internal QA pipelines.
          <ul className="list-disc list-inside mt-2">
            <li>Built Jenkins pipelines integrating Prometheus and Grafana dashboards.</li>
            <li>Managed AWS-based environments ensuring scalability and uptime.</li>
            <li>Administered Kubernetes workloads with resource optimization.</li>
          </ul>
        </>
      ),
    },
    {
      company: "Extreme Soft Management",
      link: "",
      badges: ["SRE", "Automation", "Linux"],
      title: "Site Reliability Engineer",
      start: "2019",
      end: "2021",
      description: (
        <>
          Maintained critical production systems and introduced automation for repetitive infrastructure tasks.
          <ul className="list-disc list-inside mt-2">
            <li>Automated workflows saving 80+ engineering hours per month.</li>
            <li>Improved uptime via system hardening and deployment standardization.</li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "AWS",
    "AWS Lambda",
    "Azure",
    "Bash",
    "Buildroot",
    "DynamoDB",
    "DevOps",
    "Docker",
    "Embedded Linux",
    "GCP",
    "GitHub Actions",
    "Go",
    "Grafana",
    "Jenkins",
    "Kubernetes",
    "MQTT",
    "Next.js",
    "Node-RED",
    "Pandas",
    "Plotly",
    "Prometheus",
    "Python",
    "Raspberry Pi",
    "System Automation",
    "TypeScript"
  ],
  projects: [
    {
      title: "Smart Home Automation System",
      techStack: ["Raspberry Pi", "Python", "MQTT", "Node-RED"],
      description:
        "Developed a modular home automation setup using Raspberry Pi and IoT sensors for real-time control of lights, fans, and environmental monitoring through MQTT and Node-RED dashboard.",
      link: {
        label: "GitHub Repository",
        href: "https://github.com/Shubham-Master/smart-home",
      },
    },
    {
      title: "Personal Cloud Dashboard",
      techStack: ["Next.js", "TypeScript", "AWS Lambda", "DynamoDB"],
      description:
        "Built a serverless cloud dashboard to manage and visualize personal resources across AWS, with API integration for real-time usage metrics and notifications.",
      link: {
        label: "GitHub Repository",
        href: "https://github.com/Shubham-Master/cloud-dashboard",
      },
    },
    {
      title: "Flight Analytics Visualizer",
      techStack: ["Python", "Plotly", "Pandas"],
      description:
        "Created a data visualization tool to analyze flight performance, passenger metrics, and battery health trends using Plotly dashboards powered by real-world datasets.",
      link: {
        label: "GitHub Repository",
        href: "https://github.com/Shubham-Master/flight-analytics",
      },
    },
  ],
} as const;
