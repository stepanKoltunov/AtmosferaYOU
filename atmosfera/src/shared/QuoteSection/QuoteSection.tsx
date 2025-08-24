import { Playfair_Display } from 'next/font/google';
import styles from './QuoteSection.module.css';

const playfair = Playfair_Display({
    subsets: ['cyrillic', 'latin'],
    variable: '--font-playfair',
    display: 'swap',
});

interface IQuoteSection {
    quote: string;
}

export default function QuoteSection({quote}: IQuoteSection) {
    return (
        <section className={`${styles.quoteSection} ${playfair.variable}`}>
            <div className={styles.container}>
                <div className={styles.quoteContent}>
                    <div className={styles.quoteIcon}>“</div>
                    <blockquote className={styles.quote}>
                        {quote}
                    </blockquote>
                    <div className={styles.quoteDecoration}>
                        <div className={styles.decorationLine}></div>
                        <div className={styles.decorationDot}></div>
                        <div className={styles.decorationLine}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}