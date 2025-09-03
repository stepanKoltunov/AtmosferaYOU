export interface GalleryItem {
    id: number;
    src: string;
    alt: string;
    caption?: string;
}

export interface GalleryProps {
    items: GalleryItem[];
    autoPlay?: boolean;
    autoPlayInterval?: number;
}