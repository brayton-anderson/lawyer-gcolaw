"use client"
import Head from "next/head";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Reveal from "../../../components/Reveal";
import { motion, useAnimation } from "framer-motion";
import styles from "../advocates/attorneys.module.css"
import CTAD from "../../../components/ctad";
import { useEffect } from "react";

export default function Advocates(){

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
            <link rel="styleSheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="styleSheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
            <link href="https://fonts.googleapis.com/css2?family=Philosopher&display=swap" rel="stylesheet"/>
            
            <Navbar/>
            {/* HERO SECTION 1 */}
            <div className={styles.section1}>
                <motion.h1
                className={`scroll-trigger ${styles.content}`}
                initial={{ opacity: 0, y: -50, scale: 0.5 }}
                animate={controls}
                transition={{ duration: 1, delay: .9 }}>Meet Our Team</motion.h1>              
            </div>
            
            {/* attorneys 1 */}
            <div className={styles.secAttorneys}>
                <div className={styles.left}>
                    <Reveal>
                    <div className="wakili">
                        <img src="../assets/wakili4.jpg" alt="Logo" className="wakili-img" />
                    </div>
                    </Reveal>
                </div>
                <div className={styles.right}>
                    <Reveal>
                        <h5><span>_</span> SENIOR ATTORNEY</h5>
                    </Reveal>
                    <Reveal>
                        <h2>PHILLIP FREDRICK <br />GAKUNJU</h2>
                    </Reveal>
                    <Reveal>
                        <p>Gakunju has over a decade of experience in legal practice, with substantial Legal
                            understanding in commercial dispute resolutoin and litigation. His particular strengths in the areas of real estate law and convetancing, project finance, building and construction contracts, securitization and
                            general corporate commercial law.
                        </p>
                    </Reveal>
                    <Reveal>
                        <br /><p>He has been involved as part of legal teams and in some cases team leader in the delivery of complex real estate
                            develpoment projects valued at billions of shillings.
                        
                        Gakunju is a committed and result-oriented litigator, with vast experience and expertise in international
                            law and commercial practice.
                        
                        He is renowned for his ingenious approach to alternative dispute resolution that often entails seminal
                            intervention with other parties and their lawyers before matters turn litigious.
                        </p>
                    </Reveal>
                    <Reveal>
                        <br /><p>Gakunju is an Advocate of the High Court of Kenya, Commissioner for Oaths, Notary Public, Patent Agent 
                            and a Certified Arbitrator & Mediator. He holds a Bachelor of Laws degree(LLB) from Moi University, a Diploma in Law from the Kenya School of Law, and a 
                            Masters of Law (LLM) in Tax Law from Moi University.
                        </p>
                    </Reveal>

                    <Reveal>
                        <div className={styles.mailed}>
                            <span><i class="fa-solid fa-envelope"></i></span>
                            <a href="mailto:gakunju@gcolaw.co.ke" className={styles.phoneNumber}>gakunju@gcolaw.co.ke</a>
                        </div>
                    </Reveal>
                </div>
            </div>
            {/* attorneys 2 */}
            <div className={styles.secAttorneys1}>
                <div className={styles.left}>
                    <Reveal>
                        <div className="wakili">
                            <img src="../assets/wakili1.jpg" alt="Logo" className="wakili-img" />
                        </div>
                    </Reveal>
                </div>
                <div className={styles.right}>
                    <Reveal>
                        <h5><span>_</span> ATTORNEY</h5>
                    </Reveal>
                    <Reveal>
                        <h2>FELIX MUTUA <br />NDEKE</h2>
                    </Reveal>
                    <Reveal>
                        <p>Mr. Mutua is a skillful lawyer with a knack for attention to detail. Mutua can dissect complex commercial issues to provide pragmatic
                            and user-friendly legal solutions.He is an outstanding and intelligent lawyer known for his unfailing sound advice on intellectual 
                            property law matters.
                        </p>
                    </Reveal>
                    <Reveal>
                        <br /><p>He is well-rounded and passionate about the law and ardent in prosecuting and defending case to the satisfaction of our clients.
                        
                        He regularly offers general legal advice and opinions on diverse legal opinions to clients on diverse legal issues including land 
                            matters as well as corporate and common law.
                        
                        Mr. Mutua has advised clients in various sectors including construction and real estate, banking and finance, venture capital, 
                            ICT and Communications, fair trade, and commercial agriculture.
                        </p>
                    </Reveal>
                    <Reveal>
                        <br /><p>Mutua is an Advocate of the High Court of Kenya. He holds a Bachelor of Laws degree(LLB) from Moi University and a Diploma in Law from the Kenya School of Law.
                            He is also pursuing fellow accreditation with the Chartered Institute of Arbitrators with a view to 
                            employing varied mechanisms of dispute resolution.
                        </p>
                    </Reveal>

                    <Reveal>
                        <div className={styles.mailed}>
                            <span><i class="fa-solid fa-envelope"></i></span>
                            <a href="mailto:mutua@gcolaw.co.ke" className={styles.phoneNumber}>mutua@gcolaw.co.ke</a>
                        </div>
                    </Reveal>
                </div>
            </div>
            {/* attorneys 3 */}
            <div className={styles.secAttorneys}>
                <div className={styles.left}>
                    <Reveal>
                        <div className="wakili">
                            <img src="../assets/wakili2.jpg" alt="Logo" className="wakili-img" />
                        </div>
                    </Reveal>
                </div>
                <div className={styles.right}>
                    <Reveal>
                        <h5><span>_</span> ATTORNEY</h5>
                    </Reveal>
                    <Reveal>
                        <h2>ANNE WANGECHI <br />GITHINJI</h2>
                    </Reveal>
                    <Reveal>
                        <p>Ann began her professional career as a litigation lawyer and have amassed experience, 
                            skills and knowledge acquired in the more than 25 years active Public and Private practice. 
                            She has served extensively in Public Offices and Corporate as an expert offering oversight in 
                            large public institutions. 
                        </p>
                    </Reveal>
                    <Reveal>
                        <br />
                        <p>She developed a passion for good governance and voluntarily conducted
                                massive Civic Education to voters when a consultant with the National Council of Churches of 
                                Kenya. She established various youth and women empowerment projects, and to date proud of 
                                Pamoja Welfare Initiative for youth and women. She has been a consultant for various Political 
                                Parties, Universities and other Government organizations. Ann is a soft-spoken but firm lawyer 
                                bringing vast expertise to the Commercial and Corporate Practice Team. 
                            </p>
                    </Reveal>
                    <Reveal>
                        <br />
                        <p>She has advised new 
                            entrants into the Kenyan market on the registration options under Kenyan law, undertaking the 
                            actual registrations and advising on statutory and tax compliance requirements.
                        </p>
                    </Reveal>
                    

                    <Reveal>
                        <div className={styles.mailed}>
                            <span><i class="fa-solid fa-envelope"></i></span>
                            <a href="mailto:wangechi@gcolaw.co.ke" className={styles.phoneNumber}>wangechi@gcolaw.co.ke</a>
                        </div>
                    </Reveal>
                </div>
            </div>
            {/* attorneys 2 */}
            <div className={styles.secAttorneys1}>
                <div className={styles.left}>
                    <Reveal>
                        <div className="wakili">
                            <img src="../assets/wakili3.jpg" alt="Logo" className="wakili-img" />
                        </div>
                    </Reveal>
                </div>
                <div className={styles.right}>
                    <Reveal>
                        <h5><span>_</span> ATTORNEY</h5>
                    </Reveal>
                    <Reveal>
                        <h2>MERCY KANYARA <br />SMITH</h2>
                    </Reveal>
                    <Reveal>
                        <p>Mercy is a brilliant mind in the commercial and civil litigation department. 
                            A holder of Master&apos;s Degree, Certified Public Secretary (CPS), and a registered patent agent. 
                            Mercy&apos;s charm and wit are intriguing as she simplifies the law in precision to benefit the 
                            client&apos;s needs. 
                        </p>
                    </Reveal>
                    <Reveal>
                        <br /><p>In a highly dynamic and competitive legal practice, Mercy serves clients on a 
                        wide range of commercial and business transactions. She is also an excellent trial advocate and 
                        has represented clients with success in commercial and civil disputes, intellectual property law, 
                        employment and labour disputes, environment, land related and procurement disputes in Superior 
                        Courts and Tribunals in Kenya. </p>
                    </Reveal>
                    <Reveal>
                        <br /><p>Mercy has experience in representing both local and international 
                        companies, corporations and institutions working in various fields such as telecommunications, 
                        environmental law, administration and management, commercial law, entrepreneurial skills and 
                        mentality, intellectual property law, banking & financial sector, manufacturing, insurance, 
                        new technologies, industry and infrastructure among others.</p>
                    </Reveal>

                    <Reveal>
                        <div className={styles.mailed}>
                            <span><i class="fa-solid fa-envelope"></i></span>
                            <a href="mailto:kanyara@gcolaw.co.ke" className={styles.phoneNumber}>kanyara@gcolaw.co.ke</a>
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* attorneys 3 */}
            <div className={styles.secAttorneys}>
                <div className={styles.left}>
                    <Reveal>
                        <div className="wakili">
                            <img src="../assets/wakili6.jpg" alt="Logo" className="wakili-img" />
                            {/* <i class="fa-solid fa-user" ></i> */}
                        </div>
                    </Reveal>
                </div>
                <div className={styles.right}>
                    <Reveal>
                        <h5><span>_</span> ATTORNEY</h5>
                    </Reveal>
                    <Reveal>
                        <h2>KARIITHI </h2>
                    </Reveal>
                    <Reveal>
                        <p>Beyond being a CPA (K), Kariithi is a passionate student of the law, pursuing his LLB degree. 
                            He is a legal drafter, and is closely involved in the drafting of applications, contracts, 
                            agreements, creation of securities and finances, property valuation, and payment of stamp duty. 
                        </p>
                    </Reveal>
                    <Reveal>
                        <br />
                        <p>Compared to his peers, Kariithi carries an aura of maturity in his communication and work, 
                            with an in born spirit to deliver precisely and effectively. As a budding advocate, he has managed 
                            to gain some good experience and exposure in different areas of the law including dispute 
                            resolution, corporate, commercial, conveyancing, running down and family law. </p>
                    </Reveal>
                    <Reveal>
                        <br />
                        <p>Kariithi is keen on mastering and growing his skills in the dispute resolution department 
                            to help solve difficult client problems in a unique, fitting and innovative style.
                        </p>
                    </Reveal>
                    

                    <Reveal>
                        <div className={styles.mailed}>
                            <span><i class="fa-solid fa-envelope"></i></span>
                            <a href="mailto:kariithi@gcolaw.co.ke" className={styles.phoneNumber}>kariithi@gcolaw.co.ke</a>
                        </div>
                    </Reveal>
                </div>
            </div>
            <CTAD/>


            <Footer/>
        </>
    )
}