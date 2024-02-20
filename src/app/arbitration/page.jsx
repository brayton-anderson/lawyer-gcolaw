"use client"
import Head from "next/head";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { motion, useAnimation } from "framer-motion";
import Reveal from "../../../components/Reveal";
import styles from "../arbitration/abitration.module.css"
import CTAD from "../../../components/ctad";
import { useEffect } from "react";
export default function Abitration(){

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
                >ARBITRATION & MEDIATION</motion.h1>             
            </div>


            <div className={styles.contentInt}>
                <Reveal>
                    <p><span>GCO LAW</span> has a strong background in litigation which has positioned us among the best
                        arbitrators and mediators. Arbitration and mediation are increasingly becoming the preferred modes
                        of alternative dispute resolution(ADR). The courts in general, have embraced and appreciated the 
                        merits of arbitration and mediation.</p>
                </Reveal>
                <Reveal>
                    <br /><p>Our team, known for its preventive law practice, is able to advice clients on how to reach mutually agreeable
                        settlements while maximizing the opportunity to achieve the most favourable outcome. 
                    We strive to avoid litigation altogether and to resolve matters constructively, tailoring our approach towards fostering 
                    positive and productive cordial relationship; the principal tent of ADR. 
                    
                </p>
                </Reveal>
                <Reveal>
                    <br /><p>At GCO LAW, we employ a commercially focused approach to problems faced and a thorough analysis of all 
                        dispute matters.
                    </p>
                </Reveal>
            </div>

             {/* cta */}
             <CTAD/>
            <Footer/>
        </>
    )
}