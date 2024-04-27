import { useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import Home from "./components/home";
import DroopyImage from "./components/droopyImage";
import FaqDrawer from "./components/FaqDrawer";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ShirtCart from "./components/ShirtCart";
//add additional data to the request as it comes in and goes out
import { setContext } from "@apollo/client/link/context";
//The address of the server the app will be talking to
const httpLink = createHttpLink({
  uri: "/graphql",
});
//Looks for a token and sends it with every request (or sends "")
const authLink = setContext((_, { headers }) => {
  //get authentication token from local storage if its exists
  const token = localStorage.getItem("id_token");
  //return the header to the context so client can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API so that 
  // every request includes an authorization header -> then send request to address speciied in httpLink
  link: authLink.concat(httpLink),
  //remember previous requests (optimization)
  cache: new InMemoryCache(),
});
//jwt middleware that will attach the JWT to every request as an 'authorization' header
import "./App.css";
function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);

  //module 21 activity 23 line 22 example of conditional render in header component
  return (
    <ApolloProvider client={client}>
      <div style={{ backgroundColor: "#2F4F4F" }}>
        <div style={{ display: "flex" }}>
          <FaqDrawer />
          <SignUp isSignedUp={isSignedUp} setIsSignedUp={setIsSignedUp} />
          {isSignedUp && <ShirtCart />}
          <SignIn />
        </div>

        <Home />
      </div>
    </ApolloProvider>
  );
}

export default App;
