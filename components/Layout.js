import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen p-4">{children}</main>
      <Footer />
    </>
  );
}
