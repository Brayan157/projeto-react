import { useEffect, useState } from "react";
import styles from './Journey.module.css';
import JourneyDesktopEffect from "./JourneyDesktopEffect";
import JourneyMobileEffect from "./JourneyMobileEffect";
import JorneuMobileEffect from "./JourneyMobileEffect";

export default function Journey() {
    const [mobile, setMobile] = useState(window.innerWidth <= 1300);
    useEffect(() => {
        const resize = () => {
            setMobile(window.innerWidth <= 1300);
        };
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);
    return (
    <>
        <section className={styles.journey}>
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Sua jornada com a <span>HØST</span></h2>
                <p>Não importa em qual fase seu negócio está, a HØST cuida de cada etapa da sua operação para entregar tranquilidade, eficiência e resultados.</p>
            </div>
            {mobile ? (
                <JourneyMobileEffect/>
            ) : (
                <JourneyDesktopEffect />
            )}
        </div>
        </section>

    </>
    )}