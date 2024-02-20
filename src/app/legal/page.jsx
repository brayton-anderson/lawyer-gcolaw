"use client"
import Head from "next/head";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { motion, useAnimation } from "framer-motion";
import Reveal from "../../../components/Reveal";
import styles from "../legal/legal.module.css"
import CTAD from "../../../components/ctad";
import { useEffect } from "react";

export default function Legal(){

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
                >LEGAL DUE DILIGENCE AND ADVISORY</motion.h1>              
            </div>

            <div className={styles.contentInt}>
               <div className={styles.contentIntService}>
                    <Reveal>
                        <p>In an ever-changing corporate climate and fas growing markets, there is need for business to adopt 
                            effective adaptation strategies. 
                        At GCO LAW, we assist businesses position themselves for success by providing tailor made legal 
                            due diligence. 
                        We anticipate change and provide our clients with the intelligence and insight to arrive at the most 
                            effective and lasting solutions to protect their interests.
                        </p>
                    </Reveal>
                    {/*
                    <br /><p>We can dissect complex matters quickly thereby ensuring our clients are afforded the innovative and pragmatic 
                        solutions they need.
                    </p> */}
               </div>
                <div className={styles.services}>
                    <Reveal>
                        <p><span>Some of the services offered include:</span></p>
                    </Reveal>
                    <Reveal>
                        <div className={styles.text}>
                            <i class="fa-solid fa-angles-right"></i> 
                            <p>Review and drafting of relevant client contracts and documentation.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={styles.text}>
                            <i class="fa-solid fa-angles-right"></i>
                            <p>Preparation of Legal opinions and due diligence findings.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={styles.text}>
                            <i class="fa-solid fa-angles-right"></i>
                            <p>Conducting legal audits.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={styles.text}>
                            <i class="fa-solid fa-angles-right"></i>
                            <p>Land title investigations.
                            </p>
                        </div>
                    </Reveal>
                    {/* <div className={styles.text}>
                        <i class="fa-solid fa-angles-right"></i>
                        <p>Development of copyright programs and guidlines.
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