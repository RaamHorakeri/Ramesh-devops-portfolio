export default function Home() {
  return (
    <main className="min-h-screen p-10 bg-black text-white">
      <h1 className="text-5xl font-bold">
        Ramesh DevOps Portfolio
      </h1>

      <p className="mt-5 text-xl">
        DevOps Engineer | Docker | Kubernetes | Jenkins
      </p>

      <div className="mt-10">
        <h2 className="text-3xl font-semibold">
          Skills
        </h2>

        <ul className="list-disc pl-5 mt-4">
          <li>Docker</li>
          <li>Kubernetes</li>
          <li>Jenkins</li>
          <li>Helm</li>
          <li>ArgoCD</li>
          <li>Grafana</li>
          <li>Loki</li>
          <li>Linux</li>
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="text-3xl font-semibold">
          Projects
        </h2>

        <ul className="list-disc pl-5 mt-4">
          <li>CI/CD Automation Pipeline</li>
          <li>Kubernetes GitOps Deployment</li>
          <li>Docker Cleanup Automation</li>
          <li>Grafana Monitoring Stack</li>
        </ul>
      </div>
    </main>
  )
}