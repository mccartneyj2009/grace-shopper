import { useEffect, useState } from "react";

const Meat = ({ meats }) => {
    const [species, setSpecies] = useState({});
    const [selected, setSelected] = useState([]);
    const fetchMeatBySingleSpecies = async (species) => {
        const resp = await fetch(
            `http://localhost:3001/api/meats/species/${species}`
        );

        const info = await resp.json();

        setSpecies(info);
    };

    useEffect(() => {
        let selectedMeats = meats.filter((meat) => meat.species === species);
        if (!selectedMeats.length) {
            setSelected(meats);
            return;
        }
        setSelected(selectedMeats);
    }, [species, meats]);
    if (!meats.length) {
        return <></>;
    }

    return (
        <>
            <h1>We have the meats</h1>
            <select
                name="meatlist"
                id="meatlist"
                onChange={(e) => setSpecies(e.target.value)}
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
            <div className="meat">
                {selected.map((meat) => {
                    return (
                        <div id="meattype" key={meat.id}>
                            <h2>{meat.species}</h2>
                            <img src={meat.image} />
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
