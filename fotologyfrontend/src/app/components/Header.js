import styles from '../styles/Header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.logo}>Fotology</h2>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>Inicio</Link>
        <Link href="/Register" className={styles.link}>Registrarse</Link>
        <Link href="/Login" className={`${styles.link} ${styles.loginButton}`}>Iniciar sesión</Link>
      </nav>
    </header>
  )
}

export default Header