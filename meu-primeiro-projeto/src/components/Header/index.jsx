import Styles from './Header.module.css';
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Header (){
    const [menuOpen, setMenuOpen] = useState(false);
    return(
       <>
    <header className={Styles.header}>
        <div className={Styles.container}>
            <span><a href="#">HØST</a></span>

            <nav className={Styles.desktopMenu}>
                <a href="#">o que fazemos</a> 
                <a href="#">sobre nós</a> 
                <a href="#">seja um parceiro</a> 
                <a href="#">indique e ganhe</a> 
                <a href="#">contato</a>
            </nav>

            <button
                className={Styles.menuButton}
                onClick={() => setMenuOpen(true)}
            >
                <FiMenu/>
            </button>
        </div>
    </header>
    <AnimatePresence>    
        {menuOpen && (
            <>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={Styles.overlay}
                    onClick={() => setMenuOpen(false)}
                />

                <motion.aside
                    className={Styles.mobileMenu}
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    <div className={Styles.menuHeader}>

                        <span className={Styles.logoMobile}>
                            <a href="#">HØST</a>
                        </span>
                        <button
                            className={Styles.close}
                            onClick={() => setMenuOpen(false)}
                        >
                            <FiX/>
                        </button>
                    </div>
                    <motion.a href="#"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.10 }}
                    >o que fazemos</motion.a> 
                    <motion.a href="#"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.20 }}
                    >sobre nós</motion.a> 
                    <motion.a href="#"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.30 }}
                    >seja um parceiro</motion.a> 
                    <motion.a href="#"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.40 }}
                    >indique e ganhe</motion.a> 
                    <motion.a href="#"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.50 }}
                    >contato</motion.a>
                </motion.aside>
            </>
        )}
    </AnimatePresence>
</>
    )
}

