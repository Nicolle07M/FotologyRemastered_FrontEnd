import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/roles'; // Cambia esta URL por la de tu backend

const RolesService = {
  // Obtener todos los tipos de documentos
  getAll: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los roles:', error);
      throw error;
    }
  },

  // Crear un nuevo tipo de documento
  create: async (data) => {
    try {
      const response = await axios.post(API_URL, data, {
        headers: { 'Content-Type': 'application/json' },
      });
      return response.data;
    } catch (error) {
      console.error('Error al crear el rol:', error);
      throw error;
    }
  },
};

export default RolesService;