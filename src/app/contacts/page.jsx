"use client"
import Head from "next/head"
import Navbar from "../../../components/navbar"
import Footer from "../../../components/footer"
import { motion, useAnimation } from "framer-motion"
import Reveal from "../../../components/Reveal"
import styles from "../contacts/contacts.module.css"
import CTA from "../../../components/cta"
import { useEffect } from "react"


export default function Contacts(){

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
                
                <link rel="icon" href="/logo.png" /> 
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;600&family=Kalam:wght@300;400;700&family=Satisfy&display=swap" rel="stylesheet"/>             
            </Head>
            
            
            <link href="https://fonts.googleapis.com/css2?family=Philosopher&family=Poppins:wght@100;300;500;600&display=swap" rel="stylesheet"/>
            <link rel="styleSheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="styleSheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
            <link rel="styleSheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
            
            <Navbar/>
            {/* HERO SECTION 1 */}
            <div className={styles.section1}>
                <motion.h1
                    className={`scroll-trigger ${styles.cont}`}
                    initial={{ opacity: 0, y: -50, scale: 0.5 }}
                    animate={controls}
                    transition={{ duration: 1, delay: .9 }}
                >Contact Us</motion.h1>              
            </div>
            <div className={styles.wrapper}>
                <Reveal customStyles={{ overflow: "visible" }}>
                    <h2>Our Offices Locations</h2>
                </Reveal>
                <div className={styles.locations}>
                   <Reveal>
                        <div className={styles.card}>
                            <h4>HEAD OFFICE</h4>
                            <p>Kikinga House Annex</p>
                            <p>5th Floor, Suite 501</p>
                            <p>Biashara Street/Kiambu Road</p>
                            <p>P.O Box 1555-00900</p>
                            <p>KIAMBU</p>
                        </div>
                   </Reveal>
                    
                    <Reveal>
                        <div className={styles.card}>
                            <h4>ELDORET OFFICE</h4>
                            <p>Safina Plaza</p>
                            <p>2nd Floor, Room S14</p>
                            <p>Ronald Ngala Street</p>
                            <p>P.O Box 10360-30100</p>
                            <p>ELDORET</p>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={styles.card}>
                            <h4>NYERI OFFICE</h4>
                            <p>Gatemu House</p>
                            <p>4th Floor</p>
                            <p>Moi Avenue</p>
                            <p>P.O Box 2270-10100</p>
                            <p>NYERI</p>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={styles.card}>
                            <h4>RUIRU OFFICE</h4>
                            <p>SNN Plaza</p>
                            <p>4th Floor, Room 4</p>
                            {/* <p>Biashara Street/Kiambu Road</p>
                            <p>P.O Box 1555-00900</p> */}
                            <p>RUIRU</p>
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* cta & form  */}
            <CTA/>
            <Footer/>
        </>
    )
}