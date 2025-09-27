'use client';
import React, { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null); // null = no sesión

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Simulación: obtén el usuario desde localStorage o tu API
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user")); 
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Items iniciales (sin sesión)
  const guestLinks = [
    { href: "/", label: "Inicio" },
    { href: "/Register", label: "Registrarse" },
    { href: "/Login", label: "Iniciar sesión", className: styles.loginButton },
  ];

  // Items por rol
  const roleLinks = {
    fotografo: [
      { href: "/dashboard", label: "Dashboard" },
      { href: "/upload", label: "Subir Fotos" },
      { href: "/portfolio", label: "Portafolio" },
      { href: "/profile", label: "Perfil" },
    ],
    admin: [
      { href: "/users", label: "Gestión Usuarios" },
      { href: "/roles", label: "Gestión Roles" },
      { href: "/reports", label: "Reportes" },
    ],
  };

  // Función cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  // Determinar links a mostrar
  let linksToRender = guestLinks;
  if (user?.role) {
    linksToRender = roleLinks[user.role] || [];
    linksToRender.push({ href: "#", label: "Cerrar sesión", onClick: handleLogout });
  }

  return (
    <header className={styles.header}>
      <h2 className={styles.logo}>Fotology</h2>

      <button className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </button>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        {linksToRender.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className={`${styles.link} ${link.className || ""}`}
            onClick={link.onClick || null}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
