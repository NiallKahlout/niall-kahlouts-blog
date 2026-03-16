import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Niall Kahlout's Blog",
  description:
    "A collection of cybersecurity, development, and automation projects by Niall Kahlout.",
};

type Status = "Live" | "In Progress" | "Ongoing";

type Project = {
  title: string;
  description: string;
  tags: string[];
  status: Status;
  href?: string;
};

const projects: Project[] = [
  {
    title: "Secure Notepad Chrome Extension",
    description:
      "A lightweight, password-protected browser extension for securely storing sensitive notes. Incorporates AES encryption, local storage security, and a minimal UI to ensure data stays private and never leaves the browser.",
    tags: ["Chrome Extension", "JavaScript", "AES Encryption", "LocalStorage"],
    status: "In Progress",
    href: "https://github.com/NiallKahlout",
  },
  {
    title: "Personal Website & Blog",
    description:
      "This site — a statically generated blog built with Next.js App Router, Tailwind CSS, and Markdown content. Deployed on Vercel with custom security headers, sitemap, RSS feed, and a light/dark theme.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    status: "Live",
    href: "https://github.com/NiallKahlout/niall-kahlouts-blog",
  },
  {
    title: "Cybersecurity Home Lab",
    description:
      "A continuously evolving virtualised home lab environment for security testing, malware analysis, and penetration testing. Includes network segmentation with VLANs, a SIEM stack, and isolated attack/defence VMs.",
    tags: ["Proxmox", "Kali Linux", "Security Onion", "pfSense", "Splunk"],
    status: "Ongoing",
  },
  {
    title: "T-Pot Honeypot Deployment",
    description:
      "Deployed a T-Pot multi-honeypot platform on DigitalOcean to passively collect and analyse real-world malicious traffic. Integrated with the Elastic Stack to visualise attack patterns, geolocate sources, and extract threat intelligence.",
    tags: ["T-Pot", "DigitalOcean", "Elasticsearch", "Kibana", "Threat Intel"],
    status: "Live",
  },
  {
    title: "Security Automation & Scripting",
    description:
      "A collection of scripts and tools for automating SOC tasks — log parsing, vulnerability scanning, alert triage, and incident response workflows. Designed to reduce manual toil and improve response efficiency.",
    tags: ["Python", "Bash", "PowerShell", "SOC Automation", "Log Analysis"],
    status: "Ongoing",
  },
];

const statusStyles: Record<Status, string> = {
  Live: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  "In Progress":
    "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
  Ongoing:
    "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
};

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Container>
        <Header />
        <section className="mb-24">
          <div className="mb-1 flex items-center gap-2 text-blog-accent text-sm font-heading font-medium tracking-wider uppercase">
            <span aria-hidden className="select-none">▸</span>
            <span>niallkahlout.me</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight font-heading heading-gradient mb-4">
            Projects
          </h1>
          <p className="text-blog-muted text-base md:text-lg max-w-xl">
            Things I&apos;ve built, deployed, or am actively working on — spanning
            security tooling, infrastructure, and web development.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group relative flex flex-col rounded-xl border border-blog-card-border bg-blog-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h2 className="text-lg font-bold font-heading text-blog-fg leading-snug">
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blog-accent transition-colors"
                      >
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h2>
                  <span
                    className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusStyles[project.status]}`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="mb-5 text-sm leading-relaxed text-blog-muted flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-blog-border px-2 py-0.5 text-xs text-blog-muted font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-blog-accent hover:text-blog-accent-hover transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    View on GitHub
                    <ExternalLinkIcon />
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
