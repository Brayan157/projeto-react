import { useEffect, useRef, useState } from "react";
import steps from '../../services/JourneyStep';
import styles from './JourneyMobile.module.css';
// Google Fonts — adicione no <head> do seu HTML:
// <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const clamp01 = (v) => Math.min(1, Math.max(0, v));
const mapRange = (v, a, b) =>
  easeOut(clamp01((v - a) / (b - a)));


const CARD_THRESHOLDS = [0.10, 0.22, 0.34, 0.46, 0.58, 0.70, 0.82];

function buildTicks() {
  const ticks = [];
  for (let i = 0; i < 72; i++) {
    const angle = (i / 72) * 360;
    const rad = (angle * Math.PI) / 180;
    const isMajor = i % 9 === 0;
    const r1 = isMajor ? 116 : 120;
    ticks.push({
      x1: Math.cos(rad) * r1, y1: Math.sin(rad) * r1,
      x2: Math.cos(rad) * 124, y2: Math.sin(rad) * 124,
    });
  }
  return ticks;
}
const TICKS = buildTicks();

export default function CompassScroll() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      setProgress(clamp01(-top / (height - window.innerHeight)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dissolve = mapRange(progress, 0, 0.85);

  const part = (ds, de, tx, ty, rot = 0) => {
    const t = mapRange(dissolve, ds, de);
    return {
      opacity: 1 - t,
      transform: `translate(${tx * t}px, ${ty * t}px) rotate(${rot * t}deg)`,
    };
  };

  return (
    <div
        ref={containerRef}
        className={styles.containerMobile}
    >
      <div style={{
        position: "sticky", top: 0, height: "100vh",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
      }}>
        {/* glow */}
        <div style={{
          position: "absolute", width: 480, height: 480, borderRadius: "50%",
          background: "radial-gradient(circle, #1E3A5F) 0%, transparent 70%)",
          opacity: 1 - dissolve, pointerEvents: "none",
        }} />

        {/* COMPASS */}
        <svg viewBox="-140 -140 280 280" width={320} height={320}
          style={{ position: "absolute", userSelect: "none" }}>

          <g style={part(0, 0.7, 0, -180, -12)}>
            <circle cx={0} cy={0} r={128} fill="none" stroke="#1E3A5F" strokeWidth={1.5} strokeOpacity={0.4} />
            <circle cx={0} cy={0} r={124} fill="none" stroke="#1E3A5F" strokeWidth={0.5} strokeOpacity={0.2} />
          </g>

          <g style={part(0.05, 0.6, 0, 0)}>
            {TICKS.map((t, i) => (
              <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
                stroke="#1E3A5F"
                strokeWidth={i % 9 === 0 ? 1.5 : 0.6}
                strokeOpacity={i % 9 === 0 ? 0.6 : 0.25}
              />
            ))}
          </g>

          <g style={part(0.1, 0.65, 0, 120, 8)}>
            <circle cx={0} cy={0} r={108} fill="none" stroke="#1E3A5F" strokeWidth={0.5} strokeOpacity={0.15} />
            <circle cx={0} cy={0} r={96}  fill="none" stroke="#2d4a6b" strokeWidth={1}   strokeOpacity={0.5} />
          </g>

          <g style={part(0.15, 0.75, 0, 0, 45)}>
            {[45, 135, 225, 315].map(a => {
              const r = (a * Math.PI) / 180;
              const ox = Math.cos(r) * 72, oy = Math.sin(r) * 72;
              return (
                <polygon key={a}
                  points={`0,0 ${Math.cos(r - 0.12) * 12},${Math.sin(r - 0.12) * 12} ${ox},${oy} ${Math.cos(r + 0.12) * 12},${Math.sin(r + 0.12) * 12}`}
                  fill="#2d4a6b" fillOpacity={0.7}
                />
              );
            })}
            {[0, 90, 180, 270].map(a => {
              const r = (a * Math.PI) / 180;
              const ox = Math.cos(r) * 88, oy = Math.sin(r) * 88;
              return (
                <polygon key={a}
                  points={`0,0 ${Math.cos(r - 0.18) * 16},${Math.sin(r - 0.18) * 16} ${ox},${oy} ${Math.cos(r + 0.18) * 16},${Math.sin(r + 0.18) * 16}`}
                  fill={a === 0 ? "#1E3A5F" : "#e4dfc8"}
                  fillOpacity={a === 0 ? 1 : 0.6}
                />
              );
            })}
          </g>

          <g style={part(0.2, 0.65, 0, -80)}>
            <text x={0} y={-104} textAnchor="middle" dominantBaseline="middle"
              fill="#1E3A5F" fontSize={11} fontFamily="Cinzel, serif" fontWeight={600} letterSpacing={2}>N</text>
          </g>
          <g style={part(0.2, 0.65, 0, 80)}>
            <text x={0} y={106} textAnchor="middle" dominantBaseline="middle"
              fill="#e4dfc8" fontSize={9} fontFamily="Cinzel, serif" fillOpacity={0.5} letterSpacing={2}>S</text>
          </g>
          <g style={part(0.2, 0.65, 80, 0)}>
            <text x={106} y={0} textAnchor="middle" dominantBaseline="middle"
              fill="#e4dfc8" fontSize={9} fontFamily="Cinzel, serif" fillOpacity={0.5} letterSpacing={2}>E</text>
          </g>
          <g style={part(0.2, 0.65, -80, 0)}>
            <text x={-106} y={0} textAnchor="middle" dominantBaseline="middle"
              fill="#e4dfc8" fontSize={9} fontFamily="Cinzel, serif" fillOpacity={0.5} letterSpacing={2}>W</text>
          </g>

          <g style={part(0.3, 0.8, 0, -120, -8)}>
            <polygon points="0,-68 -7,0 0,-8 7,0" fill="#1E3A5F" />
          </g>
          <g style={part(0.3, 0.8, 0, 120, 8)}>
            <polygon points="0,68 -7,0 0,8 7,0" fill="#1E3A5F" fillOpacity={0.4} />
          </g>

          <g style={part(0.5, 0.9, 0, 0)}>
            <circle cx={0} cy={0} r={16} fill="none" stroke="#1E3A5F" strokeWidth={1} strokeOpacity={0.5} />
            <circle cx={0} cy={0} r={6}  fill="#1E3A5F" fillOpacity={0.8} />
            <circle cx={0} cy={0} r={3}  fill="#07080d" />
          </g>

          <g style={part(0.0, 0.45, 0, -160)}>
            <text x={0} y={-136} textAnchor="middle" dominantBaseline="middle"
              fill="#1E3A5F" fontSize={7} fontFamily="JetBrains Mono, monospace" fillOpacity={0.5} letterSpacing={1}>360°</text>
          </g>
        </svg>

        {/* CARDS */}
        <div className={styles.cardsContainerMobile}>
            
                {steps.map((step, i) => {
                const t = mapRange(progress, CARD_THRESHOLDS[i], CARD_THRESHOLDS[i] + 0.12);
                return (
                    <div key={i} 
                    className={styles.cardMobile}
                    style={{
                        opacity: t,
                        transform:
                            i % 2 === 0
                                ? `translateX(${(1 - t) * -80}px) scale(${0.9 + t * 0.1})`
                                : `translateX(${(1 - t) * 80}px) scale(${0.9 + t * 0.1})`,
                        filter: `blur(${(1 - t) * 4}px)`,
                        transition: "filter .2s linear",
                    }}>
                        <div className={styles.stepIdMobile}>
                            {step.id}
                        </div>
                        <div className={styles.stepContentMobile}>
                            <div  className={styles.stepTitleMobile}><span>{step.title}</span></div>
                            <div className={styles.stepDescMobile}>
                                {step.desc}
                            </div>
                        </div>
                    </div>
                );
                })}

        </div>
      </div>
    </div>
  );
}