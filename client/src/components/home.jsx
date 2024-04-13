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
    const mapOfShirts = shirt.map(shirt => (
<div className="card w-96 bg-base-100 shadow-xl">
<figure><img src={`/images/${shirt.image}`} alt={shirt.name} style={{width: "100%"}} /></figure>
<div className="card-body">
<div class="relative z-0">
    <button className="btn btn-primary">Add to Cart</button>
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