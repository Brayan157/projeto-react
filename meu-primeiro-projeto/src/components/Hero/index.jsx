import styles from './Hero.module.css';


export default function Hero(){
    return(

            <section className={styles.hero}>
                <div className={styles.heroConteiner}>
                    <div className={styles.heroText}>
                        <h1>
                            Tudo o que seu negócio precisa, com eficiência e simplicidade!
                        </h1>
                        <p>
                            A HØST é mais do que um fornecedor - 
                            somos o parceiro estrategico que te entende, 
                            direciona e conecta seu negocioás melhores soluções em equipamentos, serviços e gestão. <br/>
                            <span>Aqui você resolve tudo em um só lugar.</span>
                        </p>
                        
                        <div className={styles.socialLinks}>
                            <a href="#" className={styles.buttonDiscover}>Conheça o HUB HØST</a>
                        </div>
                    </div>
                    <div className={styles.heroImage}>
                        <img src="/image/compass.png" alt="" />
                    </div>
                </div>
            </section>
            
        
    )
}