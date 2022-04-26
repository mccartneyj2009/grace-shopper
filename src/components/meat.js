import { useEffect, useState } from "react";

const Meat = ({ meats, tempCart, setTempCart }) => {
    const [species, setSpecies] = useState({});
    const [selected, setSelected] = useState([]);

    const lstoken = localStorage.getItem("token");
    const meatsDropDownList = [];
    const weightQuantity = [0.5, 1, 2, 3, 4, 5, 10];

    const fetchMeatBySingleSpecies = async (species) => {
        const resp = await fetch(
            `http://localhost:3001/api/meats/species/${species}`
        );

        const info = await resp.json();

        setSpecies(info);
    };

    meats.forEach((meat) => {
        let meatIndex = meatsDropDownList.indexOf(meat.species);
        if (meatIndex < 0) {
            meatsDropDownList.push(meat.species);
        }
    });

    useEffect(() => {
        let selectedMeats = meats.filter((meat) => meat.species === species);
        if (!selectedMeats.length) {
            setSelected(meats);
            return;
        }
        setSelected(selectedMeats);
    }, [species, meats]);

    console.log(tempCart);

    if (!meats.length) {
        return <></>;
    }

    return (
        <>
        <div className="meatpage">
            <h1>We have the meats</h1>
            <select
                name="meatlist"
                id="meatlist"
                onChange={(e) => setSpecies(e.target.value)}
            >
                <option value="">Please Select Meat</option>
                {meatsDropDownList.map((meat) => {
                    return (
                        <option key={meat} value={meat}>
                            {meat}{" "}
                        </option>
                    );
                })}
            </select>
            <div className="meats">
                {selected.map((meat) => {
                    return (
                        <div id="meattype" key={meat.id}>
                            <h2>{meat.species}</h2>
                            <img className="meat-image" src={meat.image} />
                            <p>
                                <b>Flavor: </b>
                                {meat.flavor}
                            </p>
                            <p>
                                <b>Style: </b>
                                {meat.style}
                            </p>
                            <p>
                                <b>Description: </b> {meat.description}
                            </p>
                            <p>
                                <b>Price: </b>${meat.price}/lb
                            </p>
                            <label htmlFor="meat-qty">
                                <b>Quantity: </b>
                            </label>
                            <select
                                id="meat-qty"
                                onChange={(e) => {
                                    meat.weight = e.target.value;
                                }}
                            >
                                {weightQuantity.map((weight) => {
                                    {
                                        /* meat.weight = weightQuantity[0]; */
                                    }
                                    return (
                                        <option key={weight}>{weight}</option>
                                    );
                                })}
                            </select>
                            <button
                                type="submit"
                                onClick={() => {
                                    if (!meat.weight) {
                                        meat.weight =
                                            weightQuantity[0].toString();
                                    }
                                    setTempCart([...tempCart, meat]);
                                }}
                            >
                                Add to Cart
                                <span></span>
                            </button>
                        </div>
                        
                    );
                })}
            </div>
            </div>
        </>
    );
};

export default Meat;
