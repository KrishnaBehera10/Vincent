import css from "../components/Header.module.css";

function Header() {
  return (
    <div className={css.header}>
      <h1 className={css.h1}>
        Vincent Van Gogh. post-impressionist painter and artist
      </h1>
    </div>
  );
}

export default Header;
