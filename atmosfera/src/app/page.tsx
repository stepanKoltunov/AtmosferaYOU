import HeroSection from "@/components/HeroSection/HeroSection";
import QuoteSection from "@/shared/QuoteSection/QuoteSection";
import VideoSection from "@/components/VideoSection/VideoSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import TelegramSection from "@/components/TelegramSection/TelegramSection";

export default function MainPage() {
  return (
    <>
        <HeroSection />
        <QuoteSection quote="Здоровый ресурс – основа для Вашей активной жизни, профессионального роста, успешных проектов и достижений." />
        <VideoSection />
        <ServicesSection />
        <TelegramSection />
    </>
  );
}
