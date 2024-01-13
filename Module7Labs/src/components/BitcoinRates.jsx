// import React, { useState, useEffect } from "react";

// const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

// function BitcoinRates() {
//   const [currency, setCurrency] = useState(currencies[0]);
//   const [bitcoinPrice, setBitcoinPrice] = useState(null);

//   useEffect(() => {
//     console.log("running Effect");
//     const fetchBitcoinPrice = async () => {
//       try {
//         const response = await fetch(
//           `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
//         );
//         const data = await response.json(); // fetch data => json object
//         console.log(data, "Json object"); // shows json object and string to mark json object converted above
//         //notice that if you expand the {bitcoin: {...}} it will drop down and the next data will show "bitcoin: {usd: 42743}"

//         //case sensitivity?????

//         setBitcoinPrice(data.bitcoin[currency.toLowerCase()]); //adding lowerCase method to test case sensitivity
//         // console.log(
//         //   "Bitcoin price for",
//         //   currency,
//         //   "is",
//         //   data.bitcoin[currency.toLowerCase()]
//         // ); //need to add here as well to render value in console.
//         // console.log(bitcoinPrice, "current bitcoinPrice value");
//       } catch (error) {
//         console.error("Error fetching Bitcoin price:", error);
//       }
//     };

//     fetchBitcoinPrice();

//     console.log(bitcoinPrice);

//     // Cleanup function to cancel any ongoing requests or subscriptions
//     return () => {
//       // Add cleanup logic if needed
//     };
//   }, [currency]); // Dependency array ensures useEffect runs when 'currency' changes

//   const options = currencies.map((curr) => (
//     <option value={curr} key={curr}>
//       {curr}
//     </option>
//   ));

//   return (
//     <div className="BitcoinRates componentBox">
//       <h3>Bitcoin Exchange Rate</h3>
//       <label>
//         Choose currency:
//         <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
//           {options}
//         </select>
//       </label>
//       {bitcoinPrice !== null ? (
//         <p>
//           Current Bitcoin Price {bitcoinPrice}
//         </p>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default BitcoinRates;

import { useState, useEffect } from 'react';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

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

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={e => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      {bitcoinPrice !== null ? (
        <p>
          Current Bitcoin Price in {currency}: {bitcoinPrice}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BitcoinRates;
