import { useState, useEffect } from "react";

const Cart = ({ tempCart, setTempCart }) => {
    console.log(tempCart);

    //filter cart so that if there are multiple of the same item it adds the qty together and only returns 1 of said item
    const [cart, setCart] = useState([]);
    const cartArr = tempCart;

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
                            {item.weight} lbs
                        </p>
                        <p>
                            <b>Total for item: </b>$
                            {Number(item.price * item.weight).toFixed(2)}
                        </p>
                        <button
                            onClick={() => {
                                let index = tempCart.indexOf(item);
                                tempCart.pop(index);
                                setTempCart(tempCart);
                            }}
                        >
                            Remove Meat
                        </button>
                    </div>
                );
            })}

            <h3>Cart Total: ${cartTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;
