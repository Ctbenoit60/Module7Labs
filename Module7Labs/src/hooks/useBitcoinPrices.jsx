import { useEffect, useReducer, useState } from "react";

// Custom hook for fetching Bitcoin price
const useBitcoinPrice = (currency) => {
  const [bitcoinPrice, setBitcoinPrice] = useState(null);

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
        const data = await response.json();
        setBitcoinPrice(data.bitcoin[currency.toLowerCase()]);
      } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
      }
    };

    fetchBitcoinPrice();

    // Cleanup function to cancel any ongoing requests or subscriptions
    return () => {
      // Add cleanup logic if needed
    };
  }, [currency]); // Dependency array ensures useEffect runs when 'currency' changes

  return bitcoinPrice;
};

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const bitcoinPrice = useBitcoinPrice(currency);

  const options = currencies.map(curr => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));
}

export default useBitcoinPrice;