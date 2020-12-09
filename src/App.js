import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {useState} from 'react';
import {getUser, logout} from './services/userService';
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

function handleLogout() {
  logout(); // this removes the token from localStorage
  setUserState({user:null});
  props.history.push('/');
}
// however, inside of userService you need to import the removeToken function from tokenService
// define a logout helper function called handleLogout
// import logout from userService
// call the logout function defined in userService from handleLogout 
// set userState.user to null
// programatically navigate the user to the homepage



  return (
    <div className="App">
     <Header user={userState.user} handleLogout={handleLogout} />
     <Switch>
     {/*  inside switch you need a route for each page  */}
       <Route exact path='/' render={(props) =>
       <HomePage />
       } />
       <Route exact path='/dashboard' render={(props) =>
       getUser() ?
       <DashboardPage />
       :
       <Redirect to="/login"/>
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
