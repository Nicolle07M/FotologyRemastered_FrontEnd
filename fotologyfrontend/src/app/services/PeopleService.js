import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/people'; // Cambia esta URL por la de tu backend

const PeopleService = {
  // Obtener todas las personas
  getAll: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Error al obtener las personas:', error);
      throw error;
    }
  },

  // Obtener una persona por ID
  getById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener la persona con ID ${id}:`, error);
      throw error;
    }
  },

  // Crear una nueva persona
  create: async (data) => {
    try {
      const response = await axios.post(API_URL, data, {
        headers: { 'Content-Type': 'application/json' },
      });
      return response.data;
    } catch (error) {
      console.error('Error al crear la persona:', error);
      throw error;
    }
  },

  // Actualizar una persona existente
  update: async (id, data) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, data, {
        headers: { 'Content-Type': 'application/json' },
      });
      return response.data;
    } catch (error) {
      console.error(`Error al actualizar la persona con ID ${id}:`, error);
      throw error;
    }
  },

  // Eliminar una persona
  delete: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error al eliminar la persona con ID ${id}:`, error);
      throw error;
    }
  },
};

export default PeopleService;