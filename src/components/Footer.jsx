import css from "./Footer.module.css";

function Footer() {
  return (
    <div className={css.main}>
      <div className={css.container}>
        <div className={css.left}>
          <img src="./public/image/Rectangle 2.png" alt="" />
        </div>
        <div className={css.right}>
          <div className={css.info}>
            <div>
              <h1>Nuenen and Antwerp</h1>
              <p>painting intern</p>
            </div>
            <span>1883</span>
          </div>
          <div className={css.info}>
            <div>
              <h1>Nuenen and Antwerp</h1>
              <p>painting intern</p>
            </div>
            <span>1883</span>
          </div>{" "}
          <div className={css.info}>
            <div>
              <h1>Nuenen and Antwerp</h1>
              <p>painting intern</p>
            </div>
            <span>1883</span>
          </div>{" "}
          <div className={css.info}>
            <div>
              <h1>Nuenen and Antwerp</h1>
              <p>painting intern</p>
            </div>
            <span>1883</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
