const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());
app.get("/api/portfolio", (req, res) => {
  const portfolioData = [
    { title: "MediSwift", description: "Nilesh Balotiya" },
    { title: "AI Virtual Mouse", description: "Nilesh Balotiya" },
  ];

  res.json(portfolioData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
