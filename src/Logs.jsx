
import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { DiAtom } from "react-icons/di";

 
const Logs = () => {
  const [listData, setListData] = useState([]);
  const { id } = useParams()
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(`https://vetbee-backend.glitch.me/v1/logs/${id}`)
        if (resp.ok) {
          const json = await resp.json();
          setListData(json);
        } else {
          console.error('Nepavyko gauti duomenų iš API');
        }
      } catch (error) {
        console.error('Įvyko klaida:', error)
      }
    }
 
    fetchData()
  }, [id])
 
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('lt', options)
  }
 
  return (
    <div>
      <p className='logo'><DiAtom /><strong>  vetbee</strong></p><hr/>
      <div className="logtop">
            <h1>{listData.length > 0 ? `${listData[0].name}: Health Records` : 'Nėra duomenų...'}</h1>
            <div className='link'>
            <Link id='btn' to={`/add-pet-log/${id}`}>ADD LOG</Link>
            <Link id='btn' to='/' className="log-link">GO BACK</Link>
            </div>
        </div>
        <div className="loginputs">
            {listData.map(({ status, description, dob }, index) => (
            <div key={index} className="loginput">
              <h2>{status}</h2>
              <p>{description}</p>
              <div>
              <p className='date'>{formatDate(dob)}</p>
              </div>
            </div>
          ))}
        </div>
        <footer>
        <p>Copyright © VetBee 2023. All right reserved</p>
      </footer>
    </div>
  )
}
 
export default Logs
