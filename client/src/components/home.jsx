import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_SHIRTS } from '../utils/query';

function Home() {

  // Get all shirts on component load.
  const { loading, error, data } = useQuery(GET_SHIRTS);
  console.log('Data:', data); // Log the data
  console.log('Error:', error); // Log the error
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // Use the shirt data from the query result
  const shirt = data.shirts;
  // Iterate over each shirt so we can do something per shirt.
  const mapOfShirts = shirt.map((shirt, index) => (
    // per shirt insert a card
    <div className="card w-96 bg-base-100 shadow-xl" style={{ border: "1px solid black", marginBottom: "15px" }}>
    //Image of shirt.
      <figure>
        <img src={`/images/${shirt.image}`} alt={shirt.name} style={{ width: "100%" }} />
      </figure>
      <select
      // Stylize the card
        style={{
          padding: "10px",
          height: "44px",
          borderTopLeftRadius: "0",
          borderTopRightRadius: "0",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          color: "white"
        }}

        // Size dropdown
        className="bg-gradient-to-r from-blue-900 to-blue-500 row-start-1 col-start-1 bg-slate-50 dark:bg-slate-800">
        //text in the undropped dropdown.
        <option value="" selected disabled hidden>Select a Size</option>
        //dropdown text
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
      </select>

      //Add to cart button.
      <div style={{ display: "flex", gap: "20px", margin: "10px" }}>
        <div class="relative z-0" >
          <button style={{ color: "white", padding: "10px", borderRadius: "10px", marginLeft: "10px", marginBottom: "5px" }} className="bg-gradient-to-r from-green-700 to-green-500"> Add to Cart</button>
        </div>
      </div>
    </div>
  
  ));

  //display the fallowing in the page
  return (
    <>
    //header
      <span style={{ display: "flex", justifyContent: "center" }}>
        <h1 class="text-5xl font-extrabold dark:text-white" style={{ marginBottom: "25px" }}>T Shirt Hall</h1>
      </span>

      //style the layout of the shirts
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        
        //content of map of shirts from above
        {mapOfShirts}
      </div>
    </>
  );
}

export default Home;