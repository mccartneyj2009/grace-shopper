import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Meat = ({ admin, meats, tempCart, setTempCart }) => {
    const [species, setSpecies] = useState({});
    const [selected, setSelected] = useState([]);
    const [signedInUser, setSignedInUser] = useState({});

    const lstoken = localStorage.getItem("token");
    const meatsDropDownList = [];
    const weightQuantity = [0.5, 1, 2, 3, 4, 5, 10];

    meats.forEach((meat) => {
        let meatIndex = meatsDropDownList.indexOf(meat.species);
        if (meatIndex < 0) {
            meatsDropDownList.push(meat.species);
        }
    });
    // const deleteUserMeat = async () => {
    //   await fetch(`http://localchost3001/api/meats/:meat_id`, {
    //     method: "DELETE",
    //   });
    // };
    const deleteMeat = async () => {
        await fetch(`http://localhost3001/api/meats/:meatId`, {
            method: "DELETE",
        });
    };

    const fetchUser = async () => {
        try {
            if (lstoken) {
                const resp = await fetch(`http://localhost:3001/api/users/me`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${lstoken}`,
                    },
                });

                const info = await resp.json();

                if (info) {
                    setSignedInUser(info);
                }
            }
        } catch (error) {
            throw error;
        }
    };

    const handleAddUserMeats = async (meatId, userId, meatQty) => {
        try {
            const resp = await fetch(
                `http://localhost:3001/api/usermeats/addusermeat`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        meat_id: meatId,
                        user_id: userId,
                        meat_qty: meatQty,
                    }),
                }
            );
            const info = await resp.json();
            // console.log(info);
        } catch (error) {
            next(error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    useEffect(() => {
        let selectedMeats = meats.filter((meat) => meat.species === species);
        if (!selectedMeats.length) {
            setSelected(meats);
            return;
        }
        setSelected(selectedMeats);
    }, [species, meats, admin]);

    if (!meats.length) {
        return <></>;
    }

    return (
        <>
            <div className="meatpage">
                <h1>We have the meats</h1>
                {admin ? (
                    <Link to="./addMeat">
                        <button>Add Meats</button>
                    </Link>
                ) : (
                    <div></div>
                )}
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
                                        return (
                                            <option key={weight}>
                                                {weight}
                                            </option>
                                        );
                                    })}
                                </select>

                                {selected.map((meat) => {
                                    return (
                                        <div key={meat.id} className="meat">
                                            <div
                                                className="meattype"
                                                key={meat.id}
                                            >
                                                <h2>{meat.species}</h2>
                                                <img
                                                    className="meat-image"
                                                    src={meat.image}
                                                />
                                            </div>
                                            <div className="meatsright">
                                                <p>
                                                    <b>Flavor: </b>
                                                    {meat.flavor}
                                                </p>
                                                <p>
                                                    <b>Style: </b>
                                                    {meat.style}
                                                </p>
                                                <p>
                                                    <b>Description: </b>{" "}
                                                    {meat.description}
                                                </p>
                                                <p>
                                                    <b>Price: </b>${meat.price}
                                                    /lb
                                                </p>

                                                <div className="meat-qty">
                                                    <label htmlFor="meat-qty">
                                                        <b>Quantity: </b>
                                                    </label>
                                                    <select
                                                        onChange={(e) => {
                                                            meat.weight =
                                                                e.target.value;
                                                        }}
                                                    >
                                                        {weightQuantity.map(
                                                            (weight) => {
                                                                return (
                                                                    <option
                                                                        key={
                                                                            weight
                                                                        }
                                                                    >
                                                                        {weight}
                                                                    </option>
                                                                );
                                                            }
                                                        )}
                                                    </select>
                                                </div>
                                                {lstoken ? (
                                                    <>
                                                        {/* this is the button that will send the data to the backend */}
                                                        <button
                                                            onClick={() => {
                                                                if (
                                                                    !meat.weight
                                                                ) {
                                                                    meat.weight =
                                                                        weightQuantity[0].toString();
                                                                }
                                                                if (
                                                                    tempCart.indexOf(
                                                                        meat
                                                                    ) > -1
                                                                ) {
                                                                    return;
                                                                }
                                                                setTempCart([
                                                                    ...tempCart,
                                                                    meat,
                                                                ]);
                                                                handleAddUserMeats(
                                                                    meat.id,
                                                                    signedInUser.id,
                                                                    meat.weight
                                                                );
                                                            }}
                                                        >
                                                            Add to Cart
                                                            <span></span>
                                                        </button>
                                                    </>
                                                ) : (
                                                    <button
                                                        type="submit"
                                                        onClick={() => {
                                                            if (!meat.weight) {
                                                                meat.weight =
                                                                    weightQuantity[0].toString();
                                                            }
                                                            if (
                                                                tempCart.indexOf(
                                                                    meat
                                                                ) > -1
                                                            ) {
                                                                return;
                                                            }
                                                            setTempCart([
                                                                ...tempCart,
                                                                meat,
                                                            ]);
                                                        }}
                                                    >
                                                        Add to Cart
                                                        <span></span>
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Meat;
