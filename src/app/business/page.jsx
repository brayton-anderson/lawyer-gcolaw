"use client"
import Head from "next/head";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { motion, useAnimation } from "framer-motion";
import Reveal from "../../../components/Reveal";
import styles from "../business/business.module.css";
import CTAD from "../../../components/ctad";
import { useEffect } from "react";

export default function Business(){


    const controls = useAnimation();

    useEffect(() => {
      const elements = document.querySelectorAll(".scroll-trigger");
  
      function handleScroll() {
          elements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementHeight = element.clientHeight;
        
            // Check if the element is in the viewport
            if (elementTop < window.innerHeight - elementHeight / 2 && !element.hasAnimated) {
              controls.start({ opacity: 1, y: 0, scale: 1 });
              element.hasAnimated = true; 
            }
          });
        }
        
  
      
      handleScroll();
  
      
      window.addEventListener("scroll", handleScroll);
  
      
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [controls]); 

    return(
        <>
         <Head>     
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;600&family=Kalam:wght@300;400;700&family=Satisfy&display=swap" rel="stylesheet"/>                   
                <link href="https://fonts.googleapis.com/css2?family=Philosopher&family=Poppins:wght@100;300;500;600&display=swap" rel="stylesheet"/>                      
            </Head>    
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerPolicy="same-origin"/> 
                   
        
        <Navbar/>
        {/* HERO SECTION 1 */}
        <div className={styles.section1}>
            <motion.h1
                className={`scroll-trigger ${styles.cont}`}
                initial={{ opacity: 0, y: -50, scale: 0.5 }}
                animate={controls}
                transition={{ duration: 1, delay: .9 }}
            >BUSINESS ESTABLISHMENT</motion.h1>              
        </div>

        <div className={styles.contentInt}>
            <div className={styles.contentIntService}>
                <Reveal>
                    <p>Starting a business is both exhilarating and challenging. Here at GCO LAW, we recommend a comprehensive approach to
                        business structuring that addresses both the short-term and long-term goals of the investor.
                        The teams broad base in developing corporate vehicles and structures ensures that our clients benefit and facilitates
                        business transactions including those of a transnational nature. 
                    </p>
                </Reveal>
            </div>
            <div className={styles.services}>
                <Reveal>
                    <p><span>We are therefore positioned to:</span></p>
                </Reveal>
                <Reveal>
                    <div className={styles.text}>
                        <i class="fa-solid fa-angles-right"></i>
                        <p>Advise on company and business formation compliance.</p>
                    </div>
                </Reveal>
                <Reveal>
                    <div className={styles.text}>
                        <i class="fa-solid fa-angles-right"></i>
                        <p>Prepare business contracts and prospectuses, corporate advises.</p>
                    </div>
                </Reveal>
                <Reveal>
                    <div className={styles.text}>
                        <i class="fa-solid fa-angles-right"></i>
                        <p>Partnership agreement and advising in relation thereto.</p>
                    </div>
                </Reveal>
                <Reveal>
                    <div className={styles.text}>
                        <i class="fa-solid fa-angles-right"></i>
                        <p>Represent client in foreign business acquisition and share and asset transactions.
                        </p>
                    </div>
                </Reveal>
            </div>
        </div>

        {/* cta */}
        <CTAD/>

        <Footer/>
        </>
    )
}