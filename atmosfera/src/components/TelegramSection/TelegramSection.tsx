'use client';

import { useState } from 'react';
import { MessageCircle, Brain, Heart, Star, Send } from 'lucide-react';
import { Inter } from 'next/font/google';
import styles from './TelegramSection.module.css';

const inter = Inter({
    subsets: ['cyrillic', 'latin'],
    variable: '--font-inter',
    display: 'swap',
});

const benefits = [
    {
        icon: <Brain size={24} />,
        text: "Быстрые психологические тесты для самопознания"
    },
    {
        icon: <Heart size={24} />,
        text: "Оценка ментального состояния от профессионального психолога"
    },
    {
        icon: <Star size={24} />,
        text: "Персональные рекомендации для улучшения самочувствия"
    }
];

export default function TelegramSection() {
    const [isHovered, setIsHovered] = useState(false);

    const telegramBotUrl = "https://t.me/AtmosferaYouBot";

    const handleTelegramClick = () => {
        window.open(telegramBotUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <section className={`${styles.telegramSection} ${inter.variable}`}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.textBlock}>
                        <h2 className={styles.title}>Для быстрого старта</h2>
                        <p className={styles.description}>
                            Перейдите в наш Telegram-бот и пройдите тестирование для оценки вашего состояния
                        </p>
                    </div>

                    <div
                        className={styles.telegramBlock}
                        onClick={handleTelegramClick}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className={`${styles.telegramIcon} ${isHovered ? styles.hovered : ''}`}>
                            <MessageCircle size={36} />
                            <Send size={16} className={styles.sendIcon} />
                        </div>
                        <span className={styles.telegramText}>Перейти в бота</span>
                    </div>
                </div>

                <div className={styles.benefits}>
                    {benefits.map((benefit, index) => (
                        <div key={index} className={styles.benefitItem}>
                            <div className={styles.benefitIcon}>
                                {benefit.icon}
                            </div>
                            <p className={styles.benefitText}>{benefit.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}