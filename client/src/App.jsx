import { useState } from 'react'
import Home from './components/Home';
import DroopyImage from './components/droopyImage'
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
      
      </ApolloProvider>
    
  )
}

export default App
