import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from './AppContext';
import { DiAtom } from 'react-icons/di';

const AddPetForm = ({ isOpen }) => {
  const { addPet } = useContext(AppContext);
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    client_email: '',
  });
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

    if (addedPet) {
      alert('Sėkmingai pridėtas gyvūnas!');
      navigate('/');
    } 
  };

  return (
    <div className={`petForm ${isOpen ? 'open' : ''}`}>
      <h4 className="logo">
        <DiAtom />
        <b>vetbee</b>
      </h4>
      <hr />
      <div className="form">
        <h1>Add Your Pet</h1>
        <form className="form" onSubmit={handleSubmit}>
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
          
          <input className="btn" type="submit" value="ADD PET !" />
        </form>
        <Link to="/">GO Back</Link>
      </div>
    </div>
  );
};

export default AddPetForm;
