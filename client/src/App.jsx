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

  return (
    <ApolloProvider client={client}>

      < Home/>
      < Faq />
      </ApolloProvider>
    
  )
}

export default App
