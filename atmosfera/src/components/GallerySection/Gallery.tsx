'use client';

import {useState, useEffect, useRef} from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import styles from './Gallery.module.css';
import {GalleryProps} from "@/components/GallerySection/Gallery.type";

const Gallery = ({ items, autoPlay = true, autoPlayInterval = 10000 }: GalleryProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const interval = useRef<null |  NodeJS.Timeout>(null)
    // Автопрокрутка
    useEffect(() => {
        if (!autoPlay || items.length <= 1 || !interval) return;

        interval.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, autoPlayInterval);

        return () => {
            if (interval.current) {
                clearInterval(interval.current)
            }
        };
    }, [autoPlay, autoPlayInterval, items.length]);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);

    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    if (items.length === 0) {
        return (
            <section className={styles.gallerySection}>
                <div className={styles.container}>
                    <h2 className={styles.title}>Галерея</h2>
                    <div className={styles.gallery}>
                        <div className={styles.slidesContainer}>
                            <p className={styles.caption}>Нет изображений для отображения</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className={styles.gallerySection}>
            <div className={styles.container}>
                <h2 className={styles.title}>Галерея</h2>

                <div className={styles.gallery}>
                    <div
                        className={styles.slidesContainer}
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {items.map((item) => (
                            <div key={item.id} className={styles.slide}>
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    className={styles.image}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                />
                                {item.caption && (
                                    <div className={styles.caption}>
                                        {item.caption}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {items.length > 1 && (
                        <>
                            <div className={styles.navigation}>
                                <button
                                    onClick={goToPrevious}
                                    className={styles.navButton}
                                    aria-label="Предыдущее изображение"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={goToNext}
                                    className={styles.navButton}
                                    aria-label="Следующее изображение"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>

                            <div className={styles.indicators}>
                                {items.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`${styles.indicator} ${
                                            index === currentIndex ? styles.indicatorActive : ''
                                        }`}
                                        aria-label={`Перейти к изображению ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Gallery;