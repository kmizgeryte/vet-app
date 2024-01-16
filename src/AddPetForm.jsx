
// import React, { useContext, useState } from 'react';
// import { AppContext } from './AppContext';

// const AddPetForm = () => {
//     const { addPet } = useContext(AppContext);
//     const [formData, setFormData] = useState({
//       name: '',
//       dob: '',
//       client_email: '',
//     });
  
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       addPet(formData);
//     };
  
//     return (
//       <div className="form">
//         <h1>Add Your Pet</h1>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Pet Name:</label><br/>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Lokis"
//             required
//           /><br/>
//           <label htmlFor="dob">Pet Birthday:</label><br/>
//           <input
//             type="date"
//             id="dob"
//             name="dob"
//             value={formData.dob}
//             onChange={handleChange}
//             required
//           /><br/>
//           <label htmlFor="client_email">Pet Email:</label><br/>
//           <input
//             type="email"
//             id="client_email"
//             name="client_email"
//             value={formData.client_email}
//             onChange={handleChange}
//             placeholder="lokis@gmail.com"
//             required
//           /><br/>
//           <input className='submit' type="submit" value="ADD PET!" />
//         </form>
//       </div>
//     );
//   };
  
//   export default AddPetForm;

// AddPetForm.jsx
import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 
import { AppContext } from './AppContext';

const AddPetForm = ({ isOpen, onClose }) => {
  const { addPet } = useContext(AppContext);
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    client_email: '',
  });
  const { id } = useParams();
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPet = {
      ...formData,
    };

    // Pridėti naują gyvūną
    const addedPet = await addPet(newPet);

    if (addedPet && addedPet.id) {
        navigate(`/`);
      }

    onClose();
  };

  return (
    <div className={`form ${isOpen ? 'open' : ''}`}>
      <h1>Add Your Pet</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Pet Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Lokis"
          required
        />
        <label htmlFor="dob">Pet Birthday:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
        <label htmlFor="client_email">Pet Email:</label>
        <input
          type="email"
          id="client_email"
          name="client_email"
          value={formData.client_email}
          onChange={handleChange}
          placeholder="lokis@gmail.com"
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddPetForm;

