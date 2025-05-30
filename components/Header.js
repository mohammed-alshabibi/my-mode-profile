'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
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

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <nav className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
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
