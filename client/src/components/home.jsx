import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_SHIRTS, GET_CART } from "../utils/query";
import { CREATE_CART, ADD_TO_CART } from "../graphql/mutations";
import "../App.css";

function Home() {
  const [createCart, { data: createCartData }] = useMutation(CREATE_CART);
  const [addToCart, { data: addToCartData }] = useMutation(ADD_TO_CART);
  const [selectedSize, setSelectedSize] = useState();
  const {
    loading: cartLoading,
    error: cartError,
    data: cartData,
  } = useQuery(GET_CART);
  const {
    loading: shirtsLoading,
    error: shirtsError,
    data: shirtsData,
  } = useQuery(GET_SHIRTS);
  console.log("Data:", shirtsData); // Log the data
  console.log("Error:", shirtsError); // Log the error
  if (shirtsLoading) return <p>Loading...</p>;
  if (shirtsError) return <p>Error :(</p>;

  // Use the shirt data from the query result
  const shirt = shirtsData.shirts;
  const mapOfShirts = shirt.map((shirt, index) => (
    <div
      className="z-1 card w-96 bg-base-100 shadow-xl"
      style={{ border: "1px solid black", marginBottom: "15px" }}
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
        }}
        // Size dropdown
        className="text-white bg-green-400 hover:bg-green-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        <option value="" selected disabled hidden>
          Select a Size
        </option>
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
      </select>

      <div style={{ display: "flex", gap: "20px", margin: "10px" }}>
        <div className="relative z-0" style={{ width: "40%" }}>
          <button
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
            onClick={async () => {
              if (selectedSize) {
                if (
                  cartData &&
                  cartData.cart &&
                  Object.keys(cartData.cart).length > 0
                ) {
                  // If the user has a cart, add the shirt to the cart
                  await addToCart({
                    variables: { title: shirt.title, size: selectedSize },
                  });
                  alert(
                    `Size ${selectedSize} selected, added ${shirt.title} to cart`
                  );
                } else {
                  // If the user doesn't have a cart, create a new cart and add the shirt to it
                  await createCart({
                    variables: { userId: userId, productId: shirt.id },
                  });
                  alert(
                    `Size ${selectedSize} selected, added ${shirt.title} to new cart`
                  );
                }
              } else {
                alert("No size selected");
              }
            }}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-300 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Add to Cart
            </span>
          </button>{" "}
          <div
            className="badge badge-outline text-black "
            style={{
              position: "absolute",
              marginRight: ".02px",
              backgroundColor: "lightgreen",
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
      <span style={{ display: "flex", justifyContent: "center" }}>
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-500 from-sky-200">
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

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "",
          padding: "20px",
          position: "right",
          width: "100%",
          bottom: "0",
          fontFamily: "ComicSans",
        }}
      >
        <div>About</div>
        <div>Contact</div>
        <div>Terms of Service</div>
        <div>Privacy Policy</div>
        <div style={{ alignSelf: "center" }}>
          T-Shirt-Hall 2024 All Rights Reserved
        </div>
      </footer>
    </>
  );
}

export default Home;
