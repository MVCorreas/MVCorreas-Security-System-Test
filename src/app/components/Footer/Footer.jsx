import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../reusableIcons/GithubIcon";
import LinkedInIcon from "../reusableIcons/LinkedInIcon";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.footerTitle}>
          MARIA VICTORIA CORREAS PROFILE
        </span>
        <div className={styles.iconContainer}>
          <Link href="https://github.com/MVCorreas">
            <GithubIcon color={"#19053A"} width={50} height={50} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mar%C3%ADa-victoria-correas-148049b2/"
            className={styles.icon}
          >
            <LinkedInIcon color={"#19053A"} width={50} height={50} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
