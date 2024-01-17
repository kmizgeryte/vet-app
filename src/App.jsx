
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './AppContext';
import PetList from './PetList';
import AddPetForm from './AddPetForm';
import Logs from './Logs';
import AddPetLog from './AddPetLog';



const App = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PetList />} />
          <Route path="/add" element={<AddPetForm />} />
          <Route path="/logs/:id" element={<Logs />} />
          <Route path="/add-pet-log/:id" element={<AddPetLog />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};


export default App;
