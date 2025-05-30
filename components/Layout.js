import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
      <Header />
      <main className="min-h-screen p-4">{children}</main>
      <Footer />
    </div>
  );
}
