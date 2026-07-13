import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import steps from '../../services/JourneyStep';
import styles from './Journey.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function JourneyDesktopEffect() {
    const journeyRef = useRef(null);
    const pathRef = useRef(null);
    const [points, setPoints] = useState([]);
    const [lineProgress, setLineProgress] = useState(0);

    useGSAP(() => {
        const roadPath = document.querySelector('#road');
        
        if (roadPath) {
            const pathLength = roadPath.getTotalLength();

            gsap.set(roadPath, { 
                strokeDasharray: pathLength, 
                strokeDashoffset: pathLength 
            });

            gsap.to(roadPath, {
                strokeDashoffset: 0,
                ease: "none",
                onUpdate(){
                    const total = roadPath.getTotalLength();
                    const current = total - gsap.getProperty(roadPath,"strokeDashoffset");
                    setLineProgress(current / total);
                },
                scrollTrigger: {
                    trigger: journeyRef.current,
                    start: "top 20%",
                    end: "+=3000",
                    scrub: 1,
                    pin: true,

                }
            });
        }
    }, { scope: journeyRef });
    useEffect(() => {
        if(!pathRef.current) return;
            const path = pathRef.current;
            const total = path.getTotalLength();
            const newPoints = steps.map(step=>{
            const point  = path.getPointAtLength(total * step.progress);
            return{
                ...step,
                x:point.x,
                y:point .y
            }
        });
        setPoints(newPoints);
    },[]);
    return (
        <>
        <div className={styles.timeline} ref={journeyRef}>
            <svg className={styles.svg} viewBox="-450 -50 1200 900">
                <path
                    ref={pathRef}
                    id="road"
                    fill="none"
                    stroke="#d8d8d8"
                    strokeLinecap="round"
                    d="
                    M 0 0 L 250 0 A 100 100 0 0 1 250 200 L 0 200 A 100 100 0 0 0 0 400 L 250 400 A 100 100 0 0 1 250 600 L 125 600
                    "
                    />
                {points.map(point=>(
                    <g key={point.id}>
                        <circle
                            cx={point.x}
                            cy={point.y}
                            r={lineProgress >= point.progress ? 14 : 0}
                            className={styles.dot}
                            />
                        {lineProgress >= point.progress && (
                            <text
                                x={point.x}
                                y={point.y}
                                className={styles.dotText}
                                textAnchor="middle"
                                dominantBaseline="middle"
                            >
                                {point.id}
                            </text>
                        )}
                    </g>
                ))}
            </svg>
            {points.map((point) => (
                <div
                    key={point.id}
                    className={styles.card}
                    style={{
                        left: `${(point.x / 1200) * 100 + point.offset.x}%`,
                        top: `${(point.y / 900) * 100 + point.offset.y}%`,
                        opacity: lineProgress >= point.progress ? 1 : 0,
                        
                        transform: lineProgress >= point.progress
                            ? "translate(-50%,-50%) scale(1)"
                            : "translate(-50%,-30%) scale(.7)",
                            transition:
                            "opacity .45s ease, transform .45s ease"
                    }}
                >
                    <div className={styles.cardHeader}>
                        <h3>{point.title}</h3>
                    </div>
                    <p>{point.desc}</p>
                </div>
            ))}
        </div>
    </>
    );
}