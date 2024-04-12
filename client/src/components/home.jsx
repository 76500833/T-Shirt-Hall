import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_SHIRTS } from '../utils/query'; // adjust the path according to your project structure

function Home() {
    // Execute the query on component load
    const { loading, error, data } = useQuery(GET_SHIRTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    // Use the shirts data from the query result
    const shirts = data.shirts;

    return (
        <div>
            {shirts && Array.isArray(shirts) && shirts.map((shirt) => {
                console.log(shirt.image); // Log the image of each shirt
                return (
                    <div key={shirt._id}>
                        <img src={`../../public/assets/${shirt.image.split('/').pop()}`} alt={shirt.name} />
                        <h2>{shirt.name}</h2>
                        <p>{shirt.description}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Home;