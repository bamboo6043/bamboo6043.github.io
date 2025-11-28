"use client";

import { useState } from "react";
import Link from "next/link";

export default function SiteHeader() {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen((prev) => !prev);
    const close = () => setOpen(false);

    return (
        <header className="site-header">
            <div className="container site-header__inner">
                <div className="logo">
                    <Link href="/" onClick={close}>
                        Smart Steps
                    </Link>
                </div>

                {/* Burger button – visible only on mobile via CSS */}
                <button
                    type="button"
                    className={`nav-toggle ${open ? "nav-toggle--open" : ""}`}
                    aria-label={open ? "Inchide meniul" : "Deschide meniul"}
                    aria-expanded={open}
                    onClick={toggle}
                >
                    <span className="sr-only">Meniu</span>
                    <span className="nav-toggle__icon" aria-hidden="true" />
                </button>

                <nav
                    className={`main-nav ${open ? "main-nav--open" : ""}`}
                    aria-label="Navigare principala"
                >
                    <Link href="/" onClick={close}>
                        Acasa
                    </Link>
                    <Link href="/despre-mine" onClick={close}>
                        Despre mine
                    </Link>
                    <Link href="/servicii" onClick={close}>
                        Servicii
                    </Link>
                    <Link href="/referinte" onClick={close}>
                        Referinte
                    </Link>
                    <Link href="/contact" onClick={close}>
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
}
