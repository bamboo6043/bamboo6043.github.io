import type { Metadata } from "next";
import Link from "next/link";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const headingFont = Playfair_Display({
    subsets: ["latin-ext"],
    weight: ["500", "600", "700"],
    variable: "--font-heading",
});

const bodyFont = Source_Sans_3({
    subsets: ["latin-ext"],
    weight: ["400", "500", "600"],
    variable: "--font-body",
});

export const metadata: Metadata = {
    title: "Smart Steps – Dezvoltare personală & profesională",
    description:
        "Consiliere în dezvoltare personală și profesională pentru lideri, manageri și profesioniști.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ro" className={`${headingFont.variable} ${bodyFont.variable}`}>
        <body>
        <header className="site-header">
            <div className="container site-header__inner">
                <div className="logo">
                    <Link href="/">Smart Steps</Link>
                </div>
                <nav className="main-nav" aria-label="Navigare principală">
                    <Link href="/">Acasă</Link>
                    <Link href="/despre-mine">Despre mine</Link>
                    <Link href="/servicii">Servicii</Link>
                    <Link href="/referinte">Referințe</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
            </div>
        </header>

        <main className="site-main">
            <div className="container">{children}</div>
        </main>

        <footer className="site-footer">
            <div className="container">
                <p>Smart Steps © 2008 – {new Date().getFullYear()}</p>
                <p>
                    <Link href="/termeni-si-conditii">Termeni și condiții</Link>
                </p>
            </div>
        </footer>
        </body>
        </html>
    );
}
