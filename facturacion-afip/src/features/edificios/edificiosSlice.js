import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  edificios: []
};

const edificiosSlice = createSlice({
  name: 'edificios',
  initialState,
  reducers: {
    agregarEdificio: (state, action) => {
      const nuevoEdificio = {
        id: Date.now(),
        nombreEdificio: action.payload.nombreEdificio,
        cuit: action.payload.cuit,
        nombreAdministracion: action.payload.nombreAdministracion
      };
      state.edificios.push(nuevoEdificio);
      
      // Guardar en localStorage
      const edificiosGuardados = JSON.parse(localStorage.getItem('edificios') || '[]');
      edificiosGuardados.push(nuevoEdificio);
      localStorage.setItem('edificios', JSON.stringify(edificiosGuardados));
    },
    eliminarEdificio: (state, action) => {
      state.edificios = state.edificios.filter(e => e.id !== action.payload);
      
      // Actualizar localStorage
      const edificiosGuardados = state.edificios;
      localStorage.setItem('edificios', JSON.stringify(edificiosGuardados));
    },
    cargarEdificios: (state) => {
      const edificiosGuardados = JSON.parse(localStorage.getItem('edificios') || '[]');
      state.edificios = edificiosGuardados;
    },
    editarEdificio: (state, action) => {
      const { id, datos } = action.payload;
      const index = state.edificios.findIndex(e => e.id === id);
      
      if (index !== -1) {
        state.edificios[index] = {
          ...state.edificios[index],
          ...datos
        };
        
        // Actualizar localStorage
        localStorage.setItem('edificios', JSON.stringify(state.edificios));
      }
    }
  }
});

export const { agregarEdificio, eliminarEdificio, cargarEdificios, editarEdificio } = edificiosSlice.actions;

export default edificiosSlice.reducer; 