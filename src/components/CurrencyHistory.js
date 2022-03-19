import React, { useState, useEffect, useCallback } from "react";
import Content from "./Content";
import CurrencyHistoryList from "./CurrencyHistoryList";

const CurrencyHistory = (props) => {
  const [currency, setCurrency] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const delay = (ms = 190) => new Promise((r) => setTimeout(r, ms));

  const fetchCurrencyHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    let dataURL = "https://www.cbr-xml-daily.ru/daily_json.js";
    const loadedCurrencies = [];
    try {
      for (let i = 0; i < 10; i++) {
        await delay();
        const response = await fetch(dataURL);
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        const value = data.Valute[props.currencyCode].Value;
        const date = data.Date;
        loadedCurrencies.push({
          value: value,
          date: date,
        });
        dataURL = data.PreviousURL;
      }

      setCurrency(loadedCurrencies);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, [props.currencyCode]);

  useEffect(() => {
    fetchCurrencyHandler();
  }, [fetchCurrencyHandler]);

  const listComponent = <CurrencyHistoryList currency={currency} />;

  return (
    <Content
      currency={currency}
      error={error}
      isLoading={isLoading}
      listComponent={listComponent}
    />
  );
};

export default CurrencyHistory;
