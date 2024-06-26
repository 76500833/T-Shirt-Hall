import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_SHIRTS } from '../utils/query';
import '../App.css'

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
   
    <div className="z-1 card w-96 bg-base-100 shadow-xl" style={{ border: "1px solid black", marginBottom: "15px" }}>
      <figure>
        <img className="shirtImage" src={`/images/${shirt.image}`} alt={shirt.name} style={{ width: "100%" }} />

      </figure>
      <select
        onChange={(e) => setSelectedSize(e.target.value)}
        // Stylize the card
        style={{
          padding: "10px",
          height: "38px",
          borderTopLeftRadius: "0",
          borderTopRightRadius: "0",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          color: "black",
          width: "100%",
          fontSize: "medium",
          fontWeight: "bold"


        }}

        // Size dropdown
        className="text-white bg-green-400 hover:bg-green-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        //text in the undropped dropdown.
        <option value="" selected disabled hidden>Select a Size</option>
        //dropdown text
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
      </select>

      <div style={{ display: "flex", gap: "20px", margin: "10px", }}>


        <div className="relative z-0" style={{ width: "40%" }} >
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800" onClick={() => {
            if (selectedSize) {
              setCart([...cart, { title: shirt.title, size: selectedSize }]);
              alert(`Size ${selectedSize} selected, added ${shirt.title} to cart`);
            } else {
              alert('No size selected');
            }
          }}>
            <span className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800" style={{margin: "0px", color:"black", fontWeight: "bold"}}>
              Add to Cart
            </span>
          </button>          <div className="badge badge-outline text-black " style={{ position: "absolute", marginRight: ".02px", backgroundColor:"lightgreen", fontWeight: "bold"}}>$15</div>
        </div>
      </div>
    </div>



  ));



  //display the fallowing in the page
  return (
    <>
      <span style={{ display: "flex", justifyContent: "center" }}>
      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-500 from-sky-200">T-Shirt Hall</span></h1>

      </span>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {mapOfShirts}
        
      </div>
    

      {/* Footer */}
      <footer style={{backgroundColor: '', padding: '20px', position: 'right', width: '100%', bottom: '0', fontFamily: "ComicSans"}}>
        <div>About</div>
        <div>Contact</div>
        <div>Terms of Service</div>
        <div>Privacy Policy</div>
        <div style={{ alignSelf: 'center' }}>T-Shirt-Hall 2024 All Rights Reserved</div>
      </footer>
    </>
  );

  
}


export default Home;