// // src/components/ManageCertificatesSection.js
// import React from 'react';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import { DataGrid } from '@mui/x-data-grid';
// import Button from '@mui/material/Button';

// const ManageCertificatesSection = () => {
//   const columns = [
//     { field: 'id', headerName: 'Certificate ID', width: 150 },
//     { field: 'holder', headerName: 'Holder Name', width: 200 },
//     { field: 'issueDate', headerName: 'Issue Date', width: 150 },
//     { field: 'expiryDate', headerName: 'Expiration Date', width: 150 },
//     { field: 'status', headerName: 'Status', width: 150 },
//     { field: 'actions', headerName: 'Actions', width: 150, renderCell: () => <Button variant="contained">Edit</Button> },
//   ];

//   const rows = [
//     { id: '12345', holder: 'John Doe', issueDate: '01/01/2022', expiryDate: '01/01/2023', status: 'Valid' },
//     { id: '67890', holder: 'Jane Smith', issueDate: '01/01/2022', expiryDate: '01/01/2023', status: 'Expired' },
//   ];

//   return (
//     <Paper elevation={3} sx={{ padding: 2 }}>
//       <Typography variant="h6">Manage Certificates</Typography>
//       <div style={{ height: 400, width: '100%' }}>
//         <DataGrid rows={rows} columns={columns} />
//       </div>
//       <Button variant="contained" color="primary" sx={{ mt: 2 }}>
//         Add Certificate
//       </Button>
//     </Paper>
//   );
// };

// export default ManageCertificatesSection;
