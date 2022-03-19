import React, { Fragment, useState } from "react";
import Modal from "../UI/Modal";
import TooltipComponent from "../UI/TooltipComponent";
import CurrencyHistory from "./CurrencyHistory";

import classes from "./Currency.module.css";

const Currency = (props) => {
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);

  const onOpenModal = () => {
    setIsModalDisplayed(true);
  };
  const onCloseModal = () => {
    setIsModalDisplayed(false);
  };

  let diffcolor = "white";
  let rateArrow = "▲";
  if (props.difference < 0) {
    diffcolor = "red";
    rateArrow = "▼";
  } else {
    diffcolor = "green";
    rateArrow = "▲";
  }

  return (
    <Fragment>
      <TooltipComponent currencyName={props.name}>
        <li className={classes.currency} onClick={onOpenModal}>
          <h2>{props.charCode}</h2>
          <h3>{props.value}</h3>
          <h3 style={{ color: diffcolor }}>
            {`${props.difference}%`}
            <span>{rateArrow}</span>
          </h3>
        </li>
      </TooltipComponent>
      {isModalDisplayed && (
        <Modal onCloseModal={onCloseModal}>
          <h1>{`${props.name} (${props.charCode})`}</h1>
          <CurrencyHistory currencyCode={props.charCode} />
        </Modal>
      )}
    </Fragment>
  );
};

export default Currency;
