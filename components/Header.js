'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
        root.style.setProperty('--background', '#ffffff');
      root.style.setProperty('--foreground', '#171717');
      
    } else {
      root.style.setProperty('--background', '#0a0a0a');
      root.style.setProperty('--foreground', '#ededed');
    }
  }, [darkMode]);
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <nav className="flex gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`hover:underline transition ${
              router.pathname === link.path ? 'text-yellow-400 font-semibold' : ''
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-gray-600 hover:bg-gray-500 px-4 py-1 rounded"
      >
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
    </header>
  );
}
