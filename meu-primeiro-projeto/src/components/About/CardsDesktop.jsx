

import services from '../../services/card';
import { motion } from "framer-motion";
import { useState } from "react";
import styles from './Cards.module.css';

export default function CardsDesktop(){
    const [activeCard, setActiveCard] = useState(null);
    return (
        <>
        <div className={styles.cards} data-active={activeCard}>
        {services.map((service, index) => (
                <motion.article 
                    key={index}
                    className={styles.card}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    onMouseEnter={() => setActiveCard(index)}
                    onMouseLeave={() => setActiveCard(null)}
                    animate={{flexGrow: activeCard === index ? 1.4 : 1}}
                    transition={{duration: 0.8, ease:[0.3, 1, 0.3, 1]}}
                >
                    <div className={styles.overlay}>
                        <motion.h3 
                            animate={{
                                y: activeCard === index ? -5 : 0,
                            }}
                            transition={{
                                duration: 0.45,
                                ease: [0.25, 1, 0.5, 1]
                            }}
                        >
                            {service.title}
                        </motion.h3>
                        <motion.p
                            initial = {false}
                            animate={{
                                opacity: activeCard === index ? 1 : 0,
                                height: activeCard === index ? "auto" : 0,
                                marginTop: activeCard === index ? 0 : 0,
                            }}
                            transition={{
                                duration: 0.45,
                                ease: [0.25, 1, 0.5, 1]
                            }}
                            style={{ overflow: "hidden" }}
                        >
                            {service.description}
                        </motion.p>
                    </div>
                </motion.article>

            ))}
            </div>
            
        </>
    )}