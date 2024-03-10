import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return (
        <div>
            <h1>Home</h1>
            <Link to='/register' id='home'>click here to go to Registry</Link>
        </div>
    )
}

export default Home;