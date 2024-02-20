"use client"
import Head from "next/head";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { motion, useAnimation } from "framer-motion";
import Reveal from "../../../components/Reveal";
import styles from "../banking/banking.module.css"
import CTAD from "../../../components/ctad";
import { useEffect } from "react";

export default function Banking(){

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
                >BANKING INSURANCE & FINANCE</motion.h1>              
            </div>

            <div className={styles.contentInt}>
               <div className={styles.contentIntService}>
                    <Reveal>
                        <p>One of GCO LAW&apos;S strategic and traditional areas of practice has been in the banking and finance sectors. 
                            Our banking and finance lawyers have been engaged in finance and insurance impasse over the past years.
                        
                        Our dynamic banking team combines a high level of expertise with innovative thinking to provide sound advice
                            and practical solutions.
                        
                        We negotiate banking and security facilities, disposals, bond restructuring, debt and project financing, schemes of 
                            arrangement and capital raising for you. We also conduct due diligence in any part of the country.
                        </p>
                    </Reveal>
               </div>
                <div className={styles.services}>
                    <Reveal>
                        <p><span>Our areas of services include:</span></p>
                    </Reveal>
                    <Reveal>
                        <div className={styles.text}>
                            <i class="fa-solid fa-angles-right"></i> 
                            <p>Preparing and perfecting all forms of security and financial documentation.</p>
                        </div>
                    </Reveal>
                   <Reveal>
                        <div className={styles.text}>
                            <i class="fa-solid fa-angles-right"></i>
                            <p>Debt structuring, project finance and asset finance.</p>
                        </div>
                   </Reveal>
                    <Reveal>
                        <div className={styles.text}>
                            <i class="fa-solid fa-angles-right"></i>
                            <p>Drafting and reviewing policies and other commercial agreements.</p>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={styles.text}>
                            <i class="fa-solid fa-angles-right"></i>
                            <p>Advising on regulatory compliance and on evolving banking and finance
                                legistation.
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