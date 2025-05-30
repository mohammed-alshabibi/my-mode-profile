import GitHubProjects from '../components/GitHubProjects';

export default function Projects() {
  return (
    <main className="min-h-screen px-6 py-16 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
      <GitHubProjects />
    </main>
  );
}
