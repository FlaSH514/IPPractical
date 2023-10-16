import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar.jsx";

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    // Fetch portfolio data from the backend API
    axios
      .get("http://localhost:3001/api/portfolio") // Adjust the URL to match your server's URL
      .then((response) => {
        setPortfolioData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching portfolio data:", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <h1>Portfolio Page</h1>
      <ul>
        {portfolioData.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Portfolio;
