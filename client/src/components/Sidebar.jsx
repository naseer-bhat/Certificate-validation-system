
import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ValidateIcon from '@mui/icons-material/CheckCircle';
import ManageIcon from '@mui/icons-material/ManageAccounts';
import ReportIcon from '@mui/icons-material/BarChart';
import { Link } from 'react-router-dom';
import ValidationSection from './ValidationSection';
import { Box } from '@mui/material';

const Sidebar = () => {
  const [showValidationSection, setShowValidationSection] = useState(false);

  const handleValidateIconClick = () => {
    setShowValidationSection(true);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <List sx={{ width: 210, height: 450, flexShrink: 0, borderRight: '1px solid gray' }}>
       
        <ListItem button component={Link} to="/" key="dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        
        <ListItem button onClick={handleValidateIconClick} key="validate">
          <ListItemIcon>
            <ValidateIcon />
          </ListItemIcon>
          <ListItemText primary="Validate Certificate" />
        </ListItem>

        <ListItem button component={Link} to="/manage" key="manage">
          <ListItemIcon>
            <ManageIcon />
          </ListItemIcon>
          <ListItemText primary="Manage Certificates" />
        </ListItem>

        <ListItem button component={Link} to="/reports" key="reports">
          <ListItemIcon>
            <ReportIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
      </List>
     
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        {showValidationSection && <ValidationSection />}
      </Box>

    </Box>
  );
};

export default Sidebar;
