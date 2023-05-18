import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className="nav-link fw-bold"
            style={({ isActive }) => {
                return {
                    color: isActive ? "#8f69f3" : "",
                };
            }}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;
