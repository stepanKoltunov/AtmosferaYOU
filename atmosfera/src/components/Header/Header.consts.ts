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
        name: 'Формат работы',
        path: '/format',
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