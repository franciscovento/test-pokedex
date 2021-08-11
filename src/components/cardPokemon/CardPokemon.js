import '../cardPokemon/cardPokemon.css'
import {Link} from 'react-router-dom'


const CardPokemon = ({id, name, image, type}) => {

    let styles = `cardPokemon ${type}`
 

  return (
    <Link to={`details/${name}`}>
    <div className='containerCard' >
        <div className={styles}>
        <p>#{id}</p>
        <img src={image} alt="" />
        <h3>{name}</h3>
        <p>{type}</p>
    </div>
    </div>
    </Link>
  )
}

export default CardPokemon
