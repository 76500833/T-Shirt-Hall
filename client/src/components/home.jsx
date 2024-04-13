import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_SHIRTS } from '../utils/query';

function Home() {
  //choose a random svg wave
  const wave1 = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,117.3C672,139,768,213,864,213.3C960,213,1056,139,1152,128C1248,117,1344,171,1392,197.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
  console.log(wave1)  
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