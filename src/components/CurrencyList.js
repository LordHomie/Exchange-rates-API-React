import React from "react";
import Currency from "./Currency";

import classes from "./CurrencyList.module.css";

const CurrencyList = (props) => {
  return (
    <ul className={classes["currencies-list"]}>
      {props.currencies.map((currency) => (
        <Currency
          key={currency.id}
          charCode={currency.charCode}
          value={currency.value}
          name={currency.name}
          difference={currency.difference}
        />
      ))}
    </ul>
  );
};

export default CurrencyList;
