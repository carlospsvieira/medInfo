import './App.css'
import { useEffect, useState } from 'react'

function App() {
const [ medInfo, setMedInfo ] = useState({})
const titleStyle = 'text-bold';

useEffect(() => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': "8e2cdbb44cmshe00bbdb5f83b9b6p1d10e1jsnf92a330b2fbe",
      'X-RapidAPI-Host': "drug-info-and-price-history.p.rapidapi.com",
    }
  };
  
  fetch('https://drug-info-and-price-history.p.rapidapi.com/1/druginfo?drug=advil', options)
    .then(response => response.json())
    .then(response => setMedInfo(response[0]))
    .catch(err => console.error(err));
}, [])

  return (
    <div>
      <h1 className='text-2xl font-bold'>MedInfo</h1>
      <p>{`Brand Name: ${medInfo.brand_name}`}</p>
      <p>{`Generic Name: ${medInfo.generic_name}`}</p>
      <p>{`Dosage Form: ${medInfo.dosage_form}`}</p>
      <p>{`Route: ${medInfo.route}`}</p>
      <p>Class: </p>
      {medInfo.pharm_class?.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  )
}

export default App
