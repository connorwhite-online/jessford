'use client';
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./desktop-nav.module.css";

export default function DesktopNav() {
const pathname = usePathname();

const navRef = React.useRef<HTMLDivElement>(null);

return (
    <>
    <nav className={styles.nav} ref={navRef}>
        <menu className={styles.subNav}>
            <li>
                <Link href="/" className={`link ${pathname === '/' ? styles.navLinkActive : styles.navLink}`}>
                    Info
                </Link>
            </li>
            <li>
                <Link href="/offerings" className={`link ${pathname === '/offerings' ? styles.navLinkActive : styles.navLink}`}>
                    Offerings
                </Link>
            </li>
            <li>
                <Link href="/testimonials" className={`link ${pathname === '/testimonials' ? styles.navLinkActive : styles.navLink}`}>
                    Testimonials
                </Link>
            </li>
            <li>
                <Link href="/connect" className={`link ${pathname === '/connect' ? styles.navLinkActive : styles.navLink}`}>
                    Connect
                </Link>
            </li>
        </menu>
        <menu className={styles.subNav}>
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
    </>
)};