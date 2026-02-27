import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { BeforeAfter } from "@/components/home/before-after";
import { ChatTeaser } from "@/components/home/chat-teaser";
import { DepartmentExplorer } from "@/components/home/department-explorer";
import { BlogSection } from "@/components/home/blog-section";
import { Testimonials } from "@/components/home/testimonials";
import { FinalCTA } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BeforeAfter />
        <ChatTeaser />
        <DepartmentExplorer />
        <BlogSection />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
