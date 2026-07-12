import style from './Satisfaction.module.css';
import service from '../../services/SatisfactionCards.js';
import { HiMiniUser } from "react-icons/hi2";
import { useEffect, useState } from "react";

function shuffle(array) {
    const arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

export default function Satisfaction() {
    const [cards, setCards] = useState([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1300);

    useEffect(() => {

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 1300);
    };

    window.addEventListener("resize", handleResize);

    return () => {
        window.removeEventListener("resize", handleResize);
    };

}, []);
useEffect(() => {

    const quantidade = isMobile ? 1 : 2;

    // gera os primeiros cards
    setCards(shuffle(service).slice(0, quantidade));

    const interval = setInterval(() => {

        setCards(current => {

            const novos = [...current];

            const indiceTroca = Math.floor(Math.random() * quantidade);

            const disponiveis = service.filter(
                s => !novos.some(card => card.id === s.id)
            );

            if (!disponiveis.length) return novos;

            const novoCard =
                disponiveis[Math.floor(Math.random() * disponiveis.length)];

            novos[indiceTroca] = novoCard;

            return [...novos];

        });

    }, 7000);

    return () => clearInterval(interval);

}, [isMobile]);
    return (
        <>
        <section className={style.satisfaction}>
            <div className={style.satisfactionContent}>
                <div className={style.satisfactionHeader}>
                    <h2>Negócios que simplificaram com a <span>HØST</span></h2>
                </div>
                <div className={style.satisfactionCards}>
                    {cards.map((card) => (
                        <div key={card.id} className={style.satisfactionCard}>
                            <div className={style.satisfactionCardHeader}>
                                <div className={style.satisfactionCardImage}>
                                    <HiMiniUser className={style.satisfactionCardUser}/>
                                </div>    
                                <div className={style.satisfactionCardInfo}>
                                    <h3>{card.name}</h3>
                                    <cite>{card.profession} - {card.enterprise}</cite>
                                </div>
                            </div>
                            <div className={style.satisfactionStars}>
                                {[...Array(5)].map((_, index) => (
                                    <span
                                        key={index}
                                        className={
                                            index < card.satisfaction
                                                ? style.starFilled
                                                : style.starEmpty
                                        }
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                            <div className={style.satisfactionCardDescription}>
                                <p>{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>  
        </section>
        </>
    );
}