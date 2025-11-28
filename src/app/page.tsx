import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
    const workshops = [
        {
            title: "Bullying",
            subtitle: "cum iti ajuti copilul cand este tinta sau aggressor",
            date: "8 decembrie",
        },
        {
            title: "Stres",
            subtitle: "cum il intelegi si cum il reduci",
            date: "8 ianuarie",
        },
        {
            title: "Limite sanatoase",
            subtitle: "cum sa spui „nu” fara vinovatie",
            date: "22 ianuarie",
        },
        {
            title: "Anxietatea la adult",
            subtitle: "ce o mentine si cum o gestionezi",
            date: "12 februarie",
        },
        {
            title: "Burnout & suprasolicitare",
            subtitle: "cum recuperezi energia",
            date: "26 februarie",
        },
        {
            title: "Relatii sanatoase",
            subtitle: "cum construiesti conexiuni stabile si respectuoase",
            date: "12 martie",
        },
        {
            title: "Autenticitate & stima de sine",
            subtitle: "cum iti consolidezi identitatea si valoarea personală",
            date: "2 aprilie",
        },
        {
            title: "Incredere in sine",
            subtitle: "cum iti intaresti vocea interioara si reduci autocritica",
            date: "23 aprilie",
        },
        {
            title: "Energia ta",
            subtitle: "cum te reincarci mental si emotional",
            date: "7 mai",
        },
        {
            title: "Emotii",
            subtitle: "cum le recunosti si cum le gestionezi fara sa le eviti",
            date: "21 mai",
        },
    ];

    return (
        <div className="page">
            {/* HERO */}
            <section className="hero">
                <div className="hero__content">
                    <p className="hero__eyebrow">
                        Consiliere in dezvoltare personala &amp; profesionala
                    </p>
                    <h1 className="hero__title">
                        Pasi mici.
                        <br />
                        Rezultate profunde.
                    </h1>
                    <p className="hero__subtitle">
                        Sunt Beatrice, consilier in dezvoltare personala si psiholog
                        clinician. Te ajut sa iti clarifici directia, sa iti regasesti
                        increderea si sa faci schimbari sustenabile in ritmul tau.
                    </p>
                    <div className="hero__actions">
                        <Link href="/contact" className="btn-primary">
                            Programeaza o discutie
                        </Link>
                        <Link href="/despre-mine" className="btn-secondary">
                            Afla mai multe despre mine
                        </Link>
                    </div>
                    <p className="hero__note">
                        Sesiuni online sau fata in fata, pentru profesionisti, lideri si
                        persoane aflate in tranzitii importante.
                    </p>
                </div>

                <div className="hero__photo" aria-hidden="false">
                    <Image
                        src="/beatrice.jpeg"
                        alt="Portret Beatrice, consilier in dezvoltare personala"
                        width={480}
                        height={640}
                        priority
                        className="hero__portrait"
                    />
                    <div className="hero__badge">
                        20+ ani experienta in dezvoltarea oamenilor
                    </div>
                </div>
            </section>

            {/* SECTIUNI INFORMATII */}
            <section className="home-grid">
                <article className="home-card">
                    <h2>Cui ma adresez</h2>
                    <p>
                        Lucrez cu manageri, lideri, specialisti si antreprenori care simt
                        ca, desi au ajuns departe, ceva nu mai functioneaza cum si-ar dori.
                    </p>
                    <ul>
                        <li>
                            Ai preluat un rol nou si iti doresti sa fii pregatit pentru el.
                        </li>
                        <li>
                            Conduci o echipa si vrei sa gasesti un stil de leadership mai
                            autentic si mai eficient.
                        </li>
                        <li>
                            Te simti epuizat, demotivat sau blocat intr-o decizie de cariera.
                        </li>
                    </ul>
                </article>

                <article className="home-card">
                    <h2>Cum te pot ajuta</h2>
                    <p>
                        Nu iti propun retete standard, ci un proces structurat de lucru:
                    </p>
                    <ul>
                        <li>
                            Clarificam ce iti doresti – personal, profesional sau in relatie
                            cu echipa ta.
                        </li>
                        <li>
                            Identificam ce te blocheaza si ce resurse ai deja la dispozitie.
                        </li>
                        <li>
                            Construim pasi concreti, usor de aplicat, pe care ii adaptam
                            pe parcurs.
                        </li>
                    </ul>
                    <p className="home-card__cta">
                        <Link href="/servicii" className="inline-link">
                            Vezi in detaliu serviciile si metodele mele →
                        </Link>
                    </p>
                </article>

                <article className="home-card home-card--accent">
                    <h2>Ce poti obtine</h2>
                    <ul>
                        <li>Mai multa claritate si incredere in deciziile tale.</li>
                        <li>
                            Abilitati concrete de leadership, comunicare si prioritizare.
                        </li>
                        <li>
                            O relatie mai buna cu timpul tau, cu munca si cu oamenii din jur.
                        </li>
                    </ul>
                    <p className="home-card__cta">
                        <Link href="/referinte" className="inline-link">
                            Citeste referinte si exemple de proiecte →
                        </Link>
                    </p>
                </article>
            </section>

            {/* EVENIMENTE – 100 de minute pentru tine */}
            <section className="events" id="evenimente">
                <div className="events__inner">
                    <div className="events__intro">
                        <p className="events__eyebrow">Evenimente • Ateliere online</p>
                        <h2 className="events__title">100 de minute pentru tine</h2>
                        <p className="events__lead">
                            Seria celor 10 ateliere de psihologie aplicata – un program
                            online in care adultii invata sa se inteleaga mai bine, sa
                            gestioneze relatiile si emotiile dificile si sa faca schimbari
                            reale in viata lor.
                        </p>
                        <p className="events__text">
                            Este un program hibrid – intre psihoeducatie, consiliere si
                            practici terapeutice – cu scopul de a crea constientizare,
                            vindecare si directie. Ne vedem <strong>joia seara,
                            18:00 – 19:40</strong>, online.
                        </p>
                        <p className="events__text events__text--small">
                            Fiecare atelier este independent – poti alege doar temele
                            relevante pentru tine sau poti parcurge intregul program.
                        </p>

                        <div className="events__box">
                            <p className="events__box-title">
                                Cum este structurat fiecare atelier
                            </p>
                            <ul>
                                <li>15 min – introducerea temei si clarificari</li>
                                <li>40 min – concepte psihologice explicate simplu</li>
                                <li>30 min – exercitii practice si aplicatii</li>
                                <li>15 min – intrebari si concluzii</li>
                            </ul>
                        </div>

                        <div className="events__audience">
                            <p className="events__audience-title">
                                Pentru cine este programul?
                            </p>
                            <ul>
                                <li>parinti care vor sa inteleaga mai bine emotiile si comportamentele copiilor</li>
                                <li>adulti care se confrunta cu stres, anxietate sau suprasolicitare</li>
                                <li>persoane cu dificultati relationale sau in luarea deciziilor</li>
                                <li>cei care isi doresc mai multa claritate si autonomie personala</li>
                                <li>oricine cauta intelegere, suport si directie intr-un spatiu sigur</li>
                            </ul>
                        </div>

                        <div className="events__cta">
                            <a
                                href="https://forms.gle/Nmjbn9a1hGTNUnVN9"
                                // TODO: daca se schimba formularul, inlocuieste linkul de mai sus
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                            >
                                Inscrie-te la ateliere
                            </a>

                            <p className="events__cta-note">
                                Dupa completarea formularului vei primi pe email detaliile de
                                participare si link-ul de conectare.
                            </p>
                        </div>
                    </div>

                    <div className="events__list">
                        <h3 className="events__list-title">
                            Temele celor 10 ateliere
                        </h3>
                        <p className="events__list-subtitle">
                            Poti alege un singur atelier sau poti parcurge intregul program.
                        </p>
                        <div className="events__items">
                            {workshops.map((w, index) => (
                                <div key={w.title} className="events__item">
                                    <div className="events__item-index">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>
                                    <div className="events__item-body">
                                        <p className="events__item-title">{w.title}</p>
                                        <p className="events__item-subtitle">{w.subtitle}</p>
                                    </div>
                                    <div className="events__item-date">
                                        {w.date}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="events__footnote">
                            Toate atelierele au loc online, in grupuri mici, pentru a pastra
                            spatiul de lucru sigur si interactiv.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
