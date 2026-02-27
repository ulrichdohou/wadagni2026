import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { DuoSection } from "@/components/home/duo-section";
import { BeforeAfter } from "@/components/home/before-after";
import { ChatTeaser } from "@/components/home/chat-teaser";
import { VoterInfoSection } from "@/components/home/voter-info-section";
import { DepartmentExplorer } from "@/components/home/department-explorer";
import { MeetingsSection } from "@/components/home/meetings-section";
import { BlogSection } from "@/components/home/blog-section";
import { Testimonials } from "@/components/home/testimonials";
import { FinalCTA } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <DuoSection />
        <BeforeAfter />
        <ChatTeaser />
        <VoterInfoSection />
        <DepartmentExplorer />
        <MeetingsSection />
        <BlogSection />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
