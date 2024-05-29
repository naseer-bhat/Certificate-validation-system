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
const pdfParse = require('pdf-parse');
const { log } = require("console");

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
       
        // const result = await fetchFromAPIorScrape(certificateNumber);
        // if (result) {
        //   res.status(200).json({ valid: true, certificate: result });
        // } else {
        //   res.status(404).json({ valid: false });
        // }
        res.status(404).json({ valid: false, message: "Certificate not valid" });
      }

    } catch (error) {
      console.error('Error validating certificate:', error);
      res.status(500).json({ valid: false, message: "Internal server error" });
    }
  });
  

  // const fetchFromAPIorScrape = async (certificateNumber) => {
    
    //  try {
    //   // Try fetching from an API
    //   const apiResult = await fetchFromAPI(certificateNumber);
    //   if (apiResult) return apiResult;
  
    //   // If API fails, scrape the website
    //   const browser = await puppeteer.launch();
    //   const page = await browser.newPage();
    //   await page.goto('https://partners.apisetu.gov.in/directory/api/cusrinagar');
     
    //   const scrapedData = await page.evaluate(() => {
    //     // Implement scraping logic
    //     return document.querySelector('#data').innerText;

    //   });

    //   await browser.close();
    //   return scrapedData;


    // }catch (error) {
    //   console.error('Error fetching data:', error);
    //   return null;
    // }
  // }


  const fetchFromAPI = async (certificateNumber) => {

    try {
      const response = await axios.get(`https://freetestapi.com/api/v1/students?search=${certificateNumber}`, {
          headers: {
              'Authorization': `Bearer ${process.env.API_TOKEN}`
          }
      });
      
      if (response.data && response.data.valid) {
          return response.data;
      } else {
          return null;
      }
  } 
  catch (error) {
      console.error('Error fetching from API:', error);
      return null;
  }
 
    // return null;
  }



  app.post('/api/upload', upload.single('pdf'), async (req, res) => {
   
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    try {
        const pdfBuffer = req.file.buffer;
        const data = await pdfParse(pdfBuffer);

        const certificateId = extractCertificateId(data.text);
        console.log(certificateId);

        if (!certificateId) {
            return res.status(400).send('Certificate ID not found in PDF.');
        }

        const certificate = await Certificate.findOne({ certificateNumber: certificateId });

        if (certificate) {
            res.send('Certificate is valid.');
        } else {
            res.send('Certificate is not valid.');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred.');
    }
});


function extractCertificateId(text) {
    const match = text.match(/Certificate ID:\s*(\S+)/);
    return match ? match[1] : null;
}


const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));








