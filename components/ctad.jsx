import styles from "../src/app/styles/cta.module.css"
import Reveal from "./Reveal"

export default function CTAD(){
    return(
        <>
            {/* cta */}
            <div className={styles.cta}>
                <Reveal customStyles={{ overflow: "visible" }}>
                    <h2>Contact Our Team Today For An Obligation Free Discussion</h2>
                
                
                    <div className={styles.ctaButtons}>
                            <div className={styles.read_btn1} >
                                <a href="/020-8000-601">(020) - 8000 - 601</a>
                            </div>
                            <div className={styles.read_btn2} >
                                <a href="/contacts">CONTACT US</a>
                            </div>
                    </div>
                </Reveal>
            </div>
        </>
    )
}