# Ramesh DevOps Portfolio Website

export default function Home() {
  const skills = {
    Cloud: ["AWS", "Azure", "DigitalOcean"],
    DevOps: ["Docker", "Kubernetes", "Helm", "ArgoCD", "Terraform", "Ansible"],
    CICD: ["Jenkins", "GitLab CI/CD", "GitHub Actions"],
    Monitoring: ["Prometheus", "Grafana", "Loki", "Promtail"],
    Tools: ["GitHub", "GitLab", "Bitbucket", "Nginx", "Linux", "Shell Scripting"],
  }

  const projects = [
    {
      title: "Kubernetes Managed Metrics System",
      description:
        "Built complete CI/CD pipeline using Jenkins, Docker, Kubernetes, Helm and AWS EKS with rolling updates and auto scaling.",
    },
    {
      title: "Cloud Native DevOps Pipeline",
      description:
        "Implemented secure CI/CD with SonarQube, Trivy, Docker, Kubernetes, Prometheus and Grafana monitoring.",
    },
    {
      title: "Docker Cleanup Automation",
      description:
        "Automated cleanup of unused Docker images, containers, networks and cache using Jenkins pipelines.",
    },
    {
      title: "GitOps Deployment Automation",
      description:
        "Managed Kubernetes deployments using ArgoCD, Helm and GitOps workflows for DEV, QA and PROD environments.",
    },
  ]

  return (
    <main className="bg-black text-white min-h-screen">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-green-400 text-lg font-semibold">
              DevOps Engineer / Site Reliability Engineer
            </p>

            <h1 className="text-5xl md:text-7xl font-bold mt-4 leading-tight">
              Ramesh
              <span className="text-green-400"> Horakeri</span>
            </h1>

            <p className="mt-8 text-gray-300 text-lg leading-8">
              DevOps Engineer with 5+ years of experience in CI/CD automation,
              Kubernetes, Docker, Cloud Infrastructure and Monitoring Solutions.
              Specialized in building scalable cloud-native infrastructure and
              deployment automation.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://github.com/RaamHorakeri"
                target="_blank"
                className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-xl font-semibold text-black"
              >
                GitHub
              </a>

              <a
                href="mailto:raamuhbaliganur@gmail.com"
                className="border border-green-500 px-6 py-3 rounded-xl hover:bg-green-500 hover:text-black transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 shadow-2xl">
            <h2 className="text-3xl font-bold mb-8 text-green-400">
              Quick Overview
            </h2>

            <div className="space-y-5 text-lg">
              <div className="flex justify-between border-b border-zinc-700 pb-3">
                <span className="text-gray-400">Experience</span>
                <span>5+ Years</span>
              </div>

              <div className="flex justify-between border-b border-zinc-700 pb-3">
                <span className="text-gray-400">Specialization</span>
                <span>DevOps & SRE</span>
              </div>

              <div className="flex justify-between border-b border-zinc-700 pb-3">
                <span className="text-gray-400">Cloud Platforms</span>
                <span>AWS • Azure • DO</span>
              </div>

              <div className="flex justify-between border-b border-zinc-700 pb-3">
                <span className="text-gray-400">Containers</span>
                <span>Docker • Kubernetes</span>
              </div>

              <div className="flex justify-between border-b border-zinc-700 pb-3">
                <span className="text-gray-400">CI/CD</span>
                <span>Jenkins • ArgoCD</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">OS</span>
                <span>Linux</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-12">
          Technical <span className="text-green-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-semibold mb-6 text-green-400">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((item) => (
                  <span
                    key={item}
                    className="bg-zinc-800 px-4 py-2 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-12">
          Professional <span className="text-green-400">Experience</span>
        </h2>

        <div className="space-y-8">
          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-2xl font-bold">
                  Enfec Solution Pvt. Ltd.
                </h3>
                <p className="text-green-400 mt-2">DevOps Engineer</p>
              </div>

              <span className="mt-4 md:mt-0 text-gray-400">
                Oct 2024 - Present
              </span>
            </div>

            <ul className="mt-6 space-y-3 text-gray-300 leading-7 list-disc pl-5">
              <li>Designed CI/CD pipelines using Jenkins and ArgoCD.</li>
              <li>Managed Kubernetes clusters with Helm and Rancher.</li>
              <li>Implemented monitoring using Grafana, Loki and Prometheus.</li>
              <li>Configured Nginx reverse proxy and SSL automation.</li>
              <li>Automated server operations using shell scripting.</li>
            </ul>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-2xl font-bold">
                  Glintsoft Infotech
                </h3>
                <p className="text-green-400 mt-2">DevOps Engineer</p>
              </div>

              <span className="mt-4 md:mt-0 text-gray-400">
                Feb 2020 - Jun 2024
              </span>
            </div>

            <ul className="mt-6 space-y-3 text-gray-300 leading-7 list-disc pl-5">
              <li>Built CI/CD pipelines using Jenkins and GitLab CI/CD.</li>
              <li>Migrated applications to Docker-based microservices.</li>
              <li>Managed Kubernetes workloads and namespaces.</li>
              <li>Implemented infrastructure provisioning using Terraform.</li>
              <li>Automated operations using Bash scripting.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-12">
          Featured <span className="text-green-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-green-500 transition"
            >
              <h3 className="text-2xl font-bold mb-4 text-green-400">
                {project.title}
              </h3>

              <p className="text-gray-300 leading-8">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-green-500 rounded-3xl p-10 text-black text-center">
          <h2 className="text-4xl font-bold">
            Let's Build Reliable Infrastructure
          </h2>

          <p className="mt-6 text-lg">
            Experienced in cloud infrastructure, Kubernetes, CI/CD automation
            and monitoring solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">
            <a
              href="mailto:raamuhbaliganur@gmail.com"
              className="bg-black text-white px-6 py-3 rounded-xl font-semibold"
            >
              Email Me
            </a>

            <a
              href="https://github.com/RaamHorakeri"
              target="_blank"
              className="border border-black px-6 py-3 rounded-xl font-semibold"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}