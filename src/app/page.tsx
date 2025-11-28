import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
    return (
        <div className="page">
            {/* HERO */}
            <section className="hero">
                <div className="hero__content">
                    <p className="hero__eyebrow">
                        Consiliere în dezvoltare personală &amp; profesională
                    </p>
                    <h1 className="hero__title">
                        Pași mici.
                        <br />
                        Rezultate profunde.
                    </h1>
                    <p className="hero__subtitle">
                        Sunt Beatrice, consilier în dezvoltare personală și psiholog
                        clinician. Te ajut să îți clarifici direcția, să îți regăsești
                        încrederea și să faci schimbări sustenabile în ritmul tău.
                    </p>
                    <div className="hero__actions">
                        <Link href="/contact" className="btn-primary">
                            Programează o discuție
                        </Link>
                        <Link href="/despre-mine" className="btn-secondary">
                            Află mai multe despre mine
                        </Link>
                    </div>
                    <p className="hero__note">
                        Sesiuni online sau față în față, pentru profesioniști, lideri și
                        persoane aflate în tranziții importante.
                    </p>
                </div>

                <div className="hero__photo" aria-hidden="false">
                    <Image
                        src="/beatrice.jpeg"
                        alt="Portret Beatrice, consilier în dezvoltare personală"
                        width={480}
                        height={640}
                        priority
                        className="hero__portrait"
                    />
                    <div className="hero__badge">
                        20+ ani experiență în dezvoltarea oamenilor
                    </div>
                </div>
            </section>

            {/* SECTIUNI INFORMATII */}
            <section className="home-grid">
                <article className="home-card">
                    <h2>Cui mă adresez</h2>
                    <p>
                        Lucrez cu manageri, lideri, specialiști și antreprenori care simt
                        că, deși au ajuns departe, ceva nu mai funcționează cum și-ar dori.
                    </p>
                    <ul>
                        <li>
                            Ai preluat un rol nou și îți dorești să fii pregătit pentru el.
                        </li>
                        <li>
                            Conduci o echipă și vrei să găsești un stil de leadership mai
                            autentic și mai eficient.
                        </li>
                        <li>
                            Te simți epuizat, demotivat sau blocat într-o decizie de carieră.
                        </li>
                    </ul>
                </article>

                <article className="home-card">
                    <h2>Cum te pot ajuta</h2>
                    <p>
                        Nu îți propun rețete standard, ci un proces structurat de lucru:
                    </p>
                    <ul>
                        <li>
                            Clarificăm ce îți dorești – personal, profesional sau în relație
                            cu echipa ta.
                        </li>
                        <li>
                            Identificăm ce te blochează și ce resurse ai deja la dispoziție.
                        </li>
                        <li>
                            Construim pași concreți, ușor de aplicat, pe care îi adaptăm
                            pe parcurs.
                        </li>
                    </ul>
                    <p className="home-card__cta">
                        <Link href="/servicii" className="inline-link">
                            Vezi în detaliu serviciile și metodele mele →
                        </Link>
                    </p>
                </article>

                <article className="home-card home-card--accent">
                    <h2>Ce poți obține</h2>
                    <ul>
                        <li>Mai multă claritate și încredere în deciziile tale.</li>
                        <li>
                            Abilități concrete de leadership, comunicare și prioritizare.
                        </li>
                        <li>
                            O relație mai bună cu timpul tău, cu munca și cu oamenii din jur.
                        </li>
                    </ul>
                    <p className="home-card__cta">
                        <Link href="/referinte" className="inline-link">
                            Citește referințe și exemple de proiecte →
                        </Link>
                    </p>
                </article>
            </section>
        </div>
    );
}
