import React from 'react'

function AdvisorBoard() {
  return (
    <div className='description'>
        <h1 style={{textAlign:"center",fontSize:"4rem",fontWeight:"800"}}>Advisory Board </h1>
        <ul style={{display:"grid",gridTemplateColumns: "repeat(2, 1fr)",listStyle: "none", padding: "3.2rem",justifyItems:"center",fontSize:"2.3rem",fontWeight:"700" }}>
            <li>Kris Gopalakrishnan</li>
            <li>Ajai Chowdhry</li>
            <li>Arun Jain</li>
            <li>Ashish Dhawan</li>
            <li>Anand Deshpande</li>
            <li>Sanjeev Bikhchandani</li>
           <li>Rajan Anandan</li>
           <li>Shridhar Shukla</li>
           <li>Mukesh Bansal</li>
           <li>Abhishek Singhania </li>
           <li>C P Gurnani</li>
           <li>Srini Raju</li>
           <li>P S Narayan</li>
           <li>Manish Dhingra</li>
           <li>Gaurav Bhatnagar</li>
           <li>Amit Chaddha</li> 
           <li>Prof Ashok Jhunjhunwala</li>
           <li>Venkataraman Rajaraman</li>
           <li>Saurabh Srivastav</li>
        </ul>
    </div>
  )
}

export default AdvisorBoard
