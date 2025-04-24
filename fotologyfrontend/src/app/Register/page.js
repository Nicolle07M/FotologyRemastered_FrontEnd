"use client"
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DocumentTypeService from '../services/DocumentTypeService'
import RolesService from '../services/RolesService'
import PeopleService from '../services/PeopleService'

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
          const filteredRoles = response.filter((r) => r.id === 2 || r.id === 3)
          setRole(filteredRoles)
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

      <main className="min-h-screen flex items-center justify-center bg-[#FDFDFD]">
        <div className="flex w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Imagen al lado izquierdo */}
          <div className="w-1/2 hidden md:block">
            <img
              src="/paisaje1.jpg" // Asegúrate de que la imagen esté en public/images/
              alt="Registro"
              className="object-cover w-[350px] h-full"
            />
          </div>

          {/* Formulario al lado derecho */}
          <div className="w-full md:w-1/2 p-8">
            <h1 className="text-3xl text-[#BB7B4D] text-center mb-8 font-semibold">
              Registro de Usuario
            </h1>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9AAF86] placeholder-[#8a8b8a] text-[#1D432C] "
                required
              />
              <input
                type="text"
                name="apellido"
                placeholder="Apellido"
                value={formData.apellido}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9AAF86] placeholder-[#8a8b8a] text-[#1D432C]"
                required
              />
              <input
                type="tel"
                name="telefono"
                placeholder="Número de Teléfono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9AAF86] placeholder-[#8a8b8a] text-[#1D432C]"
                required
              />
              <input
                type="date"
                name="fechaNacimiento"
                value={formData.fechaNacimiento}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9AAF86] text-[#1D432C]"
                required
              />
              <input
                type="email"
                name="correo"
                placeholder="Correo Electrónico"
                value={formData.correo}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9AAF86] placeholder-[#8a8b8a] text-[#1D432C]"
                required
              />
              <select
                name="tipoDocumento"
                value={formData.tipoDocumento}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9AAF86] text-[#1D432C] "
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
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9AAF86] placeholder-[#8a8b8a] text-[#1D432C]"
                required
              />
              <input
                type="text"
                name="direccion"
                placeholder="Dirección"
                value={formData.direccion}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9AAF86] placeholder-[#8a8b8a] text-[#1D432C]"
                required
              />
              <select
                name="rol"
                value={formData.rol}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9AAF86] text-[#1D432C]"
                required
              >
                <option value="">Selecciona el rol</option>
                {role.map((doc, index) => (
                  <option key={index} value={doc.name}>
                    {doc.name}
                  </option>
                ))}
              </select>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full p-3 bg-[#BB7B4D] text-white font-semibold rounded-lg hover:bg-[#a9653d] focus:outline-none focus:ring-2 focus:ring-[#BB7B4D]"
                >
                  Registrarse
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Register
