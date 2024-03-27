'use client';
import Image from "next/image";
import heroImage from "../public/hero.png";
import styles from "./page.module.css";
import React, { useState, useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {

  const Trainings = [
    {
      course: 'Death Doula Formation Mentorship',
      org: 'Jill Schock, LA Death Doula',
      date: '2022'
    },
    {
        course: 'Perinatal Mental Health',
        org: 'Maternal Mental Health NOW',
        date: '2022'
    },
    {
        course: 'Pregnancy and Infant Loss Support',
        org: 'SHARE',
        date: '2022'
    },
    {
        course: "The Doula's Doula Mentorship",
        org: 'Maiysha Campbell & Domino Kirke-Badgley',
        date: '2021'
    },
    {
        course: 'Full Spectrum Doula',
        org: 'Birthing Advocacy',
        date: '2020'
    },
    {
        course: 'Cultural Competency in Maternity Care',
        org: 'Shafia Monroe',
        date: '2019'
    },
    {
        course: 'Trauma Informed Care',
        org: 'CEUs with Jesse Remer and Astrid Castro',
        date: '2019'
    },
    {
        course: 'Postpartum Doula',
        org: 'Mother Tree Doula',
        date: '2018'
    },
    {
        course: 'Birth Doula',
        org: 'Mother Tree Doula',
        date: '2017'
    }
  ];

  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutTLIntro = useRef<gsap.core.Timeline>();
  // const aboutTLOutro = useRef<gsap.core.Timeline>();

  useGSAP(() => {
    aboutTLIntro.current = gsap.timeline()
    .set(aboutRef.current, {autoAlpha: 1})
    .from("header", {
      opacity: 0,
      duration: 1.5,
      ease: 'power4.out'
    })
    .from(`.${styles.imgContainer}`, { 
      opacity: 0, 
      clipPath: 'inset(0 0 100% 0)', 
      duration: 2,
      ease: 'power4.out',
    }, "<")
    .from("h1", {
      opacity: 0,
      y: 25,
      clipPath: 'inset(0 0 100% 0)',
      duration: 1.5,
      ease: 'power4.out',
      stagger: 0.5,
    }, "<")
    .from("hr", {
      clipPath: 'inset(0 100% 0 0)',
      duration: 1,
      ease: 'power4.out',
      stagger: 0.5,
    }, "<")
    .from("p, li", {
      opacity: 0,
      duration: 4,
      ease: 'power4.out',
      stagger: 0.1,
    }, "<25%")
  }, {scope: aboutRef})


  return (
    <div ref={aboutRef} style={{visibility: 'hidden'}}>
      <header>about</header>
      <main className={styles.content}>
        <section className={styles.imgContainer}>
          <Image src={heroImage} alt="Jess Ford" height={263} width={223} priority />
        </section>
        <section className={styles.textContainer}>
          <div>
            <h1 className={styles.title}>Introduction</h1>
            <hr />
            <p className={styles.bioCopy}>
              Whether you&#39;re preparing for birth, seeking postpartum care, or facing perinatal loss at any stage, these profound human experiences require tender support and guidance. My approach to doula work is calm, encouraging and adaptive. I believe each experience is unique and will meet you where you are at in order to provide personalized care. You can expect transparency when working with me, and I will work collaboratively to find the best methods and resources that work specifically for you. I will learn, grow and adapt alongside my clients and want you to feel empowered and safe the entire way. I am passionate that your journey should be cared for with just as much intent no matter the circumstance, and want you to be in enlightened, in control of your body and informed of your choices. Born and raised in the Detroit Metro area, I graduated from The University of Michigan where I received my BFA, focusing on painting and fiber art. I began my birth and postpartum doula career in 2017, expanded into full spectrum care, and am now continuing my education in maternal mental health and healing art therapy. I am currently based on Tongva Land / Los Angeles, CA, serving people virtually as well.
            </p>
          </div>
          <div>
            <h1 className={styles.title}>Certifications + Trainings</h1>
            <hr />
            <ul>
              {Trainings.map((training, index) => (
                <li key={index} className={styles.training}>
                  <h2>{training.course}</h2>
                  <p>{training.org} {training.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}