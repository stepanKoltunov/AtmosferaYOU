import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Header/>
        <main className="flex-grow pt-16">
            {children}
        </main>
       <Footer/>
      </body>
    </html>
  );
}
