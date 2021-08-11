import '../formSearcher/formSearcher.css'
import axios from 'axios';
import {useEffect, useState} from 'react'
const FormSearcher = () => {

  const [valueTypes, setValueTypes] = useState([]);
  
useEffect(()=>{
  const getValueInfo= async () => {
    let data = await axios.get('https://pokeapi.co/api/v2/type')
    console.log(data.data.results)
    setValueTypes(data.data.results);
  }
getValueInfo();
},[])

const list = valueTypes.map((x, index) => <option key={index} value={x.name}>{x.name}</option> )

  return (
    <form className='form'>
    <div className='inputButtonContainer'>
      <input type="text" placeholder='Escribe el nombre del pokemón' />
      <button type='submit'>Buscar</button>
    </div>
    <select name="types" id="select">
      <option value="">All</option>
      {list}
    </select>
  </form>
  )
}

export default FormSearcher
