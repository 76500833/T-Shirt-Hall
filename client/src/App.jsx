import { useState } from 'react'
import Home from './components/home';
import DroopyImage from './components/droopyImage'
import FaqDrawer from './components/FaqDrawer'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import ShirtCart from './components/ShirtCart'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
});
import './App.css'
function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);

  //module 21 activity 23 line 22 example of conditional render in header component
  return (
    <ApolloProvider client={client}>
      <div style={{backgroundColor: "#557799"}}>
      <div style={{display: "flex"}}>
        < FaqDrawer />
      < SignUp isSignedUp={isSignedUp} setIsSignedUp={setIsSignedUp} />
        {isSignedUp && <ShirtCart />}
      < SignIn />
      </div>
    
      < Home />
      </div>
   
   
    </ApolloProvider>


  )
}

export default App
