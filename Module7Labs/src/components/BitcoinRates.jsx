// import { useState, useEffect } from 'react';

// const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

// // Custom hook for fetching Bitcoin price
// const useBitcoinPrice = (currency) => {
//   const [bitcoinPrice, setBitcoinPrice] = useState(null);

//   useEffect(() => {
//     const fetchBitcoinPrice = async () => {
//       try {
//         const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
//         const data = await response.json();
//         setBitcoinPrice(data.bitcoin[currency.toLowerCase()]);
//       } catch (error) {
//         console.error('Error fetching Bitcoin price:', error);
//       }
//     };

//     fetchBitcoinPrice();

//     // Cleanup function to cancel any ongoing requests or subscriptions
//     return () => {
//       // Add cleanup logic if needed
//     };
//   }, [currency]); // Dependency array ensures useEffect runs when 'currency' changes

//   return bitcoinPrice;
// };

// function BitcoinRates() {
//   const [currency, setCurrency] = useState(currencies[0]);
//   const bitcoinPrice = useBitcoinPrice(currency);

//   const options = currencies.map(curr => (
//     <option value={curr} key={curr}>
//       {curr}
//     </option>
//   ));

//   return (
//     <div className="BitcoinRates componentBox">
//       <h3>Bitcoin Exchange Rate</h3>
//       <label>
//         Choose currency:
//         <select value={currency} onChange={e => setCurrency(e.target.value)}>
//           {options}
//         </select>
//       </label>
//       {bitcoinPrice !== null ? (
//         <p>
//           Current Bitcoin Price in {currency}: {bitcoinPrice}
//         </p>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default BitcoinRates;

import { useState} from "react";
import useBitcoinPrice from "../hooks/useBitcoinPrices";
import { useEmojiContext } from "../context/EmojiContext";
import {
  Card,
  CardContent,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

// List of supported currencies
const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  // State for the currently selected currency
  const [currency, setCurrency] = useState(currencies[0]);
  // State for storing the current price of Bitcoin in the selected currency
  // const [bitcoinPrice, setBitcoinPrice] = useState("");

  // Using the custom hook to get the Bitcoin price and state for loading/error
  const { bitcoinPrice, isLoading, isError, cooldown } =
    useBitcoinPrice(currency);

  // Accessing the current emoji from the EmojiContext
  const { emoji } = useEmojiContext();

  const options = currencies.map((curr) => (
    <MenuItem value={curr} key={curr}>
      {curr}
    </MenuItem>
  ));

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ marginBottom: 5 }}>
          Bitcoin Exchange Rate
        </Typography>
        <FormControl fullWidth disabled={cooldown.isActive}>
          <InputLabel>Choose currency:</InputLabel>
          <Select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            label="Choose currency"
            disabled={cooldown.isActive}
          >
            {options}
          </Select>
        </FormControl>
        {cooldown.isActive && (
          <Typography variant="body2" sx={{ color: "red", mt: 2 }}>
            Cooldown active. Please wait {cooldown.timeLeft} seconds.
          </Typography>
        )}
        <Typography variant="body1" sx={{ mt: 2 }}>
          {isLoading
            ? "Loading..."
            : isError
            ? "Error fetching data."
            : `Current Bitcoin Price: ${bitcoinPrice} ${currency}`}
        </Typography>
        <Typography variant="body1">Current Mood: {emoji}</Typography>
      </CardContent>
    </Card>
  );
}

export default BitcoinRates;
