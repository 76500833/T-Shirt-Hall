import { useState, useEffect } from 'react'
import { Routes, Route, Linnk } from "react-router-dom";
import Home from './components/home';
import authService from './services/auth.service';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Private from "./components/Private";

import DroopyImage from './components/droopyImage'
import Faq from './components/faq'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';




const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql', 
  cache: new InMemoryCache()
});
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  const [currentUser, setCurrentUser] = useState(undefined); 

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };



  return (
    
    <ApolloProvider client={client}>
<div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>

          {currentUser && (
            <li className="nav-item">
              <Link to={"/private"} className="nav-link">
                Private
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                Logout
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/signup"} className="nav-link">
                Sign up
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/private" element={<Private />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
      < Home/>
      < Faq />
      </ApolloProvider>
        
  )

  
}



export default App
