import { useState } from "react";

const Meat = ({ meats }) => {
  const [species, setSpecies] = useState({});
  const fetchMeatBySingleSpecies = async (species) => {
    const resp = await fetch(`api/meats/species/${species}`);

    const info = await resp.json();

    setSpecies(info);
  };

  return (
    <>
      <h1>We have the meats</h1>
      <select
        name="meatlist"
        id="meatlist"
        onChange={(e) => fetchMeatBySingleSpecies(species)}
      >
        <option value="">Please Select Meat</option>
        {meats.map((meat) => {
          return (
            <option key={meat.id} value={meat.species}>
              {meat.species}{" "}
            </option>
          );
        })}
      </select>
      <div>
        {meats.map((meat) => {
          return (
            <div key={meat.id}>
              <h2>{meat.species}</h2>

              <p>{meat.image}</p>
              <p> {meat.description}</p>
              <p>{meat.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Meat;
