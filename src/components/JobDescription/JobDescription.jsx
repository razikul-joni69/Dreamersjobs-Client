import {
    CalendarDaysIcon,
    CurrencyDollarIcon,
    EnvelopeIcon,
    MapPinIcon,
    PhoneIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { addToDb, getAppliedJobs } from "../../utilities/fakedb";

const JobDescription = () => {
    const job = useLoaderData();

    const handleApply = (id) => {
        let getLocalStorage = Object.keys(getAppliedJobs());
        const exists = getLocalStorage.find((jobId) => jobId == id);
        if (!exists) {
            addToDb(id);
            Swal.fire({
                title: "Applied!",
                text: "Successfully Applied To This Job!",
                icon: "success",
                confirmButtonText: "OK",
                timer: 1500,
            });
        } else {
            Swal.fire({
                title: "Error!",
                text: "Already Applied To This Job!",
                icon: "error",
                confirmButtonText: "OK",
                timer: 1500,
            });
        }
    };

    return (
        <div>
            <h1 className="text-center pt-5 pb-5 bg-light">Job Details</h1>
            <Container className="mt-5 mb-5">
                <Row>
                    <Col md={8}>
                        <span className="text-dark fw-bold">
                            Job Description:{" "}
                        </span>
                        <p className="d-inline">{job.jobDescription}</p> <p></p>
                        <span className="text-dark fw-bold">
                            Job Responsibilitys:{" "}
                        </span>
                        <p className="d-inline">{job.jobResponsibilities}</p>{" "}
                        <p></p>
                        <span className="text-dark fw-bold">
                            Educational Requirments:{" "}
                        </span>
                        <p className="d-inline">
                            {job.educationalRequirements}
                        </p>{" "}
                        <p></p>
                        <span className="text-dark fw-bold">Experiences: </span>
                        <p className="d-inline">{job.experiences}</p> <p></p>
                    </Col>
                    <Col md={4}>
                        <div
                            className="w-100"
                            style={{
                                backgroundColor: "#f4f2ff",
                                padding: "20px",
                                borderRadius: "10px",
                            }}
                        >
                            <h5>Job Details</h5>
                            <hr />
                            <div>
                                <CalendarDaysIcon
                                    style={{
                                        width: "18px",
                                        height: "18px",
                                        color: "#9176f8",
                                    }}
                                    className=" me-2 text-gray-500"
                                />
                                <span className="text-dark fw-bold">
                                    Job Title:{" "}
                                </span>
                                <p className="d-inline">{job.jobTitle}</p>
                            </div>
                            <div className="mb-3">
                                <CurrencyDollarIcon
                                    style={{
                                        width: "18px",
                                        height: "18px",
                                        color: "#9176f8",
                                    }}
                                    className=" me-2 text-gray-500"
                                />
                                <span className="text-dark fw-bold">
                                    Salary:{" "}
                                </span>
                                <p className="d-inline">
                                    ${job.salary}k (per month)
                                </p>
                            </div>
                            <h5>Contact Information</h5>
                            <hr />
                            <div>
                                <PhoneIcon
                                    style={{
                                        width: "18px",
                                        height: "18px",
                                        color: "#9176f8",
                                    }}
                                    className=" me-2 text-gray-500"
                                />
                                <span className="text-dark fw-bold">
                                    Phone:{" "}
                                </span>
                                <p className="d-inline">
                                    {job.contactInformation?.phone}
                                </p>{" "}
                            </div>
                            <div>
                                <EnvelopeIcon
                                    style={{
                                        width: "18px",
                                        height: "18px",
                                        color: "#9176f8",
                                    }}
                                    className=" me-2 text-gray-500"
                                />
                                <span className="text-dark fw-bold">
                                    Email:{" "}
                                </span>
                                <p className="d-inline">
                                    {job.contactInformation?.email}
                                </p>{" "}
                            </div>
                            <div>
                                <MapPinIcon
                                    style={{
                                        width: "18px",
                                        height: "18px",
                                        color: "#9176f8",
                                    }}
                                    className=" me-2 text-gray-500"
                                />
                                <span className="text-dark fw-bold">
                                    Address:{" "}
                                </span>
                                <p className="d-inline">
                                    {job.contactInformation?.address}
                                </p>
                            </div>
                        </div>
                        <Button
                            onClick={() => handleApply(job.id)}
                            className="main-btn w-100 m-0 mt-3"
                            size="lg"
                        >
                            Apply Now
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default JobDescription;
