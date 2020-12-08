import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import {Route, Switch} from 'react-router-dom';
// import switch and route


function App() {
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
       <LoginPage />
       } />
     <Route exact path='/signup' render={(props) =>
        <SignupPage />
       } />
    
   </Switch>
    <Footer />
    </div>
  );
}

export default App;
