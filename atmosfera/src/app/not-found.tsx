'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gradient-to-br from-lime-50 to-emerald-100 flex items-center justify-center px-4">
            <div className="max-w-lg w-full text-center">
                {/*<div className="inset-0 flex items-center justify-center rounded-b-full bg-white">*/}
                {/*    <Image src={'/avocado.jpg'} alt={'картинка 404 ошибки'} width={250} height={250} />*/}
                {/*</div>*/}

                {/* Текст */}
                <h1 className="text-8xl font-bold text-lime-700 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-lime-800 mb-2">Ой! Страница не найдена</h2>
                <p className="text-lime-700 mb-8">
                    Возможно, эта страница была перемещена или удалена.
                </p>

                {/* Кнопки действий */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href=""
                        className="px-6 py-3 bg-lime-500 text-white font-medium rounded-lg shadow-md hover:bg-lime-600 transition-colors duration-300 transform hover:scale-105"
                    >
                        Вернуться на главную
                    </Link>
                    <button
                        onClick={() => router.back()}
                        className="px-6 py-3 border-2 border-lime-400 text-lime-600 font-medium rounded-lg hover:bg-lime-50 transition-colors duration-300"
                    >
                        Назад
                    </button>
                </div>

                {/* Дополнительная информация */}
                <div className="mt-10 text-lime-600 text-sm">
                    <p>Нужна помощь? Свяжитесь с нашей службой поддержки</p>
                    <a href="https://t.me/AtmosferaYouBot" className="text-lime-700 font-medium hover:underline">
                        Наш телеграмм
                    </a>
                </div>
            </div>
        </div>
    );
}