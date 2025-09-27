"use client"
import { useState, useEffect } from "react"
import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import DocumentTypeService from "../services/DocumentTypeService"
import RolesService from "../services/RolesService"
import PeopleService from "../services/PeopleService"

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    fechaNacimiento: "",
    correo: "",
    tipoDocumento: "",
    numeroDocumento: "",
    direccion: "",
    rol: "",
  })
  const [documentTypes, setDocumentTypes] = useState([])
  const [roles, setRoles] = useState([])

  // Cargar tipos de documento
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

  // Cargar roles (filtrando 2 y 3)
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await RolesService.getAll()
        if (Array.isArray(response)) {
          const filteredRoles = response.filter((r) => r.id === 2 || r.id === 3)
          setRoles(filteredRoles)
        }
      } catch (error) {
        console.error("Error al obtener los roles:", error)
      }
    }
    fetchRoles()
  }, [])

  // Manejar cambios en inputs
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Enviar formulario usando PeopleService
  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = {
      first_name: formData.nombre,
      last_name: formData.apellido,
      phone: formData.telefono,
      birth_date: formData.fechaNacimiento,
      email: formData.correo,
      document_type_id: formData.tipoDocumento,
      document_number: formData.numeroDocumento,
      address: formData.direccion,
      photo: null, // opcional
      rol: formData.rol,
    }

    try {
      const response = await PeopleService.create(payload)
      console.log("✅ Usuario creado:", response)
      alert("Usuario registrado correctamente, tu contraseña es la primera letra de tu nombre en mayúscula + tu número de documento.")
      // opcional: resetear formulario
      setFormData({
        nombre: "",
        apellido: "",
        telefono: "",
        fechaNacimiento: "",
        correo: "",
        tipoDocumento: "",
        numeroDocumento: "",
        direccion: "",
        rol: "",
      })
    } catch (error) {
      console.error("❌ Error al registrar:", error)
      alert("Error al registrar el usuario")
    }
  }

  return (
    <>
      <Head>
        <title>Registro de Usuario</title>
      </Head>

      <div className="flex flex-col min-h-screen bg-[#FDFDFD]">
        <Header />

        <main className="flex-grow flex items-center justify-center px-4 py-10">
          <div className="flex w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Imagen izquierda */}
            <div className="w-1/2 hidden md:block">
              <img
                src="/paisaje1.jpg"
                alt="Registro"
                className="object-cover w-[350px] h-full"
              />
            </div>

            {/* Formulario */}
            <div className="w-full md:w-1/2 p-8">
              <h1 className="text-4xl text-[#1D432C] mb-6 font-[Times_New_Roman] text-center">
                ¡Regístrate con nosotros!
              </h1>

              <form
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9AAF86] placeholder-[#8a8b8a] text-[#1D432C]"
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
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9AAF86] text-[#1D432C]"
                  required
                >
                  <option value="">Selecciona tipo de documento</option>
                  {documentTypes.map((doc) => (
                    <option key={doc.id} value={doc.id}>
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
                  {roles.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name}
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
      </div>
    </>
  )
}

export default Register
