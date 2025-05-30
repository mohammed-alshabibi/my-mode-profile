export default function About() {
  return (
    <main className="min-h-screen px-6 py-20 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-6">About Me</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          I am <span className="font-semibold dark:text-white">Mohammed Alshabibi</span>, a software developer
          who turns ideas into clean, functional, and user-focused experiences.
        </p>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow p-6 text-left space-y-6">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            With a passion for crafting modern applications, I enjoy building intuitive interfaces using frameworks
            like <strong>Flutter</strong>, <strong>Tailwind CSS</strong>, <strong>Firebase</strong>, and <strong>Next.js</strong>.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I have a strong foundation in computer science and real-world experience developing software thats both
            scalable and maintainable. Whether I am coding front-end UI or building backend logic, I focus on clarity,
            efficiency, and reusability.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Outside of tech, I love exploring new tools, contributing to open source on GitHub, and constantly growing
            as a problem-solver. I am always eager to take on new challenges and stay up to date with the latest in
            development trends.
          </p>
        </div>
      </div>
    </main>
  );
}
