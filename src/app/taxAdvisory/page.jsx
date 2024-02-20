"use client"
import Head from "next/head";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { motion, useAnimation } from "framer-motion";
import Reveal from "../../../components/Reveal";
import styles from "../taxAdvisory/tax.module.css"
import CTAD from "../../../components/ctad";
import { useEffect } from "react";

export default function TaxAdvisory(){

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
                >TAX ADVISORY & DISPUTE RESOLUTION</motion.h1>             
            </div>


            <div className={styles.contentInt}>
                <Reveal>
                    <p>If not properly managed, tax can negatively impact the cash flows and profitablity of a business. Our in house 
                        tax team advises on optimal tax structures and assists corporates and high net worth individuals in their planning.
                    </p>
                </Reveal> 
                <Reveal>
                    <br /><p>We undertake healthy and independent assessment of the compliance status of our clients and make recommendations 
                            based on our findings. We also advise on tax implications for corporate mergers, acquisitons and re-organisations and 
                            investment vehicles and structures.
                    </p>
                </Reveal>
                <Reveal>
                    <br /><p>We assist clients in resolution of tax disputes through alternative dispute resolution and representation at the tax 
                            appeals tribunal and the High Court. 
                            </p>
                </Reveal>
                <Reveal>
                <p>We also provide clients with technical support during Kenya Revenue Audits.
                </p>
                </Reveal>
                {/*<br /><p>At GCO LAW, we employ a commercially focused approach to problems faced and a thorough analysis of all 
                    dispute matters.
                </p> */}
            </div>

             <CTAD/>
            <Footer/>
        </>
    )
}