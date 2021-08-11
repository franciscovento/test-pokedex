import './app.css';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SearchPage from './pages/SearchPage/SearchPage';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import { useState } from 'react';


function App() {
  const [user, setUser] = useState()
 
const handleChange = (e) =>{
setUser(e.target.value)
} 



  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path='/' >
            <LoginPage handleChange={handleChange} />
            </Route>
            <Route exact path='/search' >
            <SearchPage 
            user={user} />
            </Route>
            <Route exact path={`/details/:pokemon`} >
            <DetailsPage />
            </Route>
            <Route exact path='/details' >
            <Redirect to='/search' />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
