import loadingSpinner from "../assets/loading-spinner.gif";

const Content = (props) => {
  let content = <p>Found no data.</p>;
  const { currency, error, isLoading, listComponent } = props;

  if (currency.length > 0) {
    content = listComponent;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = (
      <p>
        <img style={{ width: "20%" }} src={loadingSpinner} alt="loading..." />
      </p>
    );
  }

  return <div>{content}</div>;
};

export default Content;
