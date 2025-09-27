"use client"
import Head from "next/head"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

const LandingPhotographer = () => {
  return (
    <>
      <Head>
        <title>Bienvenido Fotógrafo</title>
      </Head>

      <div className="flex flex-col min-h-screen bg-[#FDFDFD]">
        <Header />

        <main className="flex-grow flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-6xl bg-white shadow-lg rounded-xl p-10">
            {/* Encabezado de bienvenida */}
            <h1 className="text-4xl text-[#1D432C] font-[Times_New_Roman] text-center mb-4">
              ¡Hola, Fotógrafo!
            </h1>
            <p className="text-lg text-gray-600 text-center mb-10">
              Bienvenido a tu panel. Aquí podrás gestionar tu portafolio, tus
              proyectos y estar al tanto de tus clientes.
            </p>

            {/* Acciones principales */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Subir fotos */}
              <div className="bg-[#FDFDFD] border rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <img
                  src="/upload.jpg"
                  alt="Subir Fotos"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-bold text-[#1D432C] mb-2">
                  Subir Fotos
                </h2>
                <p className="text-gray-600 mb-4">
                  Comparte tus mejores capturas en tu portafolio.
                </p>
                <button className="w-full py-2 px-4 bg-[#BB7B4D] text-white font-semibold rounded-lg hover:bg-[#b78a6a] transition">
                  Ir a subir
                </button>
              </div>

              {/* Ver portafolio */}
              <div className="bg-[#FDFDFD] border rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <img
                  src="/portfolio.jpg"
                  alt="Portafolio"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-bold text-[#1D432C] mb-2">
                  Mi Portafolio
                </h2>
                <p className="text-gray-600 mb-4">
                  Visualiza y organiza tu portafolio fotográfico.
                </p>
                <button className="w-full py-2 px-4 bg-[#BB7B4D] text-white font-semibold rounded-lg hover:bg-[#b78a6a] transition">
                  Ver portafolio
                </button>
              </div>

              {/* Perfil */}
              <div className="bg-[#FDFDFD] border rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <img
                  src="/profile.jpg"
                  alt="Perfil"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-bold text-[#1D432C] mb-2">
                  Mi Perfil
                </h2>
                <p className="text-gray-600 mb-4">
                  Edita tu información personal y configuración de cuenta.
                </p>
                <button className="w-full py-2 px-4 bg-[#BB7B4D] text-white font-semibold rounded-lg hover:bg-[#b78a6a] transition">
                  Editar perfil
                </button>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default LandingPhotographer
