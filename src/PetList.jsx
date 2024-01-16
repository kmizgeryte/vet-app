
// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import './App'; // Update the import path

// const PetList = () => {
//   const { pets, dob, setDob, deletePet } = useContext(AppContext);

//   return (
//     <section className="card">
//       <main>
//         <h2>Pet List</h2>
//         <Link to="/add">
//           <button className="addPet">ADD PET</button>
//         </Link>
//       </main>
    //   <div className="pet-list">
    //     {pets.map((pet) => (
    //       <div key={pet.id} className="pet-card">
    //         <h2>{pet.name}</h2>
    //         <p>{pet.dob}</p>
    //         <p>{pet.client_email}</p>
    //         <div className="button">
    //           <button
    //             className="orange"
    //             onClick={() => setDob(new Date().toLocaleDateString('lt'))}
    //           >
    //             View Log
    //           </button>
    //           <button className="white" onClick={() => deletePet(pet.id)}>
    //             Delete
    //           </button>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
//       <footer>
//         <p>Copyright © VetBee 2023. All right reserved</p>
//       </footer>
//     </section>
//   );
// };

// export default PetList;


// PetList.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from './AppContext';

const PetList = () => {
  const { pets, dob, setDob, deletePet } = useContext(AppContext);

  return (
    <section className="card">
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
            <p>{pet.dob}</p>
            <p>{pet.client_email}</p>
            <div className="button">
              <button
                className="orange"
                onClick={() => setDob(new Date().toLocaleDateString('lt'))}
              >
                View Log
              </button>
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


