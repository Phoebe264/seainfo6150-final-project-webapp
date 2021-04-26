import React from "react";
import styles from "./AboutUS.module.css";


const AboutUS = () => {
  return (

      <div className={styles.container}>
           <header>About US</header>
                <ul className={styles.newsDetailsul}>
                     <li> <img className={styles.aboutUsImage} src= {"/images/about.jpg"} alt={"dog"} /> </li>
                     <li>
                          <div className={styles.aboutInfo}>
                              <ul>
                                  <li><strong>Our Mission</strong></li>
                                  <li><p>Our mission is to give homeless animals with no hope the life they deserve through rescue, foster and adoption.
                                         We do not have a physical shelter location. We rely on a large network of fosters in the Seattle area, who provide our dogs with love and care during transition from rescue to adoption. We are solely supportive on adoption fees and donations to help us provide for the 100+ dogs in our rescue at any given time. Over 90% of every dollar generated goes to the rescue of our animals.</p></li>
                                  <li><strong>Where We Work</strong></li>
                                  <li><p>We take in dogs from local families in need, in state and out of state shelters, and we also work with overseas rescue groups on occasion. We do not discriminate – we rescue dogs small and big, old and young, healthy and sick, purebred and Heinz 57. Our belief is that every dog deserves a forever home.</p></li>
                              </ul>
                          </div>
                     </li>
                </ul>
      </div>
  );
};

export default AboutUS;