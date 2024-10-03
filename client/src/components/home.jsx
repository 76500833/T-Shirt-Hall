import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_SHIRTS } from "../utils/query";
import "../App.css";

function Home() {
  // Get all shirts on component load.
  const { loading, error, data } = useQuery(GET_SHIRTS);
  console.log("Data:", data); // Log the data
  console.log("Error:", error); // Log the error
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // Use the shirt data from the query result
  const shirt = data.shirts;
  // Iterate over each shirt so we can do something per shirt.
  const mapOfShirts = shirt.map((shirt, index) => (
    // per shirt insert a card

    <div
      className="z-1 card w-96 shadow-xl"
      style={{ border: "1px solid grey", marginBottom: "15px" }}
    >
      <figure>
        <img
          className="shirtImage"
          src={`/images/${shirt.image}`}
          alt={shirt.name}
          style={{ width: "100%" }}
        />
      </figure>
      <select
        className="btn cursor-pointer text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onChange={(e) => setSelectedSize(e.target.value)}
        // Stylize the card
        style={{
          borderTop: "1px solid black",
          padding: "10px",
          height: "38px",
          borderTopLeftRadius: "0",
          borderTopRightRadius: "0",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          color: "black",
          width: "100%",
          fontSize: "medium",

          backgroundColor: "White",

        }}
        // Size dropdown
      >
        //text in the undropped dropdown.
        <option value="" selected disabled hidden>
          Select a Size
        </option>
        //dropdown text
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
      </select>


      <div
        style={{
          display: "flex",
          gap: "20px",
          margin: "10px",
          backgroundColor: "black",
        }}
      >
        <div className="relative z-0" style={{ width: "90%" }}>
          <button
            className="relative inline-flex items-center justify-center p-0.5 mb-9 me-2 overflow-hidden text-sm font-medium cursor-pointer text-black bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => {
              if (selectedSize) {
                setCart([...cart, { title: shirt.title, size: selectedSize }]);
                alert(
                  `Size ${selectedSize} selected, added ${shirt.title} to cart`,
                );
              } else {
                alert("No size selected");
              }
            }}
          >
            Add to Cart
          </button>{" "}
          <div
            className="badge badge-outline text-black "
            style={{
              position: "absolute",
              marginRight: ".02px",
              color: "white",
            }}
          >
            $15
          </div>

        </div>
      </div>
    </div>
  ));

  //display the fallowing in the page
  return (
    <>
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "1.3rem",
        }}
      >
        <h1 class="title">
          <span class="cursor-pointer text-black bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-cyan-100 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-large rounded-lg text-sm px-9 py-2.5 text-center me-2 mb-2 title">
            T-Shirt Hall
          </span>
        </h1>
      </span>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {mapOfShirts}
      </div>
    </>
  );
}

export default Home;
