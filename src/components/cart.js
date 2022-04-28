import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ tempCart, setTempCart }) => {
    const [user_meats, setUser_meats] = useState([]);

    const navigation = useNavigate();
    const lstoken = localStorage.getItem("token");
    let cartArr = [];

    if (lstoken) {
        cartArr = [];
    } else {
        cartArr = [...tempCart];
    }

    const weightQuantity = [0.5, 1, 2, 3, 4, 5, 10];
    let cartTotal = 0;
    cartArr.forEach((item) => {
        cartTotal +=
            Number(item.price).toFixed(0) * Number(item.weight).toFixed(2);
    });

    const handleGetAllUserMeats = async (user_id) => {
        const resp = await fetch(`http://localhost:3001/api/usermeats`);
        const info = resp.json();
        console.log(info);
        setUser_meats(info);
    };

    const handleDeleteUserMeats = async (meatId) => {
        try {
            const resp = await fetch(
                `http://localhost:3001/api/usermeats/deleteusermeat`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        meat_id: meatId,
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
        handleGetAllUserMeats();
    }, []);

    return (
        <div id="cart-container">
            {cartArr.map((item) => {
                return (
                    <div key={item.id} className="cart-item">
                        <h1>{item.species}</h1>
                        <img className="meat-image" src={item.image} />
                        <p>
                            <b>Description: </b>
                            {item.description}
                        </p>
                        <p>
                            <b>Price per lb: </b>$
                            {Number(item.price).toFixed(2)}
                        </p>
                        <p>
                            <b>Quantity: </b>
                            <select
                                defaultValue={item.weight}
                                onChange={(e) => {
                                    let index = cartArr.indexOf(item);
                                    cartArr[index].weight = e.target.value;
                                    setTempCart(cartArr);
                                }}
                            >
                                {weightQuantity.map((weight) => {
                                    return (
                                        <option key={weight}>{weight}</option>
                                    );
                                })}
                            </select>
                        </p>
                        <p>
                            <b>Total for item: </b>$
                            {Number(item.price * item.weight).toFixed(2)}
                        </p>
                        <button
                            onClick={() => {
                                if (lstoken) {
                                }
                                let index = cartArr.indexOf(item);
                                cartArr.splice(index, 1);
                                setTempCart(cartArr);
                            }}
                        >
                            Remove Meat
                        </button>
                    </div>
                );
            })}

            <h3>Cart Total: ${cartTotal.toFixed(2)}</h3>
            {cartArr.length ? (
                <button
                    onClick={() => {
                        console.log("submitting order");
                        setTempCart([]);
                        navigation("/ordersubmitted", { replace: true });
                    }}
                >
                    Submit Order
                </button>
            ) : (
                <button disabled>Submit Order</button>
            )}
        </div>
    );
};

export default Cart;
