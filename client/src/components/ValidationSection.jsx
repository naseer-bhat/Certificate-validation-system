
// import React, { useState } from 'react';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import Input from '@mui/material/Input';

// const ValidationSection = () => {
//   const [certificateID, setCertificateID] = useState('');
//   const [validationResult, setValidationResult] = useState(null);
//   const [selectedFile, setSelectedFile] = useState(null);

//   const baseURL = 'http://localhost:8080'

//   const handleValidate = async () => {
  
//     // console.log(certificateID);   m mhjo
   
//    try {
//       const response = await fetch(`${baseURL}/api/validate`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ certificateID }),
//       });

//       console.log(response);

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const result = await response.json();
//       console.log(result);
//       setValidationResult(result);
//     } catch (error) {
//       console.error('Error:', error);
//       setValidationResult({ id: certificateID, holder: 'Unknown', status: 'Error' });
//     }
//   };



//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUpload = () => {
//     if (selectedFile) {
//       // Mock file upload logic
//       console.log('File uploaded:', selectedFile.name);
//     }
//   }


//   return (
//     <Paper elevation={3} sx={{ padding: 2 }}>
//       <Typography variant="h6">Validate Certificate</Typography>
//       <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 2 }}>
//         <TextField
//           label="Certificate ID"
//           variant="outlined"
//           value={certificateID}
//           onChange={(e) => setCertificateID(e.target.value)
//           }
//           fullWidth
//         />
//         <Button variant="contained" color="primary" onClick={handleValidate}>
//           Validate
//         </Button>
//       </Box>
//       <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 2 }}>
//         <Input type="file" onChange={handleFileChange} />
//         <Button variant="contained" color="primary" onClick={handleUpload}>
//           Upload
//         </Button>
//       </Box>
//       {validationResult && (
//         <Box sx={{ mt: 2 }}>
//           <Typography variant="subtitle1">Certificate ID: {validationResult.id}</Typography>
//           <Typography variant="subtitle1">Holder: {validationResult.holder}</Typography>
//           <Typography variant="subtitle1" color={validationResult.status === 'Valid' ? 'green' : 'red'}>
//             Status: {validationResult.status}
//           </Typography>
//         </Box>
//       )}
//     </Paper>
//   );
// };

// export default ValidationSection;

import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Input } from '@mui/material';

const ValidationSection = () => {
  const [certificateNumber, setCertificateNumber] = useState('');
  const [validationResult, setValidationResult] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);


  const baseURL = 'http://localhost:8080';


  const handleValidate = async () => {
    try {
      const response = await fetch(`${baseURL}/api/validate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ certificateNumber }),
      });
     
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);
      setValidationResult(result);
    } catch (error) {
      console.error('Error:', error);
      setValidationResult({ valid: false, message: 'Certificate is not valid' });
    }
  };

// handling file uploads
const handleFileChange = (e)=>{
  setSelectedFile(e.target.files[0])

}



const handleUpload = async () => {
  if (selectedFile) {
    const formData = new FormData();
    formData.append('pdf', selectedFile);

    try {
      const response = await fetch(`${baseURL}/api/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);
      setValidationResult(result);
    } catch (error) {
      console.error('Error:', error);
      setValidationResult({ valid: false, message: 'Certificate is not valid' });
    }
  }



     
    }
  



  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h6">Validate Certificate</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 2 }}>
        <TextField
          label="Certificate Number"
          variant="outlined"
          value={certificateNumber}
          onChange={(e) => setCertificateNumber(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleValidate}>
          Validate
        </Button>
      </Box>


      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 2 }}>
        <Input type="file" onChange={handleFileChange} />
         <Button variant="contained" color="primary" onClick={handleUpload}>
           Upload
         </Button>
       </Box>


      {validationResult && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1">
            Certificate Number: {certificateNumber}
          </Typography>
          <Typography variant="subtitle1" color={validationResult.valid ? 'green' : 'red'}>
            Status: {validationResult.message}
          </Typography>
        </Box>
      )}
    </Paper>
  );
};

export default ValidationSection;



