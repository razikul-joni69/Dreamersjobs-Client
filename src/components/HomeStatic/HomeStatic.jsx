import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./HomeStatic.css";

const HomeStatic = () => {
    const [jobcatagory, setJobcatagory] = useState([]);

    useEffect(() => {
        fetch("/jobcatagory.json")
            .then((res) => res.json())
            .then((data) => setJobcatagory(data));
    }, []);
    return (
        <div>
            <div className="bg-light">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} className="hero__details">
                            <h1 className="hero__heading">
                                One Step Close To Your{" "}
                                <span className="">Dream Job</span>
                            </h1>
                            <p>
                                Explore thousands of job opportunities with all
                                the information you need. Its your future. Come
                                find it. Manage all your job application from
                                start to finish.
                            </p>
                            <Button className="main-btn" variant="info">
                                Get Started
                            </Button>{" "}
                        </Col>
                        <Col md={6} className="hero__image">
                            <img
                                className="img-fluid"
                                src="/hero-img.png"
                                alt=""
                            />
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container className="job__catagory">
                <h1 className="text-center">Job Catagory List</h1>
                <p className="text-center">
                    Explore thousands of job opportunities with all the
                    information you need. Its your future
                </p>
                <div className="d-flex flex-wrap justify-content-between">
                    {jobcatagory.map((job) => {
                        return (
                            <Col className="job__catagory-card" key={job.id}>
                                <img src={job.img} alt="" />
                                <h4 className="mt-3 mb-2">{job.jobCategory}</h4>
                                <p>{job.jobAvailable} Jobs Available</p>
                            </Col>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
};

export default HomeStatic;
