import css from "../components/Details.module.css";

function Details() {
  return (
    <div className={css.main}>
      <div>
        <h1>
          Van Gogh painted several landscapes with flowers, roses, lilacs, and
          sunflowers.
        </h1>
        <p>
          Some reflect his interests in the language of colour, and also in
          Japanese ukiyo-e. There are two series of dying sunflowers. The first
          was painted in Paris in 1887 and shows flowers lying on the ground.
        </p>
      </div>
    </div>
  );
}

export default Details;
