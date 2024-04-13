import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_SHIRTS } from '../utils/query';

function Home() {

  // Execute the query on component load
    const { loading, error, data } = useQuery(GET_SHIRTS);
    console.log('Data:', data); // Log the data
    console.log('Error:', error); // Log the error
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    // Use the shirt data from the query result
    const shirt = data.shirts;
    console.log(shirt);
    const mapOfShirts = shirt.map((shirt, index) => (
      
<div className="card w-96 bg-base-100 shadow-xl">
<figure><img src={`/images/${shirt.image}`} alt={shirt.name} style={{width: "100%"}} /></figure>
<div style={{display: "flex", gap:"20px", margin: "10px"}}>
<div class="relative z-0">
    <button className="btn btn-primary">Add to Cart</button>
  </div>
  <div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text" style={{marginRight: "10px"}}>S</span> 
    <input type="radio" name={`radio-${index}`} className="radio checked:bg-red-500" />
  </label>
</div>
<div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text" style={{marginRight: "10px"}}>M</span> 
    <input type="radio" name={`radio-${index}`} className="radio checked:bg-blue-500" />
  </label>
</div>
<div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text" style={{marginRight: "10px"}}>L</span> 
    <input type="radio" name={`radio-${index}`} className="radio checked:radio-secondary" />
  </label>
</div>
</div>
</div>

    ));

    return (
<>
<span style={{display:"flex",justifyContent: "center"}}>
<h1 class="text-5xl font-extrabold dark:text-white" style={{marginBottom: "25px"}}>T Shirt Hall</h1>
</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {mapOfShirts}
        </div>
        </>
    );
}

export default Home;