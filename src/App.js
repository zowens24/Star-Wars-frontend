import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import {Route, Switch, withRouter} from 'react-router-dom';
import {useState} from 'react';
import {getUser} from './services/userService';
// import switch and route


function App(props) {

/* component state */
const [ userState, setUserState] = useState({
  user: getUser()
});

/* helper functions */

function handleSignupOrLogin() {
// place user into state using the setter function
setUserState({ user: getUser() });
// programmatically route user to the dashboard
props.history.push('/dashboard');
}

  return (
    <div className="App">
     <Header />
     <Switch>
     {/* // inside switch you need a route for each page  */}
       <Route exact path='/' render={(props) =>
       <HomePage />
       } />
       <Route exact path='/dashboard' render={(props) =>
       <DashboardPage />
       } />
      <Route exact path='/login' render={(props) =>
       <LoginPage handleSignupOrLogin={handleSignupOrLogin} />
       } />
     <Route exact path='/signup' render={(props) =>
        <SignupPage handleSignupOrLogin={handleSignupOrLogin} />
       } />
    
   </Switch>
    <Footer />
    </div>
  );
}

export default withRouter(App);
