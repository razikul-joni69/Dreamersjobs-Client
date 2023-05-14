import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";

const AvailableJobs = () => {
    const [allJobs, setAllJobs] = useState([]);
    const [featuredJobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("jobs.json")
            .then((res) => res.json())
            .then((data) => {
                data.slice(0, 2);
                return setJobs(data);
            });
    }, []);
    return (
        <Container style={{ marginBottom: "100px" }}>
            <h1 className="text-center">Featured Jobs</h1>
            <p className="text-center">
                Explore thousands of job opportunities with all the information
                you need. Its your future
            </p>
            <Row className="g-3 justify-content-between">
                {featuredJobs.map((job) => (
                    <div className="card col-md-6">
                        <img
                            className="pt-3"
                            style={{ width: "100px" }}
                            src={job.companyLogo}
                            alt=""
                        />
                        <h4>{job.jobTitle}</h4>
                        <p>{job.companyName}</p>
                        <div>
                            <Button
                                className="outline-btn"
                                variant="outline-info"
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
                        <div>
                            <p>{job.location}</p>
                            <p>{job.salary}</p>
                        </div>
                        <div>
                            <Button className="main-btn">View Details</Button>
                        </div>
                    </div>
                ))}
            </Row>
            <Button className="main-btn d-block mx-auto mt-4">
                View All Jobs
            </Button>
        </Container>
    );
};

export default AvailableJobs;
