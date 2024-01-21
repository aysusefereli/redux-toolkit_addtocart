import React from "react";
import { useSelector } from "react-redux";

export default function Cart() {
    const favorites = useSelector((state) => state.products.favorites);
    console.log(favorites);

    return (
        <div>
            {favorites.map((f)=> (
                <div key={f.id}>
                <h3>{f.product}</h3>
                <p>Price: {f.price}</p>
            </div>
            ))}
        </div>
    );
}
