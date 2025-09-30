import React from "react";
import styles from "../pages/HomePage/HomePage.module.css";
function PartnerWithUs() {
  return (
    <div>
      {/* panel 6 parterner with us */}
      <section className={styles.description}>
        <div className={styles.partner}>
          <div>
            <div className={styles.partnerheader}>
              We welcome you to partner in our journey!
            </div>
            <p className={styles.partnerbody}>
              If you are a scientist, technologist, or an innovator, who
              believes in changing the world, then connect with us. If you are
              an investor or a passionate individual in any field, who wishes to
              see India take technology leadership, connect with us.
            </p>
            <p className={styles.partnerbody}>
              We invite you to become a part of our consortia and let us
              together think and create scalable and sustainable solutions for
              the most complex, toughest and impossible challenges and make our
              country a technology leader!
            </p>
            <p className={styles.partnerbody}>
              Write to us at{" "}
              <a
                href="mailto:connect@itelfoundation.in"
                style={{
                  color: "blue",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                connect@itelfoundation.in
              </a>
              {/* <span style={{ color: "blue", cursor: "pointer" }}>
                connect@itelfoundation.in
              </span> */}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PartnerWithUs;
