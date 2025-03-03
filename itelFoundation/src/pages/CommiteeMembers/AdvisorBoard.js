import React from "react";

function AdvisorBoard() {
  return (
    <div className="description" style={{ fontFamily: "sarif" }}>
      <h1
        style={{
          textAtrgn: "center",
          fontSize: "4rem",
          fontWeight: "800",
          color: "#087f5b",
        }}
        className="Heading"
      >
        Advisory Board{" "}
      </h1>
      <table class="table table-hover">
        <tbody>
          <tr>
            <td>Kris Gopalakrishnan</td>
          </tr>

          <tr>
            <td>Ajai Chowdhry</td>
          </tr>
          <tr>
            <td>Arun Jain</td>
          </tr>
          <tr>
            <td>Ashish Dhawan</td>
          </tr>
          <tr>
            <td>Anand Deshpande</td>
          </tr>
          <tr>
            <td>Sanjeev Bikhchandani</td>
          </tr>
          <tr>
            <td>Rajan Anandan</td>
          </tr>
          <tr>
            <td>Shridhar Shukla</td>
          </tr>
          <tr>
            <td>Mukesh Bansal</td>
          </tr>
          <tr>
            <td>Abhishek Singhania</td>
          </tr>
          <tr>
            <td>C. P. Gurnani</td>
          </tr>
          <tr>
            <td>Srini Raju</td>
          </tr>
          <tr>
            {" "}
            <td>P. S. Narayan</td>
          </tr>
          <tr>
            <td>Manish Dhingra</td>
          </tr>
          <tr>
            <td>Gaurav Bhatnagar</td>
          </tr>
          <tr>
            <td>Amit Chaddha</td>
          </tr>
          <tr>
            <td>Prof Ashok Jhunjhunwala</td>
          </tr>
          <tr>
            <td>Venkataraman Rajaraman</td>
          </tr>
          <tr>
            <td>Saurabh Srivastav</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdvisorBoard;
