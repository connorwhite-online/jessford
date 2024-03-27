'use client';
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./mobile-nav.module.css";
import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

export default function MobileNav() {

const pathname = usePathname();

const [menuOpen, setMenuOpen] = useState(false);
const navRef = React.useRef<HTMLDivElement>(null);
const buttonRef = React.useRef<HTMLButtonElement>(null);
const mobileMenuTL = React.useRef<gsap.core.Timeline | null>(null);

// Create a timeline that animates the mobile menu
useGSAP(() => {
    mobileMenuTL.current = gsap.timeline({ paused: true })

    .to(buttonRef.current, {
        color: 'black', 
        backgroundColor: "white", 
        text: {
            value: "Close",
            type: "diff"
        }, 
        duration: 0.5
    })
    .set(`.${styles.nav}`, {
        display: "flex"
    })
    .from(`.${styles.nav}`, {
        clipPath: "inset(100% 0 0 0)", 
        duration: 0.75, 
        ease: "power4.out"
    })
    .from(`.${styles.title}`, {
        opacity: 0,
        duration: 0.5
    })
    .from(`.${styles.navLink}, .${styles.navLinkActive}`, {
        opacity: 0, 
        y: 25, 
        // rotateZ: -2.5, 
        duration: 0.5, 
        stagger: 0.1, 
        ease: "power4.out"
    }, "<")
}, { scope: navRef });

// Open the menu at 1x speed, close at 2x speed
useGSAP(() => {
    if (menuOpen) {
        mobileMenuTL.current?.timeScale(1);
        mobileMenuTL.current?.play();
    } else {
        mobileMenuTL.current?.timeScale(2);
        mobileMenuTL.current?.reverse();
    }
}, { dependencies: [menuOpen] });

return (
    <main ref={navRef}>
    <nav className={styles.nav}>
        <h1 className={styles.title}>Jess Ford</h1>
        <menu className={styles.subNav}>
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
        </menu>
        <menu className={styles.socials}>
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
        </menu>
    </nav>
    <div className={styles.menuButton}>
        <button ref={buttonRef} onClick={() => setMenuOpen(!menuOpen)} type="button">Menu</button>
    </div>
    </main>
)};