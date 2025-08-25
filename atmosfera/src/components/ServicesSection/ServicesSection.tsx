import {
    RefreshCw,
    Clock,
    Activity,
    Sun,
    Palette,
    Building,
    Users,
    Heart,
} from 'lucide-react';
import { Inter, Playfair_Display } from 'next/font/google';
import styles from './ServicesSection.module.css';

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

const services = [
    {
        icon: <RefreshCw size={32} />,
        title: "поддержка изменений в жизни"
    },
    {
        icon: <Clock size={32} />,
        title: "изменение режима питания, достижение баланса работы, отдыха и сна"
    },
    {
        icon: <Activity size={32} />,
        title: "поддержка здоровья при высоких рабочих нагрузках, повышение продуктивности"
    },
    {
        icon: <Sun size={32} />,
        title: "выход из ситуаций выгорания"
    },
    {
        icon: <Palette size={32} />,
        title: "управление стрессом, арт-терапия"
    },
    {
        icon: <Building size={32} />,
        title: "производственный консалтинг- организационные изменения"
    },
    {
        icon: <Users size={32} />,
        title: "организация и мотивация эффективных команд"
    },
    {
        icon: <Heart size={32} />,
        title: "взаимоотношения и конфликты: личные и в команде"
    }
];

export default function ServicesSection() {

    return (
        <section className={`${styles.servicesSection} ${inter.variable} ${playfair.variable}`}>
            <div className={styles.container}>
                <h2 className={styles.title}>Основные направления моих услуг:</h2>

                <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.serviceCard}>
                            <div className={styles.serviceIcon}>
                                {service.icon}
                            </div>
                            <p className={styles.serviceText}>{service.title}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.personalApproach}>
                    <h3 className={styles.approachTitle}>
                        В центре наших встреч и консультаций будут –
                    </h3>
                    <p className={styles.approachText}>
                        персональный подход и совместный поиск вариантов изменений подходящих ИМЕННО Вам
                    </p>
                </div>
            </div>
        </section>
    );
}