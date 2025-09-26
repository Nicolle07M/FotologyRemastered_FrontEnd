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
  }

  return (
    <>
      <Head>
        <title>Iniciar Sesión</title>
      </Head>

      <div className="min-h-screen flex flex-col bg-[#FDFDFD]">
        <Header />

        {/* Contenedor principal */}
        <main className="flex-grow flex items-center justify-center px-4">
          {/* Recuadro */}
          <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-4xl text-[#1D432C] mb-6 font-[Times_New_Roman] text-center">
              Iniciar Sesión
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                name="correo"
                placeholder="Correo Electrónico"
                value={credentials.correo}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BB7B4D] text-gray-700"
                required
              />

              <input
                type="password"
                name="contraseña"
                placeholder="Contraseña"
                value={credentials.contraseña}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BB7B4D] text-gray-700"
                required
              />

              <button
                type="submit"
                className="mt-4 w-full py-3 px-6 bg-[#BB7B4D] text-white font-bold rounded-lg transition-colors duration-300 hover:bg-[#b78a6a] focus:outline-none"
              >
                Iniciar Sesión
              </button>
            </form>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default Login
