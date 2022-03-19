import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div>
        <span>Сделано с помощью</span>{" "}
        <a
          href="https://www.cbr-xml-daily.ru/"
          target="_blank"
          rel="noreferrer"
        >
          Курсы валют API
        </a>
      </div>
      <div>
        <p>Made using React</p>
      </div>
    </div>
  );
};

export default Footer;
