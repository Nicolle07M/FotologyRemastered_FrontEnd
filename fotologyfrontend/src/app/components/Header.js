import styles from '../styles/Header.module.css'

const Header = () => {
    return (
      <header className={styles.header}>
        <h2 className={styles.logo}>Mi Empresa</h2>
        <nav className={styles.nav}>
          <a href="#" className={styles.link}>Inicio</a>
          <a href="#" className={styles.link}>Servicios</a>
          <a href="#" className={styles.link}>Contacto</a>
        </nav>
      </header>
    )
  }
  
  export default Header
