import styles from "./Footer.module.css";
import {
    FaInstagram,
    FaLinkedinIn,
    FaWhatsapp
} from "react-icons/fa";

import {
    HiOutlinePhone,
    HiOutlineEnvelope,
    HiOutlineMapPin
} from "react-icons/hi2";

export default function Footer() {
    return (
        <footer className={styles.footer}>

            <div className={styles.footerContainer}>

                {/* Marca */}
                <div className={styles.footerBrand}>
                    <h2>HØST</h2>

                    <p>
                        Soluções inteligentes para simplificar operações,
                        reduzir custos e impulsionar resultados.
                    </p>
                </div>

                {/* Navegação */}
                <div className={styles.footerColumn}>
                    <h3>Navegação</h3>

                    <ul>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#services">Serviços</a></li>
                        <li><a href="#journey">Jornada</a></li>
                        <li><a href="#clients">Clientes</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </div>

                {/* Contato */}
                <div className={styles.footerColumn}>
                    <h3>Contato</h3>

                    <ul className={styles.contactList}>

                        <li>
                            <HiOutlinePhone />
                            <span>(64) 99999-9999</span>
                        </li>

                        <li>
                            <HiOutlineEnvelope />
                            <span>contato@host.com.br</span>
                        </li>

                        <li>
                            <HiOutlineMapPin />
                            <span>Goiânia - GO</span>
                        </li>

                    </ul>
                </div>

                {/* Redes */}
                <div className={styles.footerColumn}>
                    <h3>Redes Sociais</h3>

                    <div className={styles.socials}>

                        <a href="#">
                            <FaInstagram />
                        </a>

                        <a href="#">
                            <FaLinkedinIn />
                        </a>

                        <a href="#">
                            <FaWhatsapp />
                        </a>

                    </div>
                </div>

            </div>

            <div className={styles.footerBottom}>
                <p>
                    © {new Date().getFullYear()} HØST Soluções.
                    Todos os direitos reservados.
                </p>
                <p>
                    © {new Date().getFullYear()} Desenvolvido por:
                    Gustavo Brayan.
                </p>
            </div>

        </footer>
    );
}