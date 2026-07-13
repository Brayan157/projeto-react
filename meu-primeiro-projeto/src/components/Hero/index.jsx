import styles from './Hero.module.css';
import {motion} from 'framer-motion'


export default function Hero(){
    return(

            <section className={styles.hero}>
                <div className={styles.heroConteiner}>
                    <div className={styles.heroText}>
                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Tudo o que seu negócio precisa, com eficiência e simplicidade!
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            A HØST é mais do que um fornecedor - 
                            somos o parceiro estrategico que te entende, 
                            direciona e conecta seu negocioás melhores soluções em equipamentos, serviços e gestão. <br/>
                            <span>Aqui você resolve tudo em um só lugar.</span>
                        </motion.p>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className={styles.socialLinks}
                        >
                            <a href="#" className={styles.buttonDiscover}>Conheça o HUB HØST</a>
                        </motion.div>
                    </div>
                    <motion.div 
                        initial={{
                            opacity:0,
                            scale:.65,
                            rotate:35
                        }}

                        animate={{
                            opacity:1,
                            scale:1,
                            rotate:0
                        }}

                        transition={{
                            duration:1.2,
                            ease:"easeOut"
                        }}
                        className={styles.heroImage}
                    >
                        <img src="/image/compass.png" alt="" />
                    </motion.div>
                </div>
            </section>
            
        
    )
}