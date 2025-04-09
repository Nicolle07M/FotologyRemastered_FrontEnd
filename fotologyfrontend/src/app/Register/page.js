"use client"
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DocumentTypeService from '../services/DocumentTypeService'
import RolesService from '../services/RolesService'

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    fechaNacimiento: '',
    correo: '',
    tipoDocumento: '',
    numeroDocumento: '',
    direccion: '',
    rol: '',
  })
  const [documentTypes, setDocumentTypes] = useState([])
  const [role, setRole] = useState([])

  useEffect(() => {
    const fetchDocumentTypes = async () => {
      try {
        const response = await DocumentTypeService.getAll()
        if (Array.isArray(response)) {
          setDocumentTypes(response)
        }
      } catch (error) {
        console.error("Error al obtener los tipos de documento:", error)
      }
    }

    fetchDocumentTypes()
  }, [])

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await RolesService.getAll()
        if (Array.isArray(response)) {
          setRole(response)
        }
      } catch (error) {
        console.error("Error al obtener los roles:", error)
      }
    }

    fetchRoles()
  }, [])


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Datos del formulario:', formData)
    // Aquí puedes hacer un fetch/axios para enviar los datos al backend
  }

  return (
    <>
      <Head>
        <title>Registro de Usuario</title>
      </Head>

      <Header />

      <main className="min-h-screen flex flex-col justify-between bg-gray-100 dark:bg-gray-800">
        <div className="max-w-lg mx-auto p-8 bg-white dark:bg-gray-700 rounded-lg shadow-md my-10">
          <h1 className="text-3xl text-blue-600 text-center mb-6 dark:text-gray-100">Registro de Usuario</h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="text"
              name="apellido"
              placeholder="Apellido"
              value={formData.apellido}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="tel"
              name="telefono"
              placeholder="Número de Teléfono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="date"
              name="fechaNacimiento"
              value={formData.fechaNacimiento}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="email"
              name="correo"
              placeholder="Correo Electrónico"
              value={formData.correo}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <select
              name="tipoDocumento"
              value={formData.documentTypes}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Selecciona tipo de documento</option>
              {documentTypes.map((doc, index) => (
                <option key={index} value={doc.name}>
                  {doc.name}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="numeroDocumento"
              placeholder="Número de Documento"
              value={formData.numeroDocumento}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="text"
              name="direccion"
              placeholder="Dirección"
              value={formData.direccion}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <select
              name="rol"
              value={formData.rol}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Selecciona el rol</option>
              {role.map((doc, index) => (
                <option key={index} value={doc.name}>
                  {doc.name}
                </option>
              ))}
            </select>

            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Registrarse
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Register
