// AppContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const [dob, setDob] = useState('');

  const fetchPets = async () => {
    try {
      const response = await axios.get('https://vetbee-backend.glitch.me/v1/pets');
      setPets(response.data);
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  const addPet = async (newPet) => {
    try {
      await axios.post('https://vetbee-backend.glitch.me/v1/pets', newPet);
      fetchPets();
    } catch (error) {
      console.error('Error adding pet:', error);
    }
  };

  const deletePet = async (id) => {
    try {
      await axios.delete(`https://vetbee-backend.glitch.me/v1/pets/${id}`);
      fetchPets();
    } catch (error) {
      console.error('Error deleting pet:', error);
    }
  };

  return (
    <AppContext.Provider value={{ pets, dob, setDob, addPet, deletePet }}>
      {children}
    </AppContext.Provider>
  );
};
