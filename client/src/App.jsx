import { useState } from 'react'
import Home from './components/home';
import DroopyImage from './components/droopyImage'
import FaqDrawer from './components/FaqDrawer'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
});
import './App.css'
function App() {
  const [count, setCount] = useState(0)
//module 21 activity 23 line 22 example of conditional render in header component
  return (
    <ApolloProvider client={client}>
      <div style={{display: "flex"}}>
        < FaqDrawer />
      < SignUp />
      < SignIn />
      </div>
      < Home />
   
    </ApolloProvider>


  )
}

export default App
