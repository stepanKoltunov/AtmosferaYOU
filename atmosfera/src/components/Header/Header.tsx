'use client';

import {MouseEventHandler, useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {PAGES} from "@/components/Header/Header.consts";
import Image from "next/image";

const Header = () => {
    const router = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Определение мобильности и активного пути
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 1050);
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
        <header className="fixed w-full bg-white shadow-md z-50">
            <div className="container mx-auto px-4 flex justify-between items-center h-16">
                {/* Логотип */}
                <Link href="/" className="flex items-center">
                    <Image
                        src={'/icon.png'}
                        alt={'Логотип atmosfera you'}
                        width={100}
                        height={100}
                    />
                </Link>

                {!isMobile && (
                    <nav className="hidden md:flex space-x-6">
                        {PAGES.map((item) => (
                            <div key={item.name} >
                                <Link
                                    href={item.path}
                                    className={`px-3 py-2 ${
                                        isActive(item.path)
                                            ? 'border-lime-200 text-lime-500 border-b-2 font-medium'
                                            : 'hover:border-lime-200 hover:border-b-2 hover:text-lime-500'
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            </div>
                        ))}
                    </nav>
                )}

                {isMobile && (
                    <button
                        onClick={toggleMenu}
                        className="z-50 flex flex-col justify-center items-center w-10 h-10"
                        aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
                    >
                        <span
                            className={`block w-6 h-0.5 bg-black transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'}`}/>
                        <span
                            className={`block w-6 h-0.5 bg-black my-1 transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}/>
                        <span
                            className={`block w-6 h-0.5 bg-black transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'}`}/>
                    </button>
                )}
            </div>

            {isMobile && (
                <div
                    ref={menuRef}
                    className={`fixed inset-0 bg-white z-40 flex flex-col  pt-20 transition-all duration-300 ease-in-out ${
                        isMenuOpen
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 -translate-y-full pointer-events-none'
                    }`}
                >
                    <nav className="flex-1 px-8 py-2 w-full text-center">
                        {PAGES.map((item) => (
                            <div key={item.name} className="mb-1">
                                {(
                                    <Link
                                        href={item.path}
                                        className={`block px-2 py-5 rounded-md text-xl font-medium ${
                                            isActive(item.path)
                                                ? 'bg-green-100 text-lime-500'
                                                : ''
                                        }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;