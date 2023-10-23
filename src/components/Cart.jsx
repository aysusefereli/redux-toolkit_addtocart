import React from "react";
import { useSelector } from "react-redux";

export default function About() {
    const favorites = useSelector((state) => state.products.favorites);
    console.log(favorites);

    return (
        <div>
            {favorites.map((f)=> (
                <div key={f.id}>
                  {f}
                </div>
            ))}
        </div>
    );
}
