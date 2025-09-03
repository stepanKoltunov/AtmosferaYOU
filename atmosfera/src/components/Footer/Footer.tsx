import styles from "./Footer.module.css";
import buttonStyles from "../../styles/ButtonDefault.module.css";
import { CircleCheckBig } from 'lucide-react';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.contactInfo}>
                        <h3 className={styles.heading}>Контактная информация</h3>
                        <p className={styles.text}>
                            <span className={styles.strong}>Телефон:</span>{" "}
                            <a className={styles.link} href={'tel:+79112405008'}>
                                +7(911)240-5008
                            </a>
                        </p>
                        <p className={styles.text}>
                            <span className={styles.strong}>Юлия Муратшина</span>
                            <br />
                            <span className={styles.text}>
                                Поддержка оставаться в ЗДОРОВОМ РЕСУРСЕ: коучинг, консалтинг, арт-терапия
                            </span>
                        </p>
                    </div>

                    <div className={styles.footerContainer}>
                        <h3 className={styles.heading}>Свяжитесь со мной</h3>
                        <div className={styles.socialContainer}>
                            <a
                                href="https://t.me/ullla29"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="Telegram"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className={styles.socialIcon}
                                >
                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.14.141-.259.259-.374.261l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.136-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                                </svg>
                            </a>
                            <a
                                href="https://wa.me/79112405008"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="WhatsApp"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className={styles.socialIcon}
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className={styles.footerContainer}>
                        <h3 className={styles.heading}>Пройти тест</h3>
                        <a
                            href="https://t.me/AtmosferaYouBot"
                            className={buttonStyles.buttonDefault}
                        >
                            <span>Начать тестирование</span>
                            <CircleCheckBig />
                        </a>
                    </div>
                </div>

                <div className={styles.divider}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} Все права защищены.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;