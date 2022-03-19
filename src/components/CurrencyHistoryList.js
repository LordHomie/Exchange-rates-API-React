import React from "react";
import DateReformatter from "./DateReformatter";

import classes from "./CurrencyHistoryList.module.css";

const CurrencyList = (props) => {
  return (
    <ul className={classes["currency-list"]}>
      {props.currency.map((currency) => (
        <li key={currency.date}>
          <DateReformatter date={currency.date} />
          <h3>{`${currency.value}₽`}</h3>
        </li>
      ))}
    </ul>
  );
};

export default CurrencyList;
