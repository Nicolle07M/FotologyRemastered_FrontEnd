import styles from '../styles/Header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.logo}>Mi Empresa</h2>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>Inicio</Link>
        <Link href="/login" className={styles.link}>Iniciar sesion</Link>
        <Link href="/Register" className={styles.link}>Registrarse</Link>
      </nav>
    </header>
  )
}

export default Header