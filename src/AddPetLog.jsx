import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { DiAtom } from "react-icons/di";

const AddPetLog = () => {
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

const handleAddLog = async () => {
    try {
      const response = await fetch('https://vetbee-backend.glitch.me/v1/logs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pet_id: id,
          status: status,
          description: description,
        }),
      });
  
      if (response.ok) {
        // Duomenys sėkmingai išsiųsti
        alert('Log added successfully!');
        navigate(`/logs/${id}`);
      } else {
        // Klaida siunčiant duomenis
        console.error('Failed to add log:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding log:', error);
    }
  };
  

  return (
    <>
    <h4 className='logo'><DiAtom /><b>vetbee</b></h4><hr/>
    <div className='luckyLog'>
      <h1>Lucky Log</h1>
      <h3>Status</h3>
      <input type="text" placeholder='Huberium Celiulitus' value={status} onChange={(e) => setStatus(e.target.value)} />
      <h3>Description</h3>
      <input id='description' type="text" placeholder='Removed some fat...' value={description} onChange={(e) => setDescription(e.target.value)} />
      <div className='button'>
        <button className='btn' onClick={handleAddLog}>ADD LOG</button>
        <Link id='link' to={`/logs/${id}`} className="log-link">GO BACK</Link>
      </div>
    </div>
    <footer>
        <p>Copyright © VetBee 2023. All right reserved</p>
      </footer>
    </>
  
  );
};

export default AddPetLog;
