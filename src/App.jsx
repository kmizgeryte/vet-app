
// import React, { useEffect, useState, useContext } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import axios from 'axios';
// import AddPetForm from './AddPetForm'
// // import '.scss/style.scss'
// // import PetList from './PetList';

// const API_URL = 'https://vetbee-backend.glitch.me/v1/pets';

// const AppContext = React.createContext();

// const AppProvider = ({ children }) => {
//   const [pets, setPets] = useState([]);
//   const [dob, setDob] = useState('');

//   const fetchPets = async () => {
//     try {
//       const response = await axios.get(API_URL);
//       setPets(response.data);
//     } catch (error) {
//       console.error('Error fetching pets:', error);
//     }
//   };

//   useEffect(() => {
//     fetchPets();
//   }, []);

//   const addPet = async (newPet) => {
//     try {
//       await axios.post(API_URL, newPet);
//       fetchPets();
//     } catch (error) {
//       console.error('Error adding pet:', error);
//     }
//   };

//   const deletePet = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/${id}`);
//       fetchPets();
//     } catch (error) {
//       console.error('Error deleting pet:', error);
//     }
//   };

//   return (
//     <AppContext.Provider value={{ pets, dob, setDob, addPet, deletePet }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// const PetList = () => {
//   const { pets, dob, setDob, deletePet } = useContext(AppContext);

//   return (
//     <section className='card'>
//       <main>
//         <h2>Pet List</h2>
//         <button className='addPet'>ADD PET</button>
//       </main>
//        <div className="pet-list">
//       {pets.map((pet) => (
//         <div key={pet.id} className="pet-card">
//           <h2>{pet.name}</h2>
//           <p>{pet.dob}</p>
//           <p>{pet.client_email}</p>
//           <div className="button">
//            <button className='orange' onClick={() => setDob(new Date().toLocaleDateString('lt'))}>View Log</button>
//           <button className='white' onClick={() => deletePet(pet.id)}>Delete</button> 
//           </div>
          
//         </div>
//       ))}
//     </div> 
//     <footer>
//       <p>Copyright © VetBee 2023. All right reserved</p>
//     </footer>
//     </section>
  
//   );
// };

// // const AddPetForm = () => {
// //   const { addPet } = useContext(AppContext);
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     dob: '',
// //     client_email: '',
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     addPet(formData);
// //   };

// //   return (
// //     <div className="form">
// //       <h1>Add Your Pet</h1>
// //       <form onSubmit={handleSubmit}>
// //         <label htmlFor="name">Pet Name:</label>
// //         <input
// //           type="text"
// //           id="name"
// //           name="name"
// //           value={formData.name}
// //           onChange={handleChange}
// //           placeholder="Lokis"
// //           required
// //         />
// //         <label htmlFor="dob">Pet Birthday:</label>
// //         <input
// //           type="date"
// //           id="dob"
// //           name="dob"
// //           value={formData.dob}
// //           onChange={handleChange}
// //           required
// //         />
// //         <label htmlFor="client_email">Pet Email:</label>
// //         <input
// //           type="email"
// //           id="client_email"
// //           name="client_email"
// //           value={formData.client_email}
// //           onChange={handleChange}
// //           placeholder="lokis@gmail.com"
// //           required
// //         />
// //         <input type="submit" value="Submit" />
// //       </form>
// //     </div>
// //   );
// // };

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//     <Route path="/" element={<PetList />} />
//     <Route path="/add" element={<AddPetForm />} />
//   </Routes>
//     </Router>
  
  
//   );
// };

// export default () => (
//   <AppProvider>
//     <App />
//   </AppProvider>
// );

// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './AppContext';
import PetList from './PetList';
import AddPetForm from './AddPetForm';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PetList />} />
          <Route path="/add" element={<AddPetForm />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
