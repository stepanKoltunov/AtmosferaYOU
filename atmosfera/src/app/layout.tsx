import "@/styles/globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {Metadata} from "next";
import {Montserrat} from 'next/font/google'
//todo
export const metadata: Metadata = {
    icons: {
        icon: './icon.svg', // Путь от корня (public/)
        shortcut: './icon.svg',
        apple: './icon.svg', // Для Apple устройств
    },
    title: 'Атмосфера YOU'
}

const montserrat = Montserrat({
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
    variable: '--font-playfair',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <Header/>
        <main className="flex-grow pt-16">
            {children}
        </main>
       <Footer/>
      </body>
    </html>
  );
}
