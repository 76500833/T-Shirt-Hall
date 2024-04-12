import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_SHIRTS } from '../utils/query';

function Home() {
    // Execute the query on component load
    const { loading, error, data } = useQuery(GET_SHIRTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    // Use the shirts data from the query result
    const shirts = data.shirts;
    console.log(shirts);
 return (
        <div>
            {shirts.map((shirt) => (
                <div key={shirt._id}>
                    <img src={shirt.image} alt={shirt.name} />
                    <h2>{shirt.name}</h2>
                    <p>{shirt.description}</p>
                </div>
            ))}
        </div>
        
    );
}

export default Home;