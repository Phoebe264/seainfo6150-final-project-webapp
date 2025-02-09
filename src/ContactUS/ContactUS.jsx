import React from "react";
import styles from "./ContactUS.module.css";


const ContactUs = () => {
  return (
      <div className={styles.container}>
            <header>Contact Us</header>
            <ul className={styles.newsDetailsul}>
                   <li> <img className={styles.ContactUsImage} src= {"/images/contact.jpg"} alt={"cat"} /></li>
                   <li>
                      <div className={styles.contactInfo}>
                         <ul>
                             <li>
                                 <strong>Street Address:</strong><br/>
                                <p>Ginger’s Pet Rescue<br />
                                    Seattle, WA  98118
                                </p>
                             </li>
                             <li>
                                 <strong>Mailing Address:</strong><br/>
                                 <p>P.O. Box 2293<br />
                                    Seattle, WA  98118
                                 </p>
                             </li>
                             <li>
                                 <strong>Phone:</strong><br/>
                                 <p>(206)488.4444</p>
                             </li>
                             <li>
                                 <strong>Emailing Address:</strong>
                                 <p><a href="mailto: sian@gingerspetrescue.org">sian@gingerspetrescue.org</a></p>
                             </li>
                         </ul>
                      </div>
                   </li>
            </ul>
      </div>
  );
};

export default ContactUs;