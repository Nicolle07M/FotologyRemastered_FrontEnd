'use client';
import React, { useState } from 'react';
import styles from '../styles/Header.module.css';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <h2 className={styles.logo}>Fotology</h2>
      <button className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        <Link href="/" className={styles.link}>Inicio</Link>
        <Link href="/Register" className={styles.link}>Registrarse</Link>
        <Link href="/Login" className={`${styles.link} ${styles.loginButton}`}>Iniciar sesión</Link>
      </nav>
    </header>
  );
};

export default Header;