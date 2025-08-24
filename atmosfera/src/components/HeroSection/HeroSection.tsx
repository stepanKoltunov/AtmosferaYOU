import { Playfair_Display, Inter, Marck_Script } from 'next/font/google';
import styles from './HeroSection.module.css';
import Link from "next/link";

const playfair = Playfair_Display({
    subsets: ['cyrillic', 'latin'],
    variable: '--font-playfair',
    display: 'swap',
});

const greatVibes = Marck_Script({
    subsets: ['latin'],
    variable: '--font-vibes',
    weight: "400"
});

export default function HeroSection() {
    return (
        <section className={`${styles.hero} ${playfair.variable}`}>
            <div className={styles.container}>
                <div className={styles.content}>

                    <div className={styles.expertBadge}>
                        <span className={styles.expertText}>ЭКСПЕРТ – ПРАКТИК</span>
                    </div>

                    <h1 className={styles.name}>Юлия Муратшина</h1>

                    <div className={styles.imageContainer}>
                        <div className={styles.placeholderImage}></div>
                    </div>

                </div>

                <div className={styles.services}>

                    <h3 className={`${styles.servicesTitle} ${greatVibes.className}`}>“Моя сильная сторона — это эмпатия. Человеку в поиске решений и
                        для поддержки нужен человек.
                        Все наши встречи пройдут в атмосфере позитива и укрепления мотивации.“
                    </h3>

                    <h2 className={styles.servicesTitle}>Поддержка оставаться в ЗДОРОВОМ РЕСУРСЕ:</h2>

                    <ul className={styles.servicesList}>
                        <li className={styles.serviceItem}>коучинг</li>
                        <li className={styles.serviceItem}>консалтинг</li>
                        <li className={styles.serviceItem}>арт-терапия</li>
                    </ul>

                    <div className={styles.buttons}>
                        <a href="https://t.me/AtmosferaYouBot" className={styles.primaryButton}>Записаться на
                            консультацию</a>
                        <Link href="/about" className={styles.secondaryButton}>Узнать подробнее</Link>
                    </div>

                </div>

            </div>
        </section>
    );
}