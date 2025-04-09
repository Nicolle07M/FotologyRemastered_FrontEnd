"use client"
import { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Login = () => {
  const [credentials, setCredentials] = useState({
    correo: '',
    contraseña: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Credenciales:', credentials)
    // Aquí puedes hacer la llamada al backend para autenticar
  }

  return (
    <>
      <Head>
        <title>Iniciar Sesión</title>
      </Head>

      <Header />

      <main className="min-h-screen flex flex-col justify-between bg-gray-100 dark:bg-gray-800">
        <div className="max-w-lg mx-auto p-8 bg-white dark:bg-gray-700 rounded-lg shadow-md my-10">
          <h1 className="text-3xl text-blue-600 text-center mb-6 dark:text-gray-100">Iniciar Sesión</h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              name="correo"
              placeholder="Correo Electrónico"
              value={credentials.correo}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="password"
              name="contraseña"
              placeholder="Contraseña"
              value={credentials.contraseña}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Login
