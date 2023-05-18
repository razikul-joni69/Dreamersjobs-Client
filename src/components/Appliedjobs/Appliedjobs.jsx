import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import "./AppliedJobs.css";
const Appliedjobs = () => {
    let appliedJobs = useLoaderData();

    return (
        <div>
            <h1 className="text-center pt-5 pb-5 bg-light">
                Applied Jobs {appliedJobs.length}
            </h1>
            <Container>
                <div>
                    {" "}
                    {appliedJobs.map((job) => {
                        return (
                            <div className="review__job" key={job.id}>
                                <div className="logo__container">
                                    <img src={job.companyLogo} alt="" />
                                </div>
                                <div className="job__details">
                                    <h5>{job.jobTitle}</h5>
                                    <p>{job.companyName}</p>
                                    <Button variant="outline-info">
                                        {job.jobTime}
                                    </Button>{" "}
                                    <Button variant="outline-info">
                                        {job.jobType}
                                    </Button>{" "}
                                    <p></p>
                                    <span className="me-3">
                                        <MapPinIcon className="icon me-1" />
                                        <p className="d-inline">
                                            {job.location}
                                        </p>
                                    </span>
                                    <span className="">
                                        <CurrencyDollarIcon className="icon me-1" />
                                        <p className="d-inline">
                                            {job.salary}k (Per Month)
                                        </p>
                                    </span>
                                </div>
                                <Button
                                    className="main-btn m-0 text-white details__btn"
                                    variant="info"
                                >
                                    View Details
                                </Button>{" "}
                            </div>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
};

export default Appliedjobs;
