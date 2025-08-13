// Типы для структуры меню
export type SubMenuItem = {
    name: string;
    path: string;
};

export type NavItem = {
    name: string;
    path: string;
    subItems?: SubMenuItem[];
};