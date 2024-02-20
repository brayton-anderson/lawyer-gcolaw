"use client"
import Head from "next/head";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { motion, useAnimation } from "framer-motion";
import Reveal from "../../../components/Reveal";
import styles from "../mergers/mergers.module.css"
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
                >MERGERS & ACQUISITIONS & JOINT VENTURES</motion.h1>              
            </div>

            <div className={styles.contentInt}>
               <div className={styles.contentIntService}>
                    <Reveal>
                        <p>Kenya as a developing state and a regional hub has attracted significant investments and has occasioned 
                            several corporate developments in the recent past. 
                        GCO LAW is at the crest of the corporate wave in delivering unparalleled services with a highly responsive and 
                            innovative team.
                        </p>
                    </Reveal>
                     <Reveal>
                        <br /><p>For each transaction, we assemble a team of experienced legal professionals who have a profound understanding of 
                            local and international business practices to handle any challenges that your business or organization may be facing.
                        </p>
                     </Reveal>
                    {/*
                    <br /><p>We can dissect complex matters quickly thereby ensuring our clients are afforded the innovative and pragmatic 
                        solutions they need.
                    </p> */}
               </div>
                <div className={styles.services}>
                    <Reveal>
                        <p><span>We offer our clients a full package of services in structuring and implementing 
                            such transactions including:</span></p>
                    </Reveal>
                    <Reveal>
                        <div className={styles.text}>
                            <i class="fa-solid fa-angles-right"></i> 
                            <p>Due diligence.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={styles.text}>
                            <i class="fa-solid fa-angles-right"></i>
                            <p>Strategic investment and alliances.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={styles.text}>
                            <i class="fa-solid fa-angles-right"></i>
                            <p>Advising on corporate reorganizations.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={styles.text}>
                            <i class="fa-solid fa-angles-right"></i>
                            <p>Drafting of joint ventures, agreements and other transaction documents.
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