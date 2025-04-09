import Head from 'next/head'
import styles from './styles/Home.module.css'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fotografía Creativa</title>
        <meta name="description" content="Captura momentos únicos con estilo profesional" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Bienvenido a Fotografía Creativa 📸</h1>

        <p className={styles.description}>
          Capturamos los momentos más especiales de tu vida con un enfoque artístico y profesional.
        </p>

        <section className={styles.section}>
          <h2>¿Qué hacemos?</h2>
          <p>
            Nos especializamos en fotografía de bodas, retratos, eventos y sesiones creativas al aire libre. 
            Cada foto es tratada con dedicación para reflejar emociones auténticas y memorias inolvidables.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Nuestro Estilo</h2>
          <p>
            Combinamos luz natural, composición artística y retoque digital para lograr imágenes impactantes. 
            Nuestro estilo es moderno, limpio y siempre personalizado a tus gustos.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Reserva tu sesión</h2>
          <p>
            ¿Listo para capturar tus mejores momentos? Contáctanos y agenda una sesión que se adapte a ti.
          </p>
          <button className={styles.ctaButton}>Contáctanos</button>
        </section>
      </main>

      <Footer />
    </div>
  )
}