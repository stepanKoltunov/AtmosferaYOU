"use client"

import {
    useState,
    useEffect,
    useRef,
    MouseEvent as ReactMouseEvent,
    TouchEvent
} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {NavItem} from "./Header.type";

const Header = () => {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    // Навигационные пункты с подменю
    const navItems: NavItem[] = [
        {
            name: 'Главная',
            path: '/',
        },
        {
            name: 'О нас',
            path: '/about',
            subItems: [
                { name: 'Команда', path: '/about/team' },
                { name: 'История', path: '/about/history' },
            ]
        },
        {
            name: 'Услуги',
            path: '/services',
            subItems: [
                { name: 'Веб-разработка', path: '/services/web' },
                { name: 'Мобильные приложения', path: '/services/mobile' },
            ]
        },
        {
            name: 'Проекты',
            path: '/projects',
        },
        {
            name: 'Контакты',
            path: '/contact',
        },
    ];

    // Определение мобильности и активного пути
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 700);
            if (window.innerWidth >= 700) {
                setIsMenuOpen(false);
                setOpenSubMenu(null);
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

    // Закрытие меню при клике вне области
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
                setOpenSubMenu(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, []);

    // Оптимизированный обработчик движения мыши для закрытия меню
    useEffect(() => {
        if (!isMenuOpen) return;

        const throttle = (func: Function, limit: number) => {
            let lastFunc: ReturnType<typeof setTimeout>;
            let lastRan: number;

            return function(this: any, ...args: any[]) {
                if (!lastRan) {
                    func.apply(this, args);
                    lastRan = Date.now();
                } else {
                    clearTimeout(lastFunc);
                    lastFunc = setTimeout(() => {
                        if (Date.now() - lastRan >= limit) {
                            func.apply(this, args);
                            lastRan = Date.now();
                        }
                    }, limit - (Date.now() - lastRan));
                }
            };
        };

        const handleMove = (event: MouseEvent | TouchEvent) => {
            let clientX: number;

            if ('touches' in event) {
                clientX = event.touches[0].clientX;
            } else {
                clientX = event.clientX;
            }

            // +10px буфер для предотвращения случайных срабатываний
            if (clientX < -10 || clientX > 290) {
                setIsMenuOpen(false);
            }
        };

        const throttledHandleMove = throttle(handleMove, 100);
        const options: AddEventListenerOptions = { passive: true };

        document.addEventListener('mousemove', throttledHandleMove, options);
        document.addEventListener('touchmove', throttledHandleMove, options);

        return () => {
            document.removeEventListener('mousemove', throttledHandleMove, options);
            document.removeEventListener('touchmove', throttledHandleMove, options);
        };
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const toggleSubMenu = (index: number) => {
        setOpenSubMenu(openSubMenu === index ? null : index);
    };

    const isActive = (path: string) => router.pathname === path;

    return (
        <header className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
            {/* Логотип */}
            <Link href="/atmosfera/public" className="flex items-center">
    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
    <span className="ml-2 font-bold text-xl">Логотип</span>
        </Link>

    {/* Десктопное меню */}
    {!isMobile && (
        <nav className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
                    <div key={item.name} className="relative group">
                <Link
                    href={item.path}
                className={`px-3 py-2 rounded-md transition-colors ${
                    isActive(item.path)
                        ? 'bg-blue-100 text-blue-600 font-medium'
                        : 'hover:bg-gray-100'
                }`}
            >
            {item.name}
            </Link>

        {/* Выпадающее подменю */}
        {item.subItems && (
            <div className="absolute left-0 mt-1 w-48 bg-white shadow-lg rounded-md py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 -translate-y-2">
                {item.subItems.map(subItem => (
                        <Link
                            key={subItem.path}
                    href={subItem.path}
                    className={`block px-4 py-2 text-sm ${
                        isActive(subItem.path)
                            ? 'bg-blue-50 text-blue-600'
                            : 'hover:bg-gray-50'
                    }`}
                >
                {subItem.name}
                </Link>
        ))}
            </div>
        )}
        </div>
    ))}
        </nav>
    )}

    {/* Бургер-меню для мобильных */}
    {isMobile && (
        <button
            onClick={toggleMenu}
        className="z-50 flex flex-col justify-center items-center w-10 h-10"
        aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
        <span className={`block w-6 h-0.5 bg-black transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'}`} />
    <span className={`block w-6 h-0.5 bg-black my-1 transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
    <span className={`block w-6 h-0.5 bg-black transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'}`} />
    </button>
    )}
    </div>

    {/* Мобильное меню с анимацией */}
    {isMobile && (
        <div
            ref={menuRef}
        className={`fixed inset-0 bg-white z-40 flex flex-col pt-20 transition-all duration-300 ease-in-out ${
            isMenuOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
    >
        <nav className="flex-1 overflow-y-auto px-4 py-2">
            {navItems.map((item, index) => (
                    <div key={item.name} className="mb-1">
                {item.subItems ? (
                        <div>
                            <button
                                onClick={() => toggleSubMenu(index)}
        className={`w-full text-left px-4 py-3 rounded-md flex justify-between items-center ${
            isActive(item.path)
                ? 'bg-blue-100 text-blue-600 font-medium'
                : 'hover:bg-gray-100'
        }`}
    >
        <span>{item.name}</span>
        <span className={`transition-transform ${openSubMenu === index ? 'rotate-180' : ''}`}>
    ▼
                      </span>
                      </button>

                      <div
        className={`overflow-hidden transition-all duration-300 ${
            openSubMenu === index
                ? 'max-h-96 opacity-100'
                : 'max-h-0 opacity-0'
        }`}
    >
        {item.subItems.map(subItem => (
            <Link
                key={subItem.path}
            href={subItem.path}
            className={`block pl-8 pr-4 py-3 rounded-md my-1 ${
                isActive(subItem.path)
                    ? 'bg-blue-50 text-blue-600'
                    : 'hover:bg-gray-50'
            }`}
            onClick={() => {
            setIsMenuOpen(false);
            setOpenSubMenu(null);
        }}
        >
            {subItem.name}
            </Link>
        ))}
        </div>
        </div>
    ) : (
        <Link
            href={item.path}
        className={`block px-4 py-3 rounded-md ${
            isActive(item.path)
                ? 'bg-blue-100 text-blue-600 font-medium'
                : 'hover:bg-gray-100'
        }`}
        onClick={() => setIsMenuOpen(false)}
    >
        {item.name}
        </Link>
    )}
        </div>
    ))}
        </nav>

        <div className="p-4 border-t">
    <button
        onClick={() => setIsMenuOpen(false)}
        className="w-full py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
            >
            Закрыть меню
    </button>
    </div>
    </div>
    )}
    </header>
);
};

export default Header;