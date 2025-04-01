import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "VidPress - Offline Video Compression",
  description: "Fast, offline video compression powered by FFmpeg",
  openGraph: {
    type: "website",
    url: "https://vidpress.achuth.dev",
    title: "VidPress - Offline Video Compression",
    description: "Fast, offline video compression powered by FFmpeg. Try it free.",
    images: [
      {
        url: "https://vidpress.achuth.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VidPress - Offline Video Compression App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://vidpress.io",
    title: "VidPress - Offline Video Compression",
    description: "Fast, offline video compression powered by FFmpeg. Try it free.",
    images: [
      "https://vidpress.io/og-image.jpg"
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <SponsorsSection /> */}
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      {/* <TeamSection />
      <CommunitySection /> */}
      <PricingSection />
      {/* <ContactSection /> */}
      <FAQSection />
      <FooterSection />
    </>
  );
}
