import styles from './About.module.css';
import { motion } from "framer-motion";
import services from '../../services/card';
import CardsDesktop from './CardsDesktop.jsx';
import CardsMobile from './CardsMobile.jsx';
import{ useMediaQuery } from 'react-responsive';



export default function About(){
    
    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });

    return(
        <>
            <section className={styles.about}>
                <div className={styles.aboutContent}>
                    <div className={styles.aboutText}>
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            O HUB <span>HØST</span>
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Menos fornecedores. Mais resultados.
                        </motion.h3>
                        <div>
                            <motion.p
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                Um HUB é um ponto central que conecta tudo o que você precisa. 
                                Ele reduz distâncias, elimina complicações e faz com que todo o seu negócio funcione de forma integrada e eficiente.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                Sabemos que gerenciar um negócio no setor de alimentação é um grande desafio. 
                                Exige habilidade para lidar com fornecedores, serviços, equipamentos e equipes, 
                                tudo ao mesmo tempo — sem perder o foco nos clientes. 
                                É por isso que ter um parceiro que simplifica sua operação e alivia a carga do dia a dia faz toda a diferença.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, scale: 0.85, rotate: 5}}
                                animate={{ opacity: 1, scale: 1, rotate: 0}}
                                transition={{ duration: 0.8, delay: 1 }}
                            >
                                Com a HØST, você não precisa lidar com múltiplos fornecedores, 
                                contratos ou processos complicados. 
                                Somos a solução que faltava, 
                                conectamos aquilo que seu negócio precisa para crescer com mais resultados e menos esforço.
                            </motion.p>
                        </div>
                        
                    </div>
                    <div className={styles.aboutText}>
                        <h2>O que encontra aqui:</h2>
                    </div>
                        {isMobile ? <CardsMobile /> : <CardsDesktop />}
                </div>
            </section>
        </>
    )

}