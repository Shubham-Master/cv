import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Shubham Kumar",
  initials: "SK",
  location: "Gurugram, India (IST)",
  locationLink: "https://www.google.com/maps/place/Gurugram,+India",
  about:
    "Senior DevOps / Platform Engineer with strong experience in cloud infrastructure, automation, and embedded Linux systems, building reliable platforms at scale.",
  summary: (
    <>
      Senior DevOps / Platform Engineer with 7+ years of experience designing,
      automating, and operating production-grade infrastructure across AWS and
      Linux-based environments. Specialized in CI/CD automation, Kubernetes
      platforms, observability, and large-scale device fleets.
      <br />
      <br />
      Proven track record in reducing deployment cycles, improving system
      reliability, and enabling engineering teams through robust platform
      tooling. Experienced in cross-border collaboration with European teams,
      supporting globally distributed systems, and owning services end-to-end
      from design to production.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/155751376?v=4",
  personalWebsiteUrl: "https://github.com/Shubham-Master",
  contact: {
    email: "shubham46.56@gmail.com",
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
      degree: "B.E in Mechanical Engineering",
      start: "2014",
      end: "2018",
    },
  ],
  work: [
    {
      company: "AirFi Aviation Solutions",
      link: "https://airfi.aero/",
      badges: [
        "DevOps",
        "AWS",
        "CI/CD",
        "Automation",
        "Embedded Linux",
        "Networking",
      ],
      title: "Senior DevOps Engineer",
      start: "2023",
      end: "Present",
      description: (
        <>
          <p>
            Progressed from DevOps Engineer to Senior DevOps Engineer, leading
            automation, CI/CD, and infrastructure initiatives across AirFi’s
            global aviation hardware fleet.
          </p>
          <h4 className="font-semibold mt-2">
            Senior DevOps Engineer (2025–Present)
          </h4>
          <ul className="list-disc list-inside mt-1">
            <li>
              Promoted to lead AirFi’s DevOps initiatives, expanding
              collaboration with AirFi HQ in the Netherlands.
            </li>
            <li>
              Spearheaded cross-country release strategies aligning hardware and
              firmware development.
            </li>
            <li>Drove CI/CD automation reducing release cycles by 50%.</li>
            <li>
              Mentored engineers across India and NL offices, strengthening
              cross-functional collaboration.
            </li>
          </ul>
          <h4 className="font-semibold mt-4">DevOps Engineer (2023–2024)</h4>
          <ul className="list-disc list-inside mt-1">
            <li>
              Developed and deployed automation solutions across a fleet of
              8,000+ embedded devices.
            </li>
            <li>
              Automated firmware rollout pipelines cutting release time by 40%.
            </li>
            <li>
              Built telemetry-based PMIC monitoring for proactive fault
              detection.
            </li>
            <li>
              Developed secure remote diagnostics over LTE networks reducing
              MTTR by 35%.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Innoitus",
      link: "",
      badges: ["SRE", "Monitoring", "New Relic"],
      title: "Site Reliability Engineer",
      start: "2023",
      end: "2023",
      description: (
        <>
          Improved reliability practices through custom tooling and knowledge
          sharing.
          <ul className="list-disc list-inside mt-2">
            <li>
              Developed internal monitoring tools to enhance observability.
            </li>
            <li>
              Streamlined ServiceNow incident workflows reducing escalation
              rates.
            </li>
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
          Contributed to automation and infrastructure optimization within
          internal QA pipelines.
          <ul className="list-disc list-inside mt-2">
            <li>
              Built Jenkins pipelines integrating Prometheus and Grafana
              dashboards.
            </li>
            <li>
              Managed AWS-based environments ensuring scalability and uptime.
            </li>
            <li>
              Administered Kubernetes workloads with resource optimization.
            </li>
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
          Maintained critical production systems and introduced automation for
          repetitive infrastructure tasks.
          <ul className="list-disc list-inside mt-2">
            <li>Automated workflows saving 80+ engineering hours per month.</li>
            <li>
              Improved uptime via system hardening and deployment
              standardization.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: {
    tools: [
      {
        href: "https://kubernetes.io/",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/kubernetes-icon.png",
        alt: "Kubernetes",
      },
      {
        href: "https://terraform.io/",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/terraform-software-icon.png",
        alt: "Terraform",
      },
      {
        href: "https://aws.amazon.com/",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/aws-icon.png",
        alt: "AWS",
      },
      {
        href: "https://azure.com/",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/azure-icon.png",
        alt: "Azure",
      },
      {
        href: "https://cloud.google.com/",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-cloud-icon.png",
        alt: "Google Cloud Platform",
      },
      {
        href: "https://jenkins.io/",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/jenkins-icon.png",
        alt: "Jenkins",
      },
      {
        href: "https://ansible.com/",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ansible-software-icon.png",
        alt: "Ansible",
      },
      {
        href: "https://docker.com/",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/docker-icon.png",
        alt: "Docker",
      },
      {
        href: "https://github.com/",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.png",
        alt: "GitHub",
      },
      {
        href: "https://argoproj.github.io/argo-cd/",
        icon: "https://layer5.io/static/23bd800be4880360f484c8e4a73f06d5/argo-cd-color.svg",
        alt: "Argo CD",
      },
      {
        href: "https://kafka.apache.org/",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/apache-kafka-icon.png",
        alt: "Apache Kafka",
      },
      {
        href: "https://www.linux.org/",
        icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/linux-colored.svg",
        alt: "Linux",
      },
    ],

    frameworkAndRuntime: [
      {
        href: "https://nodejs.org/",
        icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
        alt: "Node.js",
      },
      {
        href: "https://nextjs.org/",
        icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg",
        alt: "Next.js",
      },
      {
        href: "https://aws.amazon.com/lambda/",
        icon: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Amazon_Lambda_architecture_logo.svg",
        alt: "AWS Lambda",
      },
    ],

    programmingLanguage: [
      {
        href: "https://www.python.org/",
        icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg",
        alt: "Python",
      },
      {
        href: "https://go.dev/",
        icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/go-colored.svg",
        alt: "Go",
      },
      {
        href: "https://www.typescriptlang.org/",
        icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg",
        alt: "TypeScript",
      },
      {
        href: "https://www.gnu.org/software/bash/",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bash-unix-shell-icon.png",
        alt: "Bash",
      },
    ],

    databases: [
      {
        href: "https://www.mongodb.com/",
        icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg",
        alt: "MongoDB",
      },
      {
        href: "https://www.postgresql.org/",
        icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg",
        alt: "PostgreSQL",
      },
      {
        href: "https://www.elastic.co/elasticsearch/",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/elasticsearch-icon.png",
        alt: "Elasticsearch",
      },
    ],
  },
  projects: [
    {
      title: "Kubernetes Platform Engineering",
      techStack: ["Kubernetes", "Terraform", "AWS", "Helm", "Argo CD"],
      description:
        "Designed and operated a production Kubernetes platform on AWS, including automated cluster provisioning with Terraform, GitOps-based deployments via Argo CD, and Helm-managed application lifecycles. Implemented standardized environments, role-based access, and CI/CD integrations to support multiple engineering teams.",
      link: {
        label: "Architecture Overview",
        href: "https://github.com/Shubham-Master",
      },
    },
    {
      title: "Serverless Log Processing Pipeline",
      techStack: ["AWS Lambda", "SQS", "S3", "Go", "MongoDB"],
      description:
        "Built a high-throughput serverless log ingestion pipeline using AWS Lambda and SQS to process telemetry from thousands of embedded devices. Implemented parallel processing, deduplication, and structured storage in MongoDB, significantly improving observability and reducing manual debugging effort.",
      link: {
        label: "Design Notes",
        href: "https://github.com/Shubham-Master",
      },
    },
    {
      title: "Multi-Cloud Infrastructure Framework",
      techStack: ["Terraform", "AWS", "Azure", "GCP", "Ansible"],
      description:
        "Created a reusable Infrastructure-as-Code framework enabling consistent provisioning across AWS, Azure, and GCP. Standardized networking, IAM, compute, and monitoring modules, allowing rapid environment setup and repeatable deployments across regions.",
      link: {
        label: "Framework Repo",
        href: "https://github.com/Shubham-Master",
      },
    },
    {
      title: "CI/CD Automation & Release Engineering",
      techStack: ["Jenkins", "GitHub Actions", "Docker", "Bash", "Python"],
      description:
        "Implemented end-to-end CI/CD pipelines for firmware and backend services, including automated testing, artifact management, and staged rollouts. Reduced release cycles by up to 50% while improving deployment reliability through standardized pipelines and rollback strategies.",
      link: {
        label: "Pipeline Examples",
        href: "https://github.com/Shubham-Master",
      },
    },
    {
      title: "Embedded Fleet Monitoring & Diagnostics",
      techStack: ["Linux", "AWS", "Kafka", "Python", "Elasticsearch"],
      description:
        "Developed monitoring and diagnostics workflows for 8,000+ embedded Linux devices, integrating Kafka-based event streaming and Elasticsearch-backed analytics. Enabled proactive fault detection, remote diagnostics, and measurable MTTR reduction across global deployments.",
      link: {
        label: "System Overview",
        href: "https://github.com/Shubham-Master",
      },
    },
  ],
} as const;
