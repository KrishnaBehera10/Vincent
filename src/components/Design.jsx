import css from "../components/Design.module.css";

function Design() {
  return (
    <div className={css.main}>
      <div className={css.box}>
        <div className={css["img-box"]}>
          <img src="../public/image/image 2.png" alt="" />
        </div>
        <div className={css["img-box"]}>
          <img src="../public/image/image 4.png" alt="" />
        </div>
        <div className={css["img-box"]}>
          <img src="../public/image/image 3.png" alt="" />
        </div>
        <div className={css["img-box"]}>
          <img src="../public/image/image 1.png" alt="" />
        </div>
        <div className={css["img-box"]}>
          <img src="../public/image/image 5.png" alt="" />
        </div>
        <div className={css["img-box"]}>
          <img src="../public/image/image 6.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Design;
