import { getAppliedJobs } from "../utilities/fakedb";

const appliedJobsLoader = async () => {
    const loadedAppliedJobs = await fetch("/jobs.json");
    const allJobs = await loadedAppliedJobs.json();

    const savedJobs = [];
    try {
        let storedCart = getAppliedJobs();
        for (let id in storedCart) {
            const addedJobs = allJobs.find((job) => job.id == id);
            if (addedJobs) {
                savedJobs.push(addedJobs);
            }
        }
    } catch (error) {
        console.error("erorName:", error);
    }
    return savedJobs;
};

export default appliedJobsLoader;
