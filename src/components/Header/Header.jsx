import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ActiveLink from "../AvtiveLink/ActiveLink";
import "./Header.css";

const Header = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Dreamers Jobs</Navbar.Brand>
                    <Nav className="m-auto">
                        <ActiveLink
                            to="/"
                            className={`nav-link 
                            `}
                        >
                            Home
                        </ActiveLink>
                        <ActiveLink to="/applied-jobs">Applied Jobs</ActiveLink>
                        <ActiveLink to="/statistics">Statistics</ActiveLink>
                        <ActiveLink to="/blog">Blog</ActiveLink>
                    </Nav>
                    <Button variant="info">Apply Now</Button>{" "}
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
