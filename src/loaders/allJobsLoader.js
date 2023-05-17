const allJobsLoader = async () => {
    const loadedAppliedJobs = await fetch("/jobs.json");
    const allJobs = await loadedAppliedJobs.json();
    return allJobs;
};
export default allJobsLoader;
