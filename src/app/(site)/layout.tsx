import { Navbar } from "@/components/piako/navbar";
import { Footer } from "@/components/piako/footer";
import { PageTransition } from "@/components/piako/page-transition";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-20">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}

