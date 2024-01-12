import React, { useState, useEffect } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [bitcoinPrice, setBitcoinPrice] = useState(null);

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
        );
        const data = await response.json();
        setBitcoinPrice(data.bitcoin[currency]);
      } catch (error) {
        console.error("Error fetching Bitcoin price:", error);
      }
    };

    fetchBitcoinPrice();

    // Cleanup function to cancel any ongoing requests or subscriptions
    return () => {
      // Add cleanup logic if needed
    };
  }, [currency]); // Dependency array ensures useEffect runs when 'currency' changes

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      {bitcoinPrice !== null ? (
        <p>
          Current Bitcoin Price {bitcoinPrice}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BitcoinRates;
