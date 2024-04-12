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
    return (
        <>
        <h2 style={{fontSize: "25px"}}>About us</h2>
        <div className="divider divider-primary" style={{fontSize: "25px"}}>About Us</div>
        <div className="card w-96 bg-base-100 shadow-xl" style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "auto", flexDirection: "column", width: "30%" }}>
            <figure><img src={`/images/${data.shirts[1].image}`} alt={shirt.name} style={{width: "100%"}} /></figure>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFFFF" fill-opacity="1" d="M0,160L7.1,144C14.1,128,28,96,42,69.3C56.5,43,71,21,85,26.7C98.8,32,113,64,127,96C141.2,128,155,160,169,176C183.5,192,198,192,212,202.7C225.9,213,240,235,254,245.3C268.2,256,282,256,296,245.3C310.6,235,325,213,339,170.7C352.9,128,367,64,381,42.7C395.3,21,409,43,424,80C437.6,117,452,171,466,192C480,213,494,203,508,213.3C522.4,224,536,256,551,245.3C564.7,235,579,181,593,149.3C607.1,117,621,107,635,90.7C649.4,75,664,53,678,48C691.8,43,706,53,720,69.3C734.1,85,748,107,762,133.3C776.5,160,791,192,805,218.7C818.8,245,833,267,847,266.7C861.2,267,875,245,889,224C903.5,203,918,181,932,170.7C945.9,160,960,160,974,160C988.2,160,1002,160,1016,149.3C1030.6,139,1045,117,1059,106.7C1072.9,96,1087,96,1101,112C1115.3,128,1129,160,1144,149.3C1157.6,139,1172,85,1186,85.3C1200,85,1214,139,1228,176C1242.4,213,1256,235,1271,213.3C1284.7,192,1299,128,1313,90.7C1327.1,53,1341,43,1355,37.3C1369.4,32,1384,32,1398,58.7C1411.8,85,1426,139,1433,165.3L1440,192L1440,0L1432.9,0C1425.9,0,1412,0,1398,0C1383.5,0,1369,0,1355,0C1341.2,0,1327,0,1313,0C1298.8,0,1285,0,1271,0C1256.5,0,1242,0,1228,0C1214.1,0,1200,0,1186,0C1171.8,0,1158,0,1144,0C1129.4,0,1115,0,1101,0C1087.1,0,1073,0,1059,0C1044.7,0,1031,0,1016,0C1002.4,0,988,0,974,0C960,0,946,0,932,0C917.6,0,904,0,889,0C875.3,0,861,0,847,0C832.9,0,819,0,805,0C790.6,0,776,0,762,0C748.2,0,734,0,720,0C705.9,0,692,0,678,0C663.5,0,649,0,635,0C621.2,0,607,0,593,0C578.8,0,565,0,551,0C536.5,0,522,0,508,0C494.1,0,480,0,466,0C451.8,0,438,0,424,0C409.4,0,395,0,381,0C367.1,0,353,0,339,0C324.7,0,311,0,296,0C282.4,0,268,0,254,0C240,0,226,0,212,0C197.6,0,184,0,169,0C155.3,0,141,0,127,0C112.9,0,99,0,85,0C70.6,0,56,0,42,0C28.2,0,14,0,7,0L0,0Z"></path></svg>         


    </div>
<div style={{width: '50%', margin: "auto", justifyContent:"center"}}>
<h2 style={{marginBottom: "10px"}}>Refunds</h2>
      <div className="chat chat-start">
  <div className="chat-bubble">I dropped my sweater in the toiler<br/>Do you guys do refunds?.</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble">Hell to the naw</div>
</div>    <h2 style={{marginBottom: "10px"}}>Shipping</h2>
    <div className="chat chat-start">
  <div className="chat-bubble">How much is shipping?</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble">Free everywhere in the states, 20 dollars anywhere overseas!</div>
</div>
</div>

        </>
    );
}

export default Home;