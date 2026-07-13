import { motion } from "framer-motion";
export default function Reveal({ 
    children, direction = "up", 
    delay = 0, duration = 0.8 }) { 
    const directions = { 
        up: { x: 0, y: 80 }, 
        down: { x: 0, y: -80 }, 
        left: { x: -80, y: 0 },
        right: { x: 80, y: 0 }, 
        scale: { x: 0, y: 0, scale: .85 } 
    }; 
    const initial = direction === "scale" ? { opacity: 0, scale: .85, filter: "blur(10px)" } 
        : { opacity: 0, x: directions[direction].x, y: directions[direction].y, filter: "blur(10px)" }; 
    return ( 
        <motion.div initial={initial} whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }} 
            viewport={{ once: true, amount: .2 }} transition={{ duration, delay, ease: "easeOut" }} > 
            {children} 
        </motion.div> 
); }