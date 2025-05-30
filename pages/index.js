import Image from 'next/image';
import GitHubProjects from '../components/GitHubProjects';
import {
  FaJs,
  FaDatabase,
  FaCss3Alt,
  FaMicrosoft,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { SiFlutter, SiFirebase } from 'react-icons/si';

export default function Home() {
  const skills = [
    { name: 'JavaScript', icon: <FaJs size={28} color="#f7df1e" /> },
    { name: 'C#', icon: <FaMicrosoft size={28} color="#512BD4" /> },
    { name: 'Flutter', icon: <SiFlutter size={28} color="#02569B" /> },
    { name: 'Tailwind CSS', icon: <FaCss3Alt size={28} color="#38bdf8" /> },
    { name: 'Firebase', icon: <SiFirebase size={28} color="#FFCA28" /> },
    { name: 'SQL Server', icon: <FaDatabase size={28} color="#e62c2c" /> },
  ];

  return (
    <section className="min-h-screen px-6 py-16 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/avatar.jpeg"
            alt="My Avatar"
            width={120}
            height={120}
            className="rounded-full object-cover transition-transform duration-300 hover:scale-110 hover:shadow-xl"
          />
        </div>

        {/* Hero */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-2">
          Hi, I’m Mohammed Alshabibi
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          A passionate developer building clean and modern web experiences.
        </p>

        {/* Skills */}
        <div className="mt-10 text-left">
          <h2 className="text-2xl font-semibold mb-4 text-center">Skills</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="text-center group">
                <div className="flex justify-center mb-1 transition-transform duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Preview */}
        <GitHubProjects filterStarredOnly={true} />

        {/* CTA */}
        <div className="mt-10">
          <a
            href="/projects"
            className="inline-block bg-gray-800 text-white dark:bg-white dark:text-black px-6 py-2 rounded hover:opacity-90 transition"
          >
            View All Projects →
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="mt-6 flex justify-center gap-6">
          <a
            href="https://github.com/mohammed-alshabibi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-black dark: hover:text-black transition-transform transform hover:scale-125"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/mohammed-alshabibi-839199320"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-white transition-transform transform hover:scale-125"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
