'use client';

import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { Inter, Playfair_Display } from 'next/font/google';
import styles from './VideoSection.module.css';

// Настройка шрифтов через next/font/google
const inter = Inter({
    subsets: ['cyrillic', 'latin'],
    variable: '--font-inter',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['cyrillic', 'latin'],
    variable: '--font-playfair',
    display: 'swap',
});

export default function VideoSection() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset'; // Восстанавливаем скролл
    };

    return (
        <>
            <section className={`${styles.videoSection} ${inter.variable} ${playfair.variable}`}>
                <div className={styles.fullWidthContainer}>
                    <div
                        className={styles.videoPreview}
                        onClick={openModal}
                    >
                        <div className={styles.thumbnail}>
                            <div className={styles.placeholderImage}></div>

                            <div className={styles.contentOverlay}>
                                <h2 className={styles.title}>Посмотрите нашу презентацию</h2>
                                <p className={styles.description}>
                                    Узнайте больше о нашем подходе к поддержанию здорового ресурса
                                </p>
                            </div>

                            <div className={styles.playButton}>
                                <Play size={64} strokeWidth={1.5} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={closeModal}>
                            <X size={28} />
                        </button>

                        <div className={styles.videoContainer}>
                            <iframe width="720" height="405"
                                    src="https://rutube.ru/play/embed/6a4e4b9b2e8104f830def1b4577045d9/?skinColor=3949ab"
                                    ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}