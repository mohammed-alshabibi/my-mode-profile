// components/GitHubProjects.jsx
import { useEffect, useState } from 'react';

export default function GitHubProjects({ filterStarredOnly = false }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch('https://api.github.com/users/mohammed-alshabibi/repos?per_page=100');
        const data = await res.json();
        const filtered = filterStarredOnly
          ? data.filter((repo) => repo.stargazers_count > 0)
          : data;
        setRepos(filtered);
      } catch (error) {
        console.error('Failed to fetch repos:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, [filterStarredOnly]);

  return (
    <div className="mt-14 text-left">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        {filterStarredOnly ? 'GitHub Projects' : 'All GitHub Projects'}
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading repositories...</p>
      ) : (
        <div className="grid sm:grid-cols-2 gap-6">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="p-4 bg-gray-100 dark:bg-gray-800 rounded shadow transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold mb-1 text-black dark:text-white">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {repo.description || 'No description provided.'}
              </p>
              <div className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count} | 📝 {repo.language}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
