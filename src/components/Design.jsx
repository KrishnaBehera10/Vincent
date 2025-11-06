import css from "../components/Design.module.css";

import img1 from "../../public/image/image 1.png";
import img2 from "../../public/image/image 4.png";
import img3 from "../../public/image/image 3.png";
import img4 from "../../public/image/image 1.png";
import img5 from "../../public/image/image 5.png";
import img6 from "../../public/image/image 6.png";

function Design() {
  return (
    <div className={css.main}>
      <div className={css.box}>
        <div className={css["img-box"]}>
          <img src={img1} alt="" />
        </div>
        <div className={css["img-box"]}>
          <img src={img2} alt="" />
        </div>
        <div className={css["img-box"]}>
          <img src={img3} alt="" />
        </div>
        <div className={css["img-box"]}>
          <img src={img4} alt="" />
        </div>
        <div className={css["img-box"]}>
          <img src={img5} alt="" />
        </div>
        <div className={css["img-box"]}>
          <img src={img6} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Design;
