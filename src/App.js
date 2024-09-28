import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import CoinPage from './pages/CoinPage';
import Homepage from './pages/Homepage';
import Box from '@mui/material/Box'; // Use Box for styling containers in MUI

function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          backgroundColor: "#14161a",
          color:"white",
          minHeight: "100vh",
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
