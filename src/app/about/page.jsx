"use client"
import Head from "next/head";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { motion, useAnimation } from "framer-motion";
import styles from "../about/about.module.css"
import CTA from "../../../components/cta";
import CTAD from "../../../components/ctad";
import Reveal from "../../../components/Reveal";
import { useEffect } from "react";

export default function About(){

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
                <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;600&family=Kalam:wght@300;400;700&family=Satisfy&display=swap" rel="stylesheet"></link>               
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
                    >ABOUT US</motion.h1>   
                           
            </div>

            {/* section content */}
            <div className={styles.content}>               
                    <Reveal customStyles={{ overflow: "visible" }}>
                    <h5>GET TO KNOW</h5>
                    </Reveal>
                    <Reveal customStyles={{ overflow: "visible" }}>
                        <h2>GAKUNJU & CO. ADVOCATES</h2>
                    </Reveal>
                             
                
                
                <div className={styles.wrapperAbout}>
                    <div className={styles.leftContent}>
                    <Reveal>
                        
                            <p className={styles.text}><span>Gakunju & Co. Advocates is a boutique corporate, commercial and tax law firm operating
                            in Kiambu and Nairobi, with our regional reach across several jurisdictions.</span></p>
                        
                      
                            <br /><p>We have proven expertise and experience. In providing legal and tax advisory services to local and multi-national corporates
                                    and high net worth individuals.
                                We offer our clients innovative, efficient and practical solutions.
                                Through a team of highly trained, skilled and experienced lawyers, we ensure that our service offering to clients not only 
                                    meets but continually exceeds expectations.
                                
                                We see ourselves as partners with our clients, ensuring we understand their business and their needs to provide effective and 
                                    pragmatic legal solutions.</p>
                       
                        
                            <br /><p>We are consistently innovating the practice of law, exploring every avenue to enhance our firm for the benefit of our team, 
                                clients, and communities.
                            </p>
                            </Reveal>
                    </div>
                    <div className={styles.rightContent}>
                        <Reveal>
                            <div className={styles.picAbout}>                            
                                <img src="../assets/js1.jpg" alt="about" className="About-Pic" />                        
                            </div>
                        </Reveal>
                        
                        <Reveal>
                        <div className={styles.card}>
                            <p>                               
                                ...tilting the scales of justice in favour of our clients 
                                ...our mantra.                             
                            </p>
                        </div>
                        </Reveal>
                    </div>
                </div>
                        
            </div>

            {/* about section 3 */}
                <Reveal>
            <div className={styles.beilefs}>
                    <h2>OUR CORE BELIEFS</h2>
               

                    
                <div className={styles.beilefsWrapper}>
                    
                        <div className={styles.bw1}>
                            <i class="fa-regular fa-handshake"></i>
                            <div className={styles.infoBW1}>
                            <h5>We are accessible to our clients</h5>
                            <p>At the forefront of our commitments is customer service excellence. We allocate dedicated airtime for client 
                                meetings and extend our services online to ensure our clients are always 
                                well-informed about the progress of their case.
                            </p>
                            </div>
                        </div>
                        <div className={styles.bw1}>
                            <i class="fa-solid fa-hourglass-end"></i>
                            <div className={styles.infoBW1}>
                            <h5>We are result oriented</h5>
                            <p>Frequently, we encounter novel and distinctive situations. 
                                Our pride lies in navigating through intricate cases,
                                consistently striving to discover tailored solutions that best serve our clients.
                            </p>
                            </div>
                        </div>
                        <div className={styles.bw1}>
                        <i class="fa-solid fa-scale-balanced"></i>
                            <div className={styles.infoBW1}>
                            <h5>We believe in accountability</h5>
                            <p>We stand firmly by our words and actions. When we commit to fighting for our clients, 
                                we wholeheartedly dedicate 100% effort to uphold that promise.
                            </p>
                            </div>
                        </div>
                </div>
            </div>
                    </Reveal>
            {/* cta */}
            <CTAD/>
            <CTA/>
            <Footer/>
        </>
    )
}