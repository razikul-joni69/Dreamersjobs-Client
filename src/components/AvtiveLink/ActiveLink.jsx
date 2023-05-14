import React from "react";
import { NavLink } from "react-router-dom";
import "./ActiveLink.css";

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className="nav-link"
            style={({ isActive }) => {
                return {
                    color: isActive ? "red" : "",
                };
            }}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;
