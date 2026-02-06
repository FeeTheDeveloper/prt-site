import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import PageTransition from "@/components/motion/PageTransition";

/** Shared layout for all site pages — wraps children with Header and Footer. */
export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </>
  );
}
