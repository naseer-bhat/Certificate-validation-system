// import {items  } from "../server/db";

require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require('path');
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const multer = require('multer');
const Certificate = require("./models/Certificate");
// const puppeteer = require('puppeteer');

// database connection
connection();

const upload = multer({ dest: 'uploads/' });

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);


app.post("/user", async (req, res) => {
    const { certificateNumber, studentName } = req.body;
    console.log(studentName);
  
    if (!certificateNumber || !studentName) {
      return res.status(400).send({ message: 'Certificate number and student name are required' });
    }
  
    try {
      const newCertificate = new Certificate({ certificateNumber, studentName });
      await newCertificate.save();

      res.status(201).send({ message: 'Certificate added successfully', newCertificate });
    } catch (error) {
     
        res.status(500).send({ message: 'Failed to add certificate', error });
      
    }
  });



app.post('/api/validate', async (req, res) => {
    const { certificateNumber } = req.body;
    console.log(certificateNumber);
   
    try {
      const certificate = await Certificate.findOne({ certificateNumber });
      console.log(certificate);
      if (certificate) {
        res.status(200).json({ valid: true, certificateNumber, message: "Certificate is valid" });
       
      } else {
        res.status(404).json({ valid: false, message: "Certificate not valid" });
        // Fetch data from API or scrape website if needed
        // const result = await fetchFromAPIorScrape(certificateNumber);
        // if (result) {
        //   res.status(200).json({ valid: true, certificate: result });
        // } else {
        //   res.status(404).json({ valid: false });
        // }
      }
    } catch (error) {
      console.error('Error validating certificate:', error);
      res.status(500).json({ valid: false, message: "Internal server error" });
    }
  });
  

  const fetchFromAPIorScrape = async (certificateNumber) => {
    try {
      // Try fetching from an API
      const apiResult = await fetchFromAPI(certificateNumber);
      if (apiResult) return apiResult;
  
      // If API fails, scrape the website
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto('https://example.com');
      const scrapedData = await page.evaluate(() => {
        // Implement scraping logic
        return document.querySelector('#data').innerText;
      });
      await browser.close();
      return scrapedData;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }


  const fetchFromAPI = async (certificateNumber) => {
    // Implement API fetching logic
    return null;
  }



const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));



