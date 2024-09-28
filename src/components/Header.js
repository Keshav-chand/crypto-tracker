import { AppBar, Container, MenuItem, Select, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate(); 

  return (
    <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>
          <Typography 
            onClick={() => navigate("/")} 
            sx={{
              flex: 1,
              color: "gold",
              fontFamily: "Montserrat",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "1.5rem", 
            }}
          >
            Crypto Tracker
          </Typography>
          <Select 
            variant="outlined" 
            sx={{
              width: 100,
              height: 40,
              marginRight: 15,
              color: "white", 
              "& .MuiSelect-icon": {
                color: "white", 
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: "white", 
                },
              },
            }}
          >
            <MenuItem 
              value={"USD"} 
              sx={{ color: "black" }} // Set menu item text color to black
            >
              USD
            </MenuItem>
            <MenuItem 
              value={"INR"} 
              sx={{ color: "black" }} // Set menu item text color to black
            >
              INR
            </MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
