import React from "react";
import AvailableJobs from "../AvailableJobs/AvailableJobs";
import HomeStatic from "../HomeStatic/HomeStatic";

const Home = () => {
    return (
        <div>
            <HomeStatic></HomeStatic>
            <AvailableJobs></AvailableJobs>
        </div>
    );
};

export default Home;
