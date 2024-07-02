"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './NavBar.module.css'; 
import Image from 'next/image'

const navLinks = [
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Interests',
    path: '#interests',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.profile}>
          <Image 
            src="/Profile.jpeg" 
            alt="profileImage"
            width={50} 
            height={50}
            className={styles.profileImage}
          />
          <h1>My name</h1>
        </div>

      <div className={styles.navLinks}>
        {navLinks.map((link, index) => (
          <h3 key={index} className={styles['nav-link']}>
            <Link href={link.path}>{link.title}</Link>
          </h3>
        ))}
      </div>
     
    </nav>
  );
};

export default Navbar;
