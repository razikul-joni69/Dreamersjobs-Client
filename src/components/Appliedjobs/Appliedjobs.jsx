import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useLoaderData } from "react-router-dom";
import "./AppliedJobs.css";

const Appliedjobs = () => {
    const [filterdJobs, setFilterdJobs] = useState([]);
    let appliedJobs = useLoaderData();

    useEffect(() => {
        setFilterdJobs(appliedJobs);
    }, []);

    const handleFilterJobs = (fData) => {
        if (fData === "Onsite" || fData === "Remote") {
            let filteredJobs = appliedJobs.filter(
                (job) => job.jobType.toLowerCase() === fData.toLowerCase()
            );
            setFilterdJobs(filteredJobs);
        } else if (fData === "Part-Time" || fData === "Full-Time") {
            let filteredJobs = appliedJobs.filter(
                (job) => job.jobTime.toLowerCase() === fData.toLowerCase()
            );
            setFilterdJobs(filteredJobs);
        } else {
            setFilterdJobs(appliedJobs);
        }
    };
    return (
        <div>
            <div className="cover__img">
                <h1 className="">Applied Jobs</h1>
            </div>

            <Container>
                <div className="filter__btn">
                    <Form.Select
                        onChange={(event) =>
                            handleFilterJobs(event.target.value)
                        }
                        className="filter__form"
                        aria-label="Default select example"
                    >
                        <option value="Show-All">Filter By - Show All</option>
                        <option value="Onsite">Onsite</option>
                        <option value="Remote">Remote</option>
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                    </Form.Select>
                </div>
                <div>
                    {" "}
                    {filterdJobs.length !== 0 ? (
                        filterdJobs.map((job) => {
                            return (
                                <div className="review__job mb-5" key={job.id}>
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
                        })
                    ) : (
                        <div>
                            <h2 className="text-center mt-5 mb-5 text-warning">
                                No Data Found
                            </h2>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
};

export default Appliedjobs;
