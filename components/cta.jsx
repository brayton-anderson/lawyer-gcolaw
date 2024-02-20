"use client";
import styles from "../src/app/styles/cta.module.css";
import Reveal from "./Reveal";
import { useState } from "react";


export default function CTA() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    legalIssue: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/email/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent successfully!');
        // Optionally, reset the form fields after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          legalIssue: '',
          message: ''
        });
      } else {
        alert('Error sending message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred while sending the message.');
    }
  };
  
  // const [loading, setLoading] = useState(false);
 
  return (
    <>
      <Reveal>
      <div className={styles.lastCTA}>

<div className={styles.heading}>
  WE&apos;RE HERE TO HELP
</div>
<div className={styles.ctaLeft}>
  <h4>Complete the form to contact us today</h4>
  <p>
    We&apos;re here to listen to your story anytime. We will help you
    understand how things work, give you confidence and guide you
    through your options.
    <br /> We&apos;ll be honest and upfront, agreeing on what you need
    and how much it will cost. Your enquiry is completely confidential.
  </p>
</div>
<div className={styles.ctaRight}       >
  <form  
      onSubmit={handleSubmit}
    // action={`/api/email`}
    // method="post"
    // onSubmit={async (e) => {
    //   e.preventDefault();
    //   setLoading(true);
    //   setErrors(null);
    //   const formData = new FormData(e.currentTarget);
    //   const response = await fetch('/api/email', {
    //     method: "POST",
    //     body: formData,
    //     redirect: "manual",
    //   });

    //   if (response.status === 0) {
    //     // redirected
    //     // when using `redirect: "manual"`, response status 0 is returned
    //     return router.refresh();
    //   }
    //   //setErrors(await response.json());
    //   setLoading(false);
    // }}
  >
    
    <div className={styles.formContent}>
      <div className={styles.card1}>
        <label for="bioData">First Name:</label>
        <input
          className={styles.perinput}
          value={formData.firstName} onChange={handleChange}
          name="firstName"
          id="firstName"
          type="text"
          placeholder="eg. John"
          required
        />
      </div>
      <div className={styles.card2}>
        <label for="bioData">Last Name:</label>
        <input
          className={styles.perinput2}
          value={formData.lastName} onChange={handleChange}
          name="lastName"
          id="lastName"
          type="text"
          placeholder="eg. Doe"
          required
        />
      </div>
      {/* <div className={styles.card2}>
                        <label for="bioData">Phone Number:</label>
                        <input className={styles.perinput2}  
                            type="text"
                            value={formData.secondname}
                            onChange={onChangeSecondname}
                            placeholder="Second name"
                            required
                        />
                    </div> */}
      <div className={styles.card1}>
        <label for="bioData">Email:</label>
        <input
          className={styles.perinput}
          value={formData.email} onChange={handleChange}
          name="emailAddress"
          id="emailAddress"
          type="email"
          placeholder="eg. name@gmail.com"
          required
        />
      </div>
      <div className={styles.card2}>
        <label for="bioData">Legal Issue:</label>
        <select
          name="legalIssue"
          id="legalIssue"
          className={styles.perinput2}
          value={formData.legalIssue} onChange={handleChange}
        >
          {/* <option value="no">Select Legal Issue</option>                            */}
          <option value="Abitration & Mediation">
            Abitration & Mediation
          </option>
          <option value="Banking, Insurance & Finance">
            Banking, Insurance & Finance
          </option>
          <option value="Business Establishment">
            Business Establishment
          </option>
          <option value="Company Secretarial">
            Company Secretarial{" "}
          </option>
          <option value="Employment & Retirement Benefits">
            Employment & Retirement Benefits
          </option>
          <option value="Energy & Natural Resources">
            Energy & Natural Resources
          </option>
          <option value="Intellectual Property">
            Intellectual Property
          </option>
          <option value="Legal Due Diligence & Advisory">
            Legal Due Diligence & Advisory
          </option>
          <option value="Litigation">Litigation</option>
          <option value="Mergers & Acquisitions">
            Mergers & Acquisitions
          </option>
          <option value="Project Development Consultancy">
            Project Development Consultancy
          </option>
          {/* <option  value="yes">Real Estate </option> */}
          <option value="Real Estate & Conveyancing">
            Real Estate & Conveyancing
          </option>
          <option value="Tax Advisory">Tax Advisory</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className={styles.insert}>
        <label for="cars">Your Message:</label>
        <textarea
          value={formData.message} onChange={handleChange}
          rows="6"
          name="message"
          id="message"
          placeholder="Write your message here..."
          required
        >
          {" "}
        </textarea>
      </div>
    </div>
    <button type="submit" className={styles.herobtn}>
      SUBMIT
      {/* {loading?"TING...": ""} */}
    </button>
  </form>
</div>
</div>
      </Reveal>
    </>
  );
}
