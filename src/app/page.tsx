"use client";
import { FrameworksSection } from "@/components/sections/frameworks/frameworks.component";
import { WorkExperienceSection } from "@/components/sections/work-experience/work-experience.component";
import { GraduationSection } from "@/components/sections/graduation/graduation.component";
import { LenguagesSection } from "@/components/sections/lenguages/lenguages.component";
import { FooterSection } from "@/components/sections/footer/footer.component";
import { PresentationSection } from "@/components/sections/presentation/presentation.component";

export default function Home() {
  return (
    <main>
      <PresentationSection />
      <FrameworksSection />
      <WorkExperienceSection />
      <GraduationSection />
      <LenguagesSection />
      <FooterSection />
    </main>
  );
}
