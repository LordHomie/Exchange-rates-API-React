const DateReformatter = (props) => {
  const month = props.date.slice(0, 4);
  const day = props.date.slice(5, 7);
  const year = props.date.slice(8, 10);

  return <h2>{`${month} / ${day} / ${year}`}</h2>;
};

export default DateReformatter;
