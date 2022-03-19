import React, { useState, useEffect, useCallback } from "react";
import CurrencyList from "./components/CurrencyList";
import Content from "./components/Content";
import Footer from "./Footer";

import "./App.css";

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const calculateDifference = (current, prev) => {
    const diff = ((current - prev) / prev) * 100;
    return diff.toFixed(2);
  };

  const fetchCurrencyHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://www.cbr-xml-daily.ru/daily_json.js"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const currencyData = data.Valute;

      const loadedCurrencies = [];
      for (const key in currencyData) {
        loadedCurrencies.push({
          id: key,
          charCode: currencyData[key].CharCode,
          name: currencyData[key].Name,
          value: `${currencyData[key].Value}₽`,
          difference: calculateDifference(
            currencyData[key].Value,
            currencyData[key].Previous
          ),
        });
      }
      setCurrencies(loadedCurrencies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCurrencyHandler();
  }, [fetchCurrencyHandler]);

  const listComponent = <CurrencyList currencies={currencies} />;

  return (
    <React.Fragment>
      <section>
        <div className="reference-row">
          <h2>Букв. код</h2>
          <h2>Курс</h2>
          <h2>Разница</h2>
        </div>
        <Content
          currency={currencies}
          error={error}
          isLoading={isLoading}
          listComponent={listComponent}
        />
      </section>
      <Footer />
    </React.Fragment>
  );
}

export default App;
