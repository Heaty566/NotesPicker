import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
        return (
                <Link to="/home" className="m-b-2">
                        <img
                                src={process.env.PUBLIC_URL + "/asset/image/logo.svg"}
                                style={{ height: "64px", objectFit: "cover" }}
                                alt="Notes Picker"
                        />
                </Link>
        );
};

export default Logo;
