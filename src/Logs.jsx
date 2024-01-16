import React from 'react';
import { useParams } from 'react-router-dom';

const Logs = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Lucky Log</h1>
      <h3>Status</h3>
      <input type="text" placeholder='Huberium Celiulitus' />
      <h3>Description</h3>
      <input type="text" placeholder='Removed some fat...' />
      <div className='button'>
        <button>ADD PET</button>
        <button onClick={() => window.history.back()}>GO BACK</button>
      </div>
    </div>
  );
};

export default Logs;
