import '../button/buttonPrimary.css'
import {Link} from 'react-router-dom';

const buttonPrimary = ({to, text,}) => {
  return (
      <div>
        <Link to={to}><button type="submit">{text}</button></Link>
      </div>
  )
}

export default buttonPrimary
