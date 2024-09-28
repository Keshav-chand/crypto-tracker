import { Select, MenuItem } from '@mui/material'; // Ensure you're using @mui/material
import { CryptoState } from '../CryptoContext'; // Make sure the import path is correct

const CurrencySelector = () => {
  const { currency, setCurrency } = CryptoState(); // Fetch currency from context

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value); // Set the currency state
  };

  return (
    <Select
      value={currency || ''} // Provide a default value
      onChange={handleCurrencyChange}
      displayEmpty // This allows the select to show an empty option
    >
      <MenuItem value="USD">USD</MenuItem>
      <MenuItem value="INR">INR</MenuItem>
    </Select>
  );
};

export default CurrencySelector; // Don't forget to export it
