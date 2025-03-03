import React from "react";
import "../AboutUs/AboutUs.css";

function IncubationItel() {
  return (
    <div className="description" style={{ fontFamily: "sarif" }}>
      <h1
        className="Heading"
        style={{
          textAtrgn: "center",
          fontSize: "4rem",
          fontWeight: "800",
          color: "#087f5b",
        }}
      >
        ITEL Incubation Committee
      </h1>
      <table class="table table-hover">
        <tbody>
          <tr>
            <td>Prof Ashok Jhunjhunwala</td>
          </tr>

          <tr>
            <td>Dr. Kaushal Kumar Jha</td>
          </tr>
          <tr>
            <td>Prof L. Kannan</td>
          </tr>
          <tr>
            <td>Dr. Karthik Sankaranarayanan</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default IncubationItel;
