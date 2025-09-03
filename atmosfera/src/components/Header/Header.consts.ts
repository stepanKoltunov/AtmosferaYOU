// Навигационные пункты с подменю
import {NavItem} from "@/components/Header/Header.type";

export const PAGES: NavItem[] = [
    {
        name: 'Главная',
        path: '/',
    },
    {
        name: 'Обо мне',
        path: '/about',
    },
    {
        name: 'Услуги',
        path: '/services',
    },
    {
        name: 'Отзывы',
        path: '/reviews',
    },
    {
        name: 'Контакты',
        path: '/contact',
    },
    {
        name: 'Партнеры',
        path: '/partners',
    },
];