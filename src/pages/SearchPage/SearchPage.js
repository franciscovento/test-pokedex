import '../SearchPage/searchPage.css'
import { useEffect, useState } from 'react'
import getInfo from '../../services/getInfo'
import CardPokemon from '../../components/cardPokemon/CardPokemon';
import Pagination from '../../components/pagination/Pagination';
import axios from 'axios'
import FormSearcher from '../../components/formSearcher/FormSearcher';

const SearchPage = ({user}) => {


const [pokedata, setPokeData] = useState([]);
const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon");
const [nextPage, setNextPage] = useState();
const [prevPage, setPrevPage] = useState();
const [loading, setLoading] = useState(true);
const [allPokemon, setAllPokemon] = useState([]);



useEffect(()=>{
setLoading(true)
const miFunc = async () =>{
const data = await getInfo(currentPage)
setPokeData(data.results);
setNextPage(data.next);
setPrevPage(data.previous);
setLoading(false);
}
miFunc();
},[currentPage])


useEffect(()=>{
  if (pokedata) {
    const createPokemonObject = (results) => {
      results.forEach( async (pokemon) => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        setAllPokemon(prev => [...prev, response.data]);
   
      }) 
    }
    createPokemonObject(pokedata)
  }
},[pokedata])

const goToNextPage = ()=> {
  setCurrentPage(nextPage);
  setAllPokemon([]);
}

const goToPrevPage = ()=> {
  setCurrentPage(prevPage);
  setAllPokemon([]);
}
  
  return (
    <div className='searchPage' >
      {
      
      loading ? <div className='loading'>loading...</div> : 

      <div className='searchPageContainer'>
        <h3 className='user'> Master: {user} </h3> 
        <button className='logoutbutton'>Logout</button>
        <h1>Busca el pokemón</h1>
        <FormSearcher />
        <div className='sectionCard'>
        {allPokemon.map((pokemon, index) => 
        <CardPokemon 
        id={pokemon.id}
        name={pokemon.name}  
        image={pokemon.sprites.other.dream_world.front_default}
        type={pokemon.types[0].type.name}
        key={index}
        /> 
        )}
        </div>
        <Pagination 
        goToNextPage={nextPage? goToNextPage: null} 
        goToPrevPage={prevPage? goToPrevPage: null} />
      </div>
      }
        
    </div>
  )
}

export default SearchPage
