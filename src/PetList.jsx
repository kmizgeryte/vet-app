import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from './AppContext';
import { DiAtom } from "react-icons/di";
// import AddPetForm from './AddPetForm';
// import Logs from './Logs';


const PetList = () => {
  const { pets, dob, setDob, deletePet } = useContext(AppContext);

  const formatDate = (dateString) => {
    
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('lt', options);
  };
  

  return (
    <section className="card">
      <h4 className='logo'><DiAtom /><b>vetbee</b></h4><hr/>
      <main>
        <h2>Pet List</h2>
        <Link to="/add">
          <button className="addPet">ADD PET</button>
        </Link>
      </main>
      <div className="pet-list">
        {pets.map((pet) => (
          <div key={pet.id} className="pet-card">
            <h2>{pet.name}</h2>
            <p className='date'>{formatDate(pet.dob)}</p>
            <p>{pet.dom}</p>
            <p>{pet.client_email}</p>
            <div className="button">
            <Link to={`/Logs/${pet.id}`}>
                <button className="orange">View Log</button>
              </Link>
              <button className="white" onClick={() => deletePet(pet.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <footer>
        <p>Copyright © VetBee 2023. All right reserved</p>
      </footer>
    </section>
  );
};



export default PetList;


