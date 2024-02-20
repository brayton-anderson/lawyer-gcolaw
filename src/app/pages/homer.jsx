"use client"
import Head from "next/head"
import { IoMailOpen } from "react-icons/io5";
import Navbar from "../../../components/navbar"
import Footer from "../../../components/footer"
import styles from "../styles/homer.module.css"
import { motion, useAnimation} from "framer-motion"
import { useInView } from "react-intersection-observer";
import CTA from "../../../components/cta"
import { useEffect, useRef, useState } from "react"
import CTAD from "../../../components/ctad"
import Reveal from "../../../components/Reveal";

const Homer = () => {

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
            
            <div className={styles.containerInfo}>
                <video src="../assets/video3.mp4" autoPlay loop muted className={styles.video}/>
                <motion.div                
                className={`scroll-trigger ${styles.content}`}
                    initial={{ opacity: 0, y: -50, scale: 0.5 }}
                    animate={controls}
                    transition={{ duration: 1, delay: .9 }}
                >                    
                    <h1>The <span>Client</span> Partners</h1>
                </motion.div>  
            </div>

            <div className={styles.aboutsection}>
                <div className={styles.left}>
                        <div className={styles.aboutImage}>
                            <Reveal>
                                <img src="../logo.png" alt="Logo" className="about-img" />
                            </Reveal>
                        </div>
                    
                    
                        <div className={styles.abouttext}>
                        <Reveal customStyles={{ overflow: "visible" }}>
                            <h1 > Gakunju & Co. Advocates</h1>
                        </Reveal>
                        </div>
                    
                </div>
                <div 
                className={styles.right}                                    >
                    <Reveal>
                    <h2>Welcome to <span>Gakunju & Co. Advocates</span></h2>
                    </Reveal>
                    <Reveal>
                    <p>Gakunju & Co. Advocates is a boutique corporate, commercial and tax law firm operating
                        in Kiambu and Nairobi, with our regional reach across several jurisdictions.
                    </p>
                    </Reveal>
                    <Reveal>
                    <p><br />We have proven expertise and experience. In providing legal and tax advisory services to local and multi-national corporates
                        and high net worth individuals.
                        <br></br> We offer our clients innovative, efficient and practical solutions.
                    </p>
                    </Reveal>
                    
                    <Reveal>
                        <div className={styles.read_btn}>
                            <a href="/about">READ MORE</a>
                        </div>

                    </Reveal>
                </div>
            </div>
            <div className={styles.section11}></div>
            <div className={styles.whySection}>
                <Reveal customStyles={{ overflow: "visible" }}>
                    <h2><span>WHY US</span></h2>
                </Reveal>
                <div className={styles.whyWrapper}>
                    <div className={styles.whySectionLeft}>                       
                        <Reveal>
                        <span>What Sets Us Apart</span>
                        </Reveal>
                        <Reveal>
                        <p className={styles.text}>We are known for our warm and welcoming atmosphere where you
                            can be sure of close personal attention, immediate access, current knowledge, vale in 
                            every respect and aggressive representation.</p>
                        </Reveal>
                        
                        <Reveal>
                        <br /><p>With the attention of one lawyer, backed by the expertise of many, we are the only legal 
                            provider that gives businesses and everyday people access to expert legal services. </p>
                        </Reveal>
                            <Reveal>
                            <br /><p>Legal challenges can feel confusing, even intimidating, but we know what you are going through, 
                                we know the legal terrain, we view your case individually, and we offer the care, 
                                reassurance and expertise to guide you every step of the way.</p>
                            </Reveal>
                        
                    </div>
                    <div 
                    className={styles.whySectionRight}>
                        <Reveal>
                            <div className={styles.whySectionRight1}>
                                <span><i class="fa-regular fa-circle-check"></i></span>
                                <div className={styles.rightText}>
                                    <h4>Transparent Costing</h4>
                                    <p>We will always be honest and upfront. We are committed to providing you with a clear and honest breakdown of all the costs associated with our services.</p>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className={styles.whySectionRight1}>
                                <span><i class="fa-regular fa-circle-check"></i></span>
                                <div className={styles.rightText}>
                                    <h4>Profound Knowledge</h4>
                                    <p>We know the ropes and our professionals have expertise specific to every legal situation.
                                    You can trust us to provide you with the most effective strategies and solutions tailored to your unique needs.
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className={styles.whySectionRight1}>
                                <span><i class="fa-regular fa-circle-check"></i></span>
                                <div className={styles.rightText}>
                                    <h4>Practical advice not legalese</h4>
                                    <p>We speak clearly and directly, so you understand our advice and can make decisions with confidence.</p>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className={styles.whySectionRight1}>
                                <span><i class="fa-regular fa-circle-check"></i></span>
                                <div className={styles.rightText}>
                                    <h4>Real client care</h4>
                                    <p>We go above and beyond to ensure that your needs and concerns are not just addressed, but truly understood and prioritized.
                                        We are committed to providing you with the best possible experience, and 'real client care' is our way of expressing our 
                                        dedication to your needs and overall satisfaction.
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className={styles.whySectionRight1}>
                                <span><i class="fa-regular fa-circle-check"></i></span>
                                <div className={styles.rightText}>
                                    <h4>Progressive practise</h4>
                                    <p>We are committed to ongoing improvement, adapting to changes, and staying ahead of the curve. Our approach is not static; 
                                        it's dynamic and forward-looking, ensuring that we consistently offer you the best solutions and services available in our field.</p>
                                </div>
                            </div>
                        </Reveal>
                        
                    </div>
                </div>
            </div>
            <div className={styles.section12}></div>
            <div className={styles.reasonSection}>
                <Reveal customStyles={{ overflow: "visible" }}>
                <h2>Areas Of Practice</h2>
                </Reveal>
                <div className={styles.reasonWrapper}>
                    <Reveal>
                        <a href="/arbitration">
                            <div className={styles.reasonBox}>                  
                                <div className={styles.reasonImage}>                                    
                                    <i class="fa-solid fa-handshake"></i>
                                </div>
                                
                                <div className={styles.reasonText}>                                    
                                    <h6 className={styles.reasonTitle}>ARBITRATION & MEDIATION</h6>                                    
                                    <i class="fa-solid fa-arrow-right-long"></i>
                                </div>
                            </div>
                        </a>
                    </Reveal>
                   <Reveal>
                    <a href="/banking">
                            <div className={styles.reasonBox}>                  
                                <div className={styles.reasonImage}>                                    
                                    <i class="fa-solid fa-money-check-dollar"></i>                                   
                                </div>
                                
                                <div className={styles.reasonText}>                                   
                                    <h6 className={styles.reasonTitle}>BANKING INSURANCE & FINANCE</h6>                                   
                                    <i class="fa-solid fa-arrow-right-long"></i>
                                </div>
                            </div>
                        </a>
                   </Reveal>
                  <Reveal>
                    <a href="/business">
                            <div className={styles.reasonBox}>                  
                                <div className={styles.reasonImage}>
                                    <i class="fa-solid fa-sign-hanging"></i>                                    
                                </div>
                                
                                <div className={styles.reasonText}>                                   
                                    <h6 className={styles.reasonTitle}>BUSINESS ESTABLISHMENT</h6>                                    
                                    <i class="fa-solid fa-arrow-right-long"></i>
                                </div>
                            </div>
                        </a>
                  </Reveal>
                  <Reveal>
                    <a href="/employment-retirement-benefits">
                            <div className={styles.reasonBox}>                  
                                <div className={styles.reasonImage}>
                                    <i class="fa-solid fa-money-check-dollar"></i>
                                </div>
                                
                                <div className={styles.reasonText}>                                    
                                    <h6 className={styles.reasonTitle}>EMPLOYMENT & RETIREMENT BENEFITS</h6>                                 
                                    <i class="fa-solid fa-arrow-right-long"></i>
                                </div>
                            </div>
                        </a>
                  </Reveal>
                  <Reveal>
                    <a href="/energy">
                            <div className={styles.reasonBox}>                  
                                <div className={styles.reasonImage}>                                   
                                    <i class="fa-solid fa-oil-can"></i>
                                </div>
                                
                                <div className={styles.reasonText}>                                   
                                    <h6 className={styles.reasonTitle}>ENERGY & NATURAL RESOURCES</h6>                                    
                                    <i class="fa-solid fa-arrow-right-long"></i>
                                </div>
                            </div>
                        </a>
                  </Reveal>
                  <Reveal>
                    <a href="/energy">
                            <div className={styles.reasonBox}>                  
                                <div className={styles.reasonImage}>
                                    <i class="fa-solid fa-percent"></i>
                                </div>
                                
                                <div className={styles.reasonText}>                                   
                                    <h6 className={styles.reasonTitle}>INTELLECTUAL PROPERTY</h6>                                   
                                    <i class="fa-solid fa-arrow-right-long"></i>
                                </div>
                            </div>
                        </a>
                  </Reveal>
                   <Reveal>
                    <a href="/practiceAreas">
                            <div className={styles.reasonBox}>                                                 
                                <div className={styles.reasonText}>                                   
                                    <h6 className={styles.reasonTitle}>VIEW ALL</h6>
                                    <p>Our Areas Of Practice
                                    </p>
                                    <i class="fa-solid fa-arrow-right-long"></i>
                                </div>
                            </div>
                        </a>
                   </Reveal>
                    
                </div>
            </div>
            

            
            {/* cta1 */}
            <CTAD/>

            

            {/* section form  */}
            <CTA/>
            

            <Footer/>
        </>
    )
}

export default Homer;