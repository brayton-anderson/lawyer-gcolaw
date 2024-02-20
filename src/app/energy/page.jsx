"use client"
import Head from "next/head";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { motion, useAnimation } from "framer-motion";
import Reveal from "../../../components/Reveal";
import styles from "../energy/energy.module.css"
import CTAD from "../../../components/ctad";
import { useEffect } from "react";

export default function Energy(){

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
                >ENERGY & NATURAL RESOURCES</motion.h1>              
            </div>

            <div className={styles.contentInt}>
               <div className={styles.contentIntService}>
                    <Reveal>
                        <p>The firm has recently expanded into the field of Energy and Natural Resources by 
                            advising investors, state-owned companies and government entities.
                        The energy sector is a huge capital-intensive industry that is highly regulated hence,  
                            compliance issues are a top priority for energy companies. </p>
                    </Reveal>
                    <Reveal>
                        <br /><p>Our team works tirelessly to ensure our clients are 
                            provided with seamless,sophisticated and forward-thinking advice always. 
                        
                        We can dissect complex matters quickly thereby ensuring our clients are afforded the innovative and pragmatic 
                            solutions they need.
                        </p>
                    </Reveal>
               </div>
                <div className={styles.services}>
                    <Reveal>
                        <p><span>Our services include:</span></p>
                    </Reveal>
                    <Reveal>
                        <div className={styles.text}>
                            <i class="fa-solid fa-angles-right"></i> 
                            <p>Advising our clients on the legal and regulatory aspects of the energy industry to ensure 
                                compliance with the law.
                            </p>
                        </div>
                    </Reveal>
                   <Reveal>
                        <div className={styles.text}>
                            <i class="fa-solid fa-angles-right"></i>
                            <p>Advising our clients on the environment legislations and safety regulations relating 
                                to their operations that have a significant impact on their operations.
                            </p>
                        </div>
                   </Reveal>
                    <Reveal>
                        <div className={styles.text}>
                            <i class="fa-solid fa-angles-right"></i>
                            <p>Consulting and advising in the development, construction and financing of energy infrastructure 
                                projects.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={styles.text}>
                            <i class="fa-solid fa-angles-right"></i>
                            <p>Participation in negotiations and representation before administrative bodies.
                            </p>
                        </div>
                    </Reveal>
                    {/* <div className={styles.text}>
                        <i class="fa-solid fa-angles-right"></i>
                        <p>Advising on indemnity, public liability, product liability and workers&apos; 
                            compensation.
                        </p>
                    </div> */}
                </div>
            </div>
            {/* cta */}
            <CTAD/>

            <Footer/>
        </>
    )
}