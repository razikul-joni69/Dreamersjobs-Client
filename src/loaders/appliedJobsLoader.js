import { getAppliedJobs } from "../utilities/fakedb";

const appliedJobsLoader = async () => {
    const loadedAppliedJobs = await fetch("jobs.json");
    const allJobs = await loadedAppliedJobs.json();

    let storedCart = getAppliedJobs();
    const savedJobs = [];
    for (let id in storedCart) {
        const addedJobs = allJobs.find((job) => job.id == id);
        if (addedJobs) {
            savedJobs.push(addedJobs);
        }
    }
    return savedJobs;
};

export default appliedJobsLoader;
