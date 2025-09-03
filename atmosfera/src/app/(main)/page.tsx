import HeroSection from "@/components/HeroSection/HeroSection";
import QuoteSection from "@/shared/QuoteSection/QuoteSection";
import VideoSection from "@/components/VideoSection/VideoSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import TelegramSection from "@/components/TelegramSection/TelegramSection";
import Gallery from "@/components/GallerySection/Gallery";

export default function MainPage() {
  return (
    <>
        <HeroSection />
        <QuoteSection quote="Здоровый ресурс – основа для Вашей активной жизни, профессионального роста, успешных проектов и достижений." />
        <VideoSection />
        <ServicesSection />
        <TelegramSection />
        <Gallery items={[
            {id: 0, src: '/bgFruitsGreen.png', alt: 'bgFruitsGreen'},
            {id: 1, src: '/heroSectionBg.jpg', alt: 'bgFruitsGreen'},
            {id: 2, src: '/bgFruitsGreen.png', alt: 'bgFruitsGreen'},
            {id: 3, src: '/heroSectionBg.jpg', alt: 'bgFruitsGreen'},
            {id: 4, src: '/bgFruitsGreen.png', alt: 'bgFruitsGreen'}
        ]}/>
    </>
  );
}
