import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return (
        <div>
            <h1> Lambda Eats </h1>
            <Link to = "/pizza">
                <button>Who Wants Some PIZZAAAAA?</button>
            </Link>
            <img class="pizza" src='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2400&q=60'/>
        </div>
    )
}