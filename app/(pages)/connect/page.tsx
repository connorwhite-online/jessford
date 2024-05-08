'use client';
import React, {Suspense, use, useRef} from "react";
import { InlineWidget } from "react-calendly";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./connect.module.css"

export default function Connect() {

    const connectRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(`.${styles.caption}`, {
            opacity: 0,
            duration: 2,
            // ease: 'power4.out'
        })
        gsap.from(`.${styles.calendar}`, {
            opacity: 0,
            duration: 1.5,
            ease: 'power4.out'
        })
    }, {scope: connectRef})

    return (
        <>
            <header>connect</header>
            <div className={styles.connect} ref={connectRef}>
                <p className={styles.caption}>All initial consultations are complimentary and welcomed. We will take this time to explore your needs, create a care plan, and discuss pricing. Please reach out over email at <a href="mailto:jessfordcare@gmail.com">jessfordcare@gmail.com</a> for any additional questions.</p>
                <Suspense fallback={<div>Loading Calendly...</div>}>
                <div className={styles.calendar}>
                    <InlineWidget url="https://calendly.com/jessfordcare" />
                </div>
                </Suspense>
            </div>
        </>
)}