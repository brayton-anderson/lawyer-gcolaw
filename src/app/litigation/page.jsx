"use client"
import Head from "next/head";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { motion, useAnimation } from "framer-motion";
import Reveal from "../../../components/Reveal";
import styles from "../litigation/litigation.module.css"
import CTAD from "../../../components/ctad";
import { useEffect } from "react";

export default function Litigation(){

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
                >LITIGATION</motion.h1>             
            </div>


            <div className={styles.contentInt}>
                <Reveal>
                    <p>Litigation is known to be lengthy and drawn out process. Our lawyers use litigation as a tool 
                        of last resort to obtain the best possible outcome for our clients while refusing to let it 
                        become a war of words played between lawyers at client's expense.
                        Our litigation team of experienced trial lawyers is accomplished and highly skilled advocates dedicated to 
                                producing results.
                    </p>
                </Reveal>
                    {/* <p>We strive to avoid ligitation altogether and to resolve matters constructively, tailoring our approach to maximizethe 
                        the swift return of monies owed, whenpossible.
                    </p>
                    <br /><p>At GCO LAW, we employ a commercially focused approach to problems faced and a thorough analysis of all 
                        dispute matters.
                    </p> */}
            </div>

             {/* cta */}
             <CTAD/>
            <Footer/>
        </>
    )
}