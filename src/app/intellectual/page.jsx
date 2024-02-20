"use client"
import Head from "next/head";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { motion, useAnimation } from "framer-motion";
import Reveal from "../../../components/Reveal";
import styles from "../intellectual/intellectual.module.css"
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
                >INTELLECTUAL PROPERTY</motion.h1>              
            </div>

            <div className={styles.contentInt}>
               <div className={styles.contentIntService}>
                    <Reveal>
                        <p>At the effective acquisition and protection of intellectual rights gains prominence and importance 
                            in today's competitive business environment. 
                        GCO LAW intellectual practice is uniquely qualifed to assist clients in achieving the objectives.</p>
                    </Reveal>
                    {/* <br /><p>The energy sector is a huge capital-intensive industry that is highly regulated hence,  
                        compliance issues are a top priority for energy companies. Our team worls tirelessly to ensure our clients are 
                        provided with seamless,sophisticated and forward-thinking advice always. 
                    </p>
                    <br /><p>We can dissect complex matters quickly thereby ensuring our clients are afforded the innovative and pragmatic 
                        solutions they need.
                    </p> */}
               </div>
                <div className={styles.services}>
                    <Reveal>
                        <p><span>Our team is involved in various intellectual property transactions, development and enforcement, including:</span></p>
                    </Reveal>
                   <Reveal>
                        <div className={styles.text}>
                            <i class="fa-solid fa-angles-right"></i> 
                            <p>Trademark registration and dispute resolution.
                            </p>
                        </div>
                   </Reveal>
                    <Reveal>
                        <div className={styles.text}>
                            <i class="fa-solid fa-angles-right"></i>
                            <p>Franchise amd licensing.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={styles.text}>
                            <i class="fa-solid fa-angles-right"></i>
                            <p>Patent registration, and infringement actions.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={styles.text}>
                            <i class="fa-solid fa-angles-right"></i>
                            <p>Advising on copyright protection and enforcement.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={styles.text}>
                            <i class="fa-solid fa-angles-right"></i>
                            <p>Development of copyright programs and guidlines.
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