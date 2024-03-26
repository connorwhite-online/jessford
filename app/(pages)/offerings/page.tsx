'use client';
import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import birth from "../../../public/birth.png";
import postpartum from "../../../public/postpartum.png";
import perinatalLoss from "../../../public/perinatal-loss.png";
import styles from "./offerings.module.css";

export default function Offerings() {

    const Offerings = [
        {
            title: "Pregnancy & Birth",
            url: birth,
            intro: "Comprehensive, holistic support starting at any point in pregnancy.  This offering is intended to educate as you navigate your options, to help create and advocate for your birth plan, and to provide tailored support to fit your needs throughout your pregnancy journey.  Topics, resources and details include:",
            details: [
                "Emotional, Mental, and Physical Support",
                "Stages of Pregnancy",
                "Childbirth Preparation",
                "Signs of Labor",
                "Establishing your Care Team",
                "Partner and Family Support",
                "Infant Feeding",
                "Postpartum Planning",
                "Community Resources",
                "Support by phone, email, or text upon beginning work together",
                "Bi-weekly, 1 hour check-ins (or as needed)",
                "Phone and text support in the lead up to and during labor",
            ],
            subhead1: "Note",
            details1: [
                "This offering does not include in-person labor and birth support",
            ],
            pricing: "Pricing varies depending on trimester start date, sliding scale or payment plans are also available.  We will work together to find a care plan that fits your needs.",
        },
        {
            title: "Postpartum",
            url: postpartum,
            intro: "Postpartum is forever.  My postpartum support focuses on the birthing person as they go through the most expanding and altering time of their life.  My care places an emphasis on resting and healing the body, prioritizing mental health, warmth and nutrition, community connection and providing practical care as they navigate immediate postpartum and beyond. Support may include but is not limited to:",
            details: [
                "Emotional, Mental, and Physical Support",
                "Nourishing teas, herbs, broths and meals",
                "Light household tasks and cleaning",
                "Caring for your newborn so you can tend to yourself",
                "Birth story processing",
                "Logistical planning",
                "Partner and sibling support",
                "Infant feeding",
                "Community resources",
            ],
            subhead1: "The Golden Month",
            details1: [
                "Daytime support (4 hour shifts) twice a week for your first month postpartum",
                "Continuous, on call phone or text support",
            ],
            subhead2: "The First Forty Days",
            details2: [
                "Daytime support (4 hour shifts) twice a week for your first forty days postpartym",
                "Continuous, on call phone or text support",
            ],
            subhead3: "Mini In-home Session",
            details3: [
                "Daytime support as needed (4 hour shift)",
            ],
            subhead4: "Virtual Support",
            details4: [
                "Continuous text, phone, or video conference support during immediate postpartum throughout the first two years as needed",
            ],
            pricing: "Pricing varies depending on package, sliding scale or payment plans are also available.  We will work together to find a care plan that fits your needs.",
        },
        {
            title: "Perinatal Loss",
            url: perinatalLoss,
            intro: "If you’re facing the loss of your baby or seeking abortion support, all care is pro bono or donation-based.  Consultations are encouraged and welcomed, however if you’re faced with a time-sensitive situation please reach out as soon as possible.  Both in-person and virtual care are available. Tender support is available for you and your loved ones for all choices and outcomes. These experiences can be overwhelming, isolating, unique to you, and deserved to be honored. Support may include but is not limited to:",
            details: [
                "Exploring options in any trimester without judgement",
                "Preparing for full-term birth with a fatal diagnosis",
                "Including personal wishes throughout the birth process",
                "Creating mementos of time spent with baby",
                "Exploring lactation options after a loss and practical lactation support",
                "Planning a persoanlized farewell ceremony",
                "Connecting with additional local resources as well as providing national/online resources",
                "Abortion support in any trimester",
                "Ongoing grief support",
            ],
        }
    ]

    const offeringRef = useRef<HTMLDivElement>(null);

    const [openIndex, setOpenIndex] = useState(0);
    const [detailsOpenIndex, setDetailsOpenIndex] = useState(null);

    const toggleOpen = (index) => {
        setOpenIndex(index);
        setDetailsOpenIndex(null);
    };

    const toggleDetails = (index) => {
        setDetailsOpenIndex(index);
    }

    return (
    <main className={styles.main} ref={offeringRef}>
        <section className={styles.textContainer}>
            {Offerings.map((offering, index) => (
                <div className={styles.offering}>
                    <h1 className={styles.title} key={index} onClick={() => toggleOpen(index)}>
                        {offering.title}<span className={styles.dropdown}>+</span>
                    </h1>
                    {openIndex === index && (
                        <p className={styles.intro}>
                            {offering.intro}
                        </p>
                    )}
                    {openIndex === index && (
                        <div className={styles.detailsButton} onClick={() => toggleDetails(index)}>
                            + view more details
                        </div>
                    )}
                        {detailsOpenIndex === index && (
                            <ul className={styles.detailsList}>
                                {offering.details.map((detail, detailIndex) => (
                                    <li key={detailIndex}>{detail}</li>
                                ))}
                            </ul>
                        )}
                </div>
            ))}
        </section>
        <section className={styles.imgContainer}>
        {Offerings.map((offering, index) => (
                    openIndex === index && (
                        <Image key={index} src={offering.url} alt={offering.title} width={426.85} height={503} />
                    )
                ))}
        </section>
    </main>
)};