import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Pagination } from "swiper/modules"; 
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";
import{motion} from "framer-motion";
import services from '../../services/card';
import styles from './Cards.module.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

export default function CardsMobile(){
    const [swiperInstance, setSwiperInstance] = useState(null);
    return (
        <div className={styles.sliderContainer}>
            <Swiper
                modules={[EffectCreative, Pagination]} 
                className={styles.cardsMobile}
                centeredSlides
                loop
                grabCursor
                slidesPerView={1.50}
                spaceBetween={20}
                speed={800}
                effect="creative"
                
                // Salvamos a instância assim que o componente monta
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                
                pagination={{
                    el: `.${styles.paginacao}`,
                    clickable: true,
                }}
                creativeEffect={{
                    prev: {
                        translate: ["-90%", 0, -250],
                        rotate: [0, 18, 0],
                        scale: 0.9,
                        
                    },
                    next: {
                        translate: ["90%", 0, -250],
                        rotate: [0, -18, 0],
                        scale: 0.9,
                        
                    }
                }}
            >       
                {services.map((service, index) => (
                    <SwiperSlide key={index}>
                        {({ isActive }) => (
                        <article className={styles.cardMobile}>

                            <div className={styles.overlayMobile}>
                                <h3>{service.title}</h3>
                                <motion.p
                                    initial = {false}
                                    animate={{
                                        oopacity: isActive ? 1 : 0,
                                        height: isActive ? "auto" : 0,
                                        marginTop: isActive ? 12 : 0
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.25, 1, 0.5, 1]
                                    }}
                                    style={{overflow: 'hidden'}}
                                >
                                    {service.description}
                                </motion.p>
                            </div>
                        </article>
                        )}
                    </SwiperSlide>
                ))}       
            </Swiper>

            {/* CONTAINER DOS CONTROLES */}
            <div className={styles.swiperControles}>
                <button 
                    type="button" 
                    className={styles.btnPrev} 
                    onClick={() => swiperInstance?.slidePrev()}
                >
                    <FiChevronLeft />
                </button>
                
                <div className={styles.paginacao}></div>
                
                <button 
                    type="button" 
                    className={styles.btnNext} 
                    onClick={() => swiperInstance?.slideNext()}
                >
                    <FiChevronRight />
                </button>
            </div>
        </div>
    );
}
