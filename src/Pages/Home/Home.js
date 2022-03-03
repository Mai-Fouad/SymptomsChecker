import React from "react";
import Navbar from "../../Components/Navbar/Navbar";

const Home = (props) => {
    return (
        <>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h1>Home Component</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;