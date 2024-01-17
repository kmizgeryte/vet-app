import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 
import { AppContext } from './AppContext';
import { DiAtom } from "react-icons/di";


const AddPetForm = ({ isOpen}) => {
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
        alert("sekmingai pridetas")
      }

    
  };


  return (
    <div className="petForm">
      <h4 className='logo'><DiAtom /><b>vetbee</b></h4><hr/>
     <div className={`form ${isOpen ? 'open' : ''}`}>
      <h1>Add Your Pet</h1>
      <form className='form' onSubmit={handleSubmit}>
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
        {/* <Link id='link' to={`/PetList/${id}`} className="log-link">GO BACK</Link> */}
        <input className='btn' type="submit" value="ADD PET !" />
      </form>
    </div> 
    <footer>
    <p>Copyright © VetBee 2023. All right reserved</p>
    </footer>
    </div>
    
  );
};

export default AddPetForm;

