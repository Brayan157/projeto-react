import styles from './Contact.module.css';

export default function Contact(){
    return (<>
        <section className={styles.contactSection}>
            <div className={styles.contactContainer}>
                <div className={styles.contactContent}>
                    <h1>Pronto para transformar sua operação?</h1>
                    <h3><span>Converse com um de nossos especialistas</span> e descubra como a HØST pode ajudar com 
                        soluções personalizadas para simplificar, otimizar e fazer o seu negócio crescer.</h3>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <button className={styles.contactButton}>Fale com um especialista</button>
                    </a>
                </div>
            </div>
        </section>
    </>);
}