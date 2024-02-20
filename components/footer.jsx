"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer () {

    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentYear(new Date().getFullYear());
      }, 60000); // Update every minute to account for potential timezone changes
    
      // Clear interval on component unmount
      return () => clearInterval(intervalId);
    }, []);

    return (
        <>
        <div className="footer1">
            <div className="wrapper">
                <h3>QUICK LINKS</h3>
                <div className="footeralign">
                    <ul className="footerlist">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/practiceAreas">Practice Areas</Link></li>    
                        <li><Link href="/advocates">Advocates</Link></li>    
                        <li><Link href="/contacts">Contact Us</Link></li>    
                        {/* <li><Link href="/events">Events</Link></li>                                                                                   */}
                    </ul>
                    {/* <i class='fas fa-arrow-alt-circle-up'></i> */}
                </div>
            </div> 
            <div className="wrapper">
                <h3>OUR SOCIALS</h3>
                <div className="footerlist1">
                    <ul>
                        <li><a href="#"><i class="fa-brands fa-square-facebook"></i>
                            <span>Facebook</span></a>
                        </li>
                        <li><a href="#"><i className="fab fa-instagram"></i>
                            <span>Instagram</span></a>
                        </li>
                        <li><a href="#"><i class="fa-brands fa-square-x-twitter"></i>
                            <span>X-Twitter</span></a>
                        </li>
                        <li><a href="#"><i className="fab fa-linkedin"></i>
                            <span>LinkedIn</span></a>
                        </li>
                    </ul>
                </div>
            </div>   
            <div className="wrapper">                
                <h3>CONTACTS</h3>
                <div className="contacts">
                    <p>Office:</p>
                    <p><span>020-8000-601</span></p>
                </div>
                <div className="contacts">
                    <p>Email:</p>
                    <p><span>info@gcolaw.co.ke</span></p>
                </div>
                <div className="contacts">
                    <p>5th Floor, Suite 501</p>
                    <p><span>Kikinga Hse Annex</span></p>
                </div>
                <div className="contacts">
                    <p>P.O BOX 1555 - 00900</p>
                    <p><span>Kiambu</span></p>
                </div>
            </div>
            <div className="wrapper">
                <div className="logo">
                    <img src="../logo.png" alt="Logo" className="logo-img" id="logo_img2" />
                </div>
                <div className="mission">
                    <p>Gakunju & Co. Advocates is a boutique corporate, commercial and tax law firm operating in Kiambu and Nairobi, with our regional reach across several jurisdictions.</p>
                </div>
            </div>
        </div>
        <div className="footer">
            
            {/* <hr size={.3} width="100%" color="#616060" /> */}
            <div className="footersign">
                <div className="copy">
                    <p className="copyright">© GAKUNJU & CO. ADVOCATES {currentYear} | All Rights Reserved. </p>
                    {/* <a href="#"><i className='fas fa-arrow-alt-circle-up'></i></a> */}
                </div>
                <p className="copyright1">Developed by:<span> <a href="https://www.peniaccds.com">Peniacc Digital Solutions </a></span></p>
            </div>
            
        </div>
        </>
    );
}
