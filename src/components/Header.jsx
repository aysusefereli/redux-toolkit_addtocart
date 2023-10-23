import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return <div>
        <header>
            <Link to={"/"} className="mainpage">MainPage</Link> 
            <Link to={"/Cart"} className="cart">Cart</Link>
        </header>
    </div>;
}