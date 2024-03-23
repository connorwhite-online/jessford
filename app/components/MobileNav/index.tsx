'use client';
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./mobile-nav.module.css";

export default function MobileNav() {
const pathname = usePathname();

const [menuOpen, setMenuOpen] = useState(false);
const navRef = React.useRef<HTMLDivElement>(null);

// let menuItems = gsap.utils.toArray(navRef);
// console.log(menuItems);

useGSAP(() => {
    
    const MenuTl = gsap.timeline({ paused: true });
    MenuTl.fromTo(navRef.current, {
        display: "none",
    }, {
        display: "flex",
    });

    menuOpen ? MenuTl.play() : MenuTl.reverse();
}, [menuOpen]);

return (
    <>
    <nav className={styles.nav} ref={navRef}>
        <h1 className={styles.title}>Jess Ford</h1>
        <ul className={styles.subNav}>
            <li>
                <Link href="/" onClick={() => setMenuOpen(false)} className={`link ${pathname === '/' ? styles.navLinkActive : styles.navLink}`}>
                    Info
                </Link>
            </li>
            <li>
                <Link href="/offerings" onClick={() => setMenuOpen(false)} className={`link ${pathname === '/offerings' ? styles.navLinkActive : styles.navLink}`}>
                    Offerings
                </Link>
            </li>
            <li>
                <Link href="/testimonials" onClick={() => setMenuOpen(false)} className={`link ${pathname === '/testimonials' ? styles.navLinkActive : styles.navLink}`}>
                    Testimonials
                </Link>
            </li>
            <li>
                <Link href="/connect" onClick={() => setMenuOpen(false)} className={`link ${pathname === '/connect' ? styles.navLinkActive : styles.navLink}`}>
                    Connect
                </Link>
            </li>
        </ul>
        <ul className={styles.subNav}>
            <li>
                <Link className={styles.navLink} href="https://www.instagram.com/jessford.care" target="_blank">
                    Instagram
                </Link>
            </li>
            <li>
                <Link className={styles.navLink} href="mailto:jessfordcare@gmail.com">
                    Email
                </Link>
            </li>
        </ul>
    </nav>
    <div className={styles.menuButton}>
        <button onClick={() => setMenuOpen(!menuOpen)} type="button">{menuOpen ? "Close" : "Menu"}</button>
    </div>
    </>
)};