"use client"
import Head from "next/head";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { motion, useAnimation } from "framer-motion";
import Reveal from "../../../components/Reveal";
import styles from "../employment/employment.module.css"
import CTAD from "../../../components/ctad";
import { useEffect } from "react";

export default function Employment(){

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
                >EMPLOYMENT & RETIREMENT BENEFITS</motion.h1>              
            </div>

            <div className={styles.contentInt}>
               <div className={styles.contentIntService}>
                    <Reveal>
                        <p>We are cognizant of the fact that employment law is constantly evolving making it a challenging area. We 
                            therefore strive to offer our clients comprehensive legal and practical advice in contentious, and non-contentious 
                            areas of employment law.
                            Addressing conflicts between employers and employees is an expensive and time-consuming affair. We strive to produce constructive, fair, and morale-boosting workplace solutions. 
                        </p>
                    </Reveal>
                    
                    <Reveal>
                        <br /><p> We strongly believe in preventive law practices where 
                            we advise slients on measures that anticipate possible areas of comflict and provide compromise solutions that suit both 
                            the employer and employee needs. 
                        If, despite such measures conflicts develop, GCO LAW, focuses at the first instance on finding expenditious and definitive 
                            solutions through negotiation and mediation rather than pursuing court redress.
                        </p>
                    </Reveal>
               </div>
                <div className={styles.services}>
                    <Reveal>
                        <p><span>Our team is engaged in a wide range of services that include:</span></p>
                    </Reveal>
                    <Reveal>
                        <div className={styles.text}>
                            <i class="fa-solid fa-angles-right"></i> 
                            <p>Preparation and review of employment contracts including service agreements, misconduct procedures and staff termonation matters.</p>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={styles.text}>
                            <i class="fa-solid fa-angles-right"></i>
                            <p>Preparation and review of company policies and regulations.</p>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={styles.text}>
                            <i class="fa-solid fa-angles-right"></i>
                            <p>Advising on pension and retirement benefits.</p>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={styles.text}>
                            <i class="fa-solid fa-angles-right"></i>
                            <p>Represent companies in negotiation with trade unions, drafting and reviewing of collecting bargaining agreements.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={styles.text}>
                            <i class="fa-solid fa-angles-right"></i>
                            <p>Advising on indemnity, public liability, product liability and workers&apos; 
                                compensation.
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