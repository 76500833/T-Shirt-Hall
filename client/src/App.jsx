import { useState } from 'react'
import Home from './components/home';
import DroopyImage from './components/droopyImage'
import FaqDrawer from './components/FaqDrawer'
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
      <div>
      < FaqDrawer/>
      </div>
      < Home/>
      </ApolloProvider>
    
  )
}

export default App
