import styles from "./Clients.module.css";
import logos from '../../services/SliderClients.js';

export default function Clients() {
    return (<>
        <div className={styles.slider}>
            <div className={styles.sliderTrack}>
                {[...logos, ...logos].map((logo, index) => (
                    <div className={styles.sliderItem} key={index}>
                        <img src={logo.image} alt={logo.name} />
                    </div>
                ))}
            </div>
        </div>
    </>);
}