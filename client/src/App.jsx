import { useState } from 'react'
import Home from './components/home';
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
<<<<<<< HEAD
  < DroopyImage />
=======
      < DroopyImage />
>>>>>>> e21f656b74916fbb3bdd813fd386eb0e689e87ba
      < Home/>
      < Faq />
      </ApolloProvider>
    
  )
}

export default App
