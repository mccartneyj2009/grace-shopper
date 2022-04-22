import { useState } from "react";

const Meat = ({ meats }) => {
    const [species, setSpecies] = useState({});

    const fetchMeatBySingleSpecies = async (species) => {
        const resp = await fetch(
            `http://localhost:3001/api/meats/species/${species}`
        );

        const info = await resp.json();

        setSpecies(info);
    };

    return (
        <>
            <h1>We have the meats</h1>
            <select
                name="meatlist"
                id="meatlist"
                onChange={(e) => fetchMeatBySingleSpecies(e.target.value)}
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
                            <button type="submit">Add to Cart</button>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Meat;
