"use client"
import Head from "next/head"
import { motion, useAnimation } from "framer-motion"
import styles from "../practiceAreas/practice.module.css"
import Navbar from "../../../components/navbar"
import Footer from "../../../components/footer"
import CTA from "../../../components/cta"
import CTAD from "../../../components/ctad"
import Reveal from "../../../components/Reveal"
import { useEffect } from "react"

export default function practiceAreas(){

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
                >Areas Of Practice</motion.h1> 
                             
            </div>

            <div className={styles.reasonSection}>                
                <div className={styles.reasonWrapper}>
                    <Reveal>
                        <div className={styles.reasonBox}>                  
                            <div className={styles.reasonImage}>
                                {/* <i class="fa-solid fa-file-contract"></i> */}
                                <i class="fa-solid fa-handshake"></i>
                            </div>
                            
                            <div className={styles.reasonText}>
                                {/* <span>06 April 2023/ Email Marketing</span> */}
                                <h6 className={styles.reasonTitle}>ARBITRATION & MEDIATION</h6>
                                <p>We have a strong background in ligitation which has positioned us among the 
                                    best arbitration lawyers in Kenya.
                                </p>
                                <a href="/arbitration">Read More</a>
                            </div>
                        </div>
                    </Reveal>
                   <Reveal>
                    <div className={styles.reasonBox}>                  
                            <div className={styles.reasonImage}>
                                {/* <i class="fa-solid fa-building"></i> */}
                                <i class="fa-solid fa-money-check-dollar"></i>
                            </div>
                            
                            <div className={styles.reasonText}>
                                {/* <span>06 April 2023/ Email Marketing</span> */}
                                <h6 className={styles.reasonTitle}>BANKING INSURANCE & FINANCE</h6>
                                <p>One of our strategic and traditional areas of practice has been banking and 
                                    finance sectors. Our banking and finance lawyers have been involved in major banking, finance and insurance over the tears.
                                </p>
                                <a href="/banking">Read More</a>
                            </div>
                        </div>
                   </Reveal>
                    <Reveal>
                        <div className={styles.reasonBox}>                  
                            <div className={styles.reasonImage}>
                                <i class="fa-solid fa-sign-hanging"></i>
                                <i class="fa-brands fa-x-twitter"></i>
                            </div>
                            
                            <div className={styles.reasonText}>
                                {/* <span>06 April 2023/ Email Marketing</span> */}
                                <h6 className={styles.reasonTitle}>BUSINESS ESTABLISHMENT</h6>
                                <p>Starting a business is both exhilirating and challenging. Here at GCO LAW, we recommend
                                    a comprehensive approach to business structuring that addresses both the short-term 
                                    and long-term goals of the investor.
                                </p>
                                <a href="/business">Read More</a>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={styles.reasonBox}>                  
                            <div className={styles.reasonImage}>
                                <i class="fa-solid fa-money-check-dollar"></i>
                            </div>
                            
                            <div className={styles.reasonText}>
                                {/* <span>06 April 2023/ Email Marketing</span> */}
                                <h6 className={styles.reasonTitle}>EMPLOYMENT & RETIREMENT BENEFITS</h6>
                                <p>We are cognizant of the fact that employment law is constantly evolvin gmaking it a challenging area. We therfore
                                    strive to offer our clients comprehensive
                                </p>
                                <a href="/employment">Read More</a>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={styles.reasonBox}>                  
                            <div className={styles.reasonImage}>
                                {/* <i class="fa-solid fa-percent"></i> */}
                                <i class="fa-solid fa-oil-can"></i>
                                {/* <i class="fa-solid fa-oil-well"></i> */}
                            </div>
                            
                            <div className={styles.reasonText}>
                                {/* <span>06 April 2023/ Email Marketing</span> */}
                                <h6 className={styles.reasonTitle}>ENERGY & NATURAL RESOURCES</h6>
                                <p>We have expaned into the field of Energy and Naturtal Resources by advising investors, state-owned companies
                                    and government entities.
                                </p>
                                <a href="/energy">Read More</a>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={styles.reasonBox}>                  
                            <div className={styles.reasonImage}>
                                {/* <i class="fa-solid fa-file-contract"></i> */}
                                <i class="fa-solid fa-percent"></i> 
                            </div>
                            
                            <div className={styles.reasonText}>
                                {/* <span>06 April 2023/ Email Marketing</span> */}
                                <h6 className={styles.reasonTitle}>INTELLECTUAL PROPERTY</h6>
                                <p>As the effective and protwction of intellectual rights gains prominence and importance in today's competitive business
                                    environment. GCO LAW intellectual practice is uniquely qualified to assist 
                                    clients in achieving the objectives.
                                </p>
                                <a href="/intellectual">Read More </a>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={styles.reasonBox}>                  
                            <div className={styles.reasonImage}>
                                <i class="fa-solid fa-file-contract"></i>
                            </div>
                            
                            <div className={styles.reasonText}>
                                {/* <span>06 April 2023/ Email Marketing</span> */}
                                <h6 className={styles.reasonTitle}>LEGAL DUE DILIGENCE & ADVISORY</h6>
                                <p>In an ever-changing corporate climate and fast growing markets, there is need for businesses to adopt
                                    effective adaptation strategies. At GCO LAW,
                                </p>
                                <a href="/legal">Read More </a>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={styles.reasonBox}>                  
                            <div className={styles.reasonImage}>
                                {/* <i class="fa-solid fa-file-contract"></i> */}
                                <i class="fa-solid fa-scale-balanced"></i>
                            </div>
                            
                            <div className={styles.reasonText}>
                                {/* <span>06 April 2023/ Email Marketing</span> */}
                                <h6 className={styles.reasonTitle}>LITIGATION</h6>
                                <p>Litigation is known to be lengthy and drawn out process. Our lawyers at GCO LAW use ligitation as a tool of last 
                                    resort to obtain the best possible oiutcome for our clients
                                </p>
                                <a href="/litigation">Read More </a>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={styles.reasonBox}>                  
                            <div className={styles.reasonImage}>
                                <i class="fa-solid fa-file-contract"></i>
                            </div>
                            
                            <div className={styles.reasonText}>
                                {/* <span>06 April 2023/ Email Marketing</span> */}
                                <h6 className={styles.reasonTitle}>MERGERS & ACQUISITION </h6>
                                <p>Kenya as a developing state and a regional hub has attracted significant investments
                                    and has occasioned several corporate developments on the recent past.
                                </p>
                                <a href="/mergers">Read More </a>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={styles.reasonBox}>                  
                            <div className={styles.reasonImage}>
                                {/* <i class="fa-solid fa-file-contract"></i> */}
                                <i class="fa-solid fa-sign-hanging"></i>
                            </div>
                            
                            <div className={styles.reasonText}>
                                {/* <span>06 April 2023/ Email Marketing</span> */}
                                <h6 className={styles.reasonTitle}>PROBATE & ESTATE MANAGEMENT</h6>
                                <p>The process of probate is often accompanied with feelings of painful loss. At GCO LAW, 
                                    we recognize that the administration of a deceased person's  
                                </p>
                                <a href="/probate">Read More </a>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={styles.reasonBox}>                  
                            <div className={styles.reasonImage}>
                                {/* <i class="fa-solid fa-file-contract"></i> */}
                                {/* <i class="fa-solid fa-sign-hanging"></i> */}
                                <i class="fa-solid fa-building"></i>
                            </div>
                            
                            <div className={styles.reasonText}>
                                {/* <span>06 April 2023/ Email Marketing</span> */}
                                <h6 className={styles.reasonTitle}>REAL ESTATE & CONVEYANCING</h6>
                                <p>We offer legal and tax advisory in the real estate sector to property developers, property 
                                    buyers and financers alike. This entails 
                                </p>
                                <a href="/conveyancing">Read More </a>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={styles.reasonBox}>                  
                            <div className={styles.reasonImage}>
                                {/* <i class="fa-solid fa-file-contract"></i> */}
                                <i class="fa-solid fa-sign-hanging"></i>
                            </div>
                            
                            <div className={styles.reasonText}>
                                {/* <span>06 April 2023/ Email Marketing</span> */}
                                <h6 className={styles.reasonTitle}>REAL ESTATE & PROPERTY MGMT</h6>
                                <p>We offer legal and tax advisory in the real estate sector to property developers, property 
                                    buyers and financers alike. This entails 
                                </p>
                                <a href="/propertyManagement">Read More </a>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={styles.reasonBox}>                  
                            <div className={styles.reasonImage}>
                                <i class="fa-solid fa-file-contract"></i>
                            </div>
                            
                            <div className={styles.reasonText}>
                                {/* <span>06 April 2023/ Email Marketing</span> */}
                                <h6 className={styles.reasonTitle}>TAX ADVISORY & DISPUTE RESOLUTION</h6>
                                <p>If not properly managed, taxes can negatively impact the cash flows and profitability of a business. Our in house tax team
                                </p>
                                <a href="/taxAdvisory">Read More </a>
                            </div>
                        </div>
                    </Reveal>
                    
                </div>
            </div>

            {/* cta */}
            <CTAD/>
            <CTA/>

            <Footer/>
        </>
    )
}