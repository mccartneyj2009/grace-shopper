import { useState, useEffect } from "react";

const Cart = ({ tempCart, setTempCart }) => {
    console.log(tempCart);

    //filter cart so that if there are multiple of the same item it adds the qty together and only returns 1 of said item

    // want to be able to modify the quantity when its in the cart.

    const cartArr = [...tempCart];
    const weightQuantity = [0.5, 1, 2, 3, 4, 5, 10];

    let cartTotal = 0;
    tempCart.forEach((item) => {
        cartTotal +=
            Number(item.price).toFixed(0) * Number(item.weight).toFixed(2);
    });

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
