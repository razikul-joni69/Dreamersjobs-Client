import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
const AvailableJobs = () => {
    const [jobs, setJobs] = useState([]);
    let allJobs = useLoaderData();

    useEffect(() => {
        let featuredJobs = allJobs.slice(0, 4);
        setJobs(featuredJobs);
    }, []);

    const handleViewAllJobs = () => {
        setJobs(allJobs);
    };
    const handleViewFeaturedJobs = () => {
        let featuredJobs = allJobs.slice(0, 4);
        setJobs(featuredJobs);
    };

    return (
        <Container style={{ marginBottom: "100px" }}>
            <h1 className="text-center">Featured Jobs</h1>
            <p className="text-center">
                Explore thousands of job opportunities with all the information
                you need. Its your future
            </p>
            <Row className="g-3 justify-content-between">
                {jobs.map((job) => (
                    <Col md={6} key={job.id} className="card  p-3">
                        <img
                            className=""
                            style={{ width: "150px", height: "45px" }}
                            src={job.companyLogo}
                            alt=""
                        />
                        <h4 className="mt-3 mb-2">{job.jobTitle}</h4>
                        <p>{job.companyName}</p>
                        <div>
                            <Button
                                className="outline-btn"
                                variant="outline-success"
                            >
                                {job.jobType}
                            </Button>
                            <Button
                                className="outline-btn"
                                variant="outline-info"
                            >
                                {job.jobTime}
                            </Button>
                        </div>
                        <div className="d-flex mt-3">
                            <MapPinIcon
                                style={{
                                    height: "20px",
                                    width: "20px",
                                    color: "grey",
                                    marginRight: "5px",
                                    marginTop: "3px",
                                }}
                            />
                            <p className="me-3">{job.location}</p>

                            <CurrencyDollarIcon
                                style={{
                                    height: "20px",
                                    width: "20px",
                                    color: "grey",
                                    marginRight: "5px",
                                    marginTop: "3px",
                                }}
                            />
                            <p>{job.salary}k (Per Month)</p>
                        </div>
                        <div>
                            <Link
                                className="main-btn m-0 d-inline-block"
                                to={`/job/${job.id}`}
                            >
                                View Details
                            </Link>
                        </div>
                    </Col>
                ))}
            </Row>
            {allJobs.length === jobs.length ? (
                <Button
                    onClick={handleViewFeaturedJobs}
                    className="main-btn d-block mx-auto mt-4"
                >
                    View Featured Jobs
                </Button>
            ) : (
                <Button
                    onClick={handleViewAllJobs}
                    className="main-btn d-block mx-auto mt-4"
                >
                    View All Jobs
                </Button>
            )}
        </Container>
    );
};

export default AvailableJobs;
