'use client';

import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PAGES } from "@/components/Header/Header.consts";
import Image from "next/image";
import styles from './Header.module.css';

const Header = () => {
    const router = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Определение мобильности и активного пути
    useEffect(() => {
        const checkIfMobile = () => {
            if (window.innerWidth >= 1050) {
                setIsMenuOpen(false);
            }
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    // Блокировка прокрутки при открытом меню
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const toggleMenu: MouseEventHandler<HTMLButtonElement> = (event) => {
        event?.stopPropagation()
        setIsMenuOpen(prevState => !prevState);
    }

    const isActive = (path: string) => router === path;

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* Логотип */}
                <Link href="/" className={styles.logo}>
                    <Image
                        src={'/icon.svg'}
                        alt={'Логотип atmosfera you'}
                        width={100}
                        height={100}
                    />
                </Link>

                <nav className={`${styles.nav} ${styles.desktopNav}`}>
                    {PAGES.map((item) => (
                        <Link
                            key={item.name}
                            href={item.path}
                            className={`${styles.navLink} ${
                                isActive(item.path)
                                    ? styles.navLinkActive
                                    : ''
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <button
                    onClick={toggleMenu}
                    className={styles.menuButton}
                    aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
                >
                    <span className={`${styles.menuLine} ${isMenuOpen ? styles.menuLineRotateTop : ''}`}/>
                    <span className={`${styles.menuLine} ${styles.menuLineMiddle} ${isMenuOpen ? styles.menuLineHidden : ''}`}/>
                    <span className={`${styles.menuLine} ${isMenuOpen ? styles.menuLineRotateBottom : ''}`}/>
                </button>
            </div>

            <div
                ref={menuRef}
                className={`${styles.mobileMenu} ${
                    isMenuOpen ? styles.mobileMenuOpen : styles.mobileMenuClosed
                }`}
            >
                <nav className={styles.mobileNav}>
                    {PAGES.map((item) => (
                        <Link
                            href={item.path}
                            className={`${styles.mobileNavLink} ${
                                isActive(item.path)
                                    ? styles.mobileNavLinkActive
                                    : ''
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                            key={item.name}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;