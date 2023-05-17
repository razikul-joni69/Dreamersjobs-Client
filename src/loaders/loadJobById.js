const loadJobById = async (id) => {
    const loadedAppliedJobs = await fetch("/jobs.json");
    const allJobs = await loadedAppliedJobs.json();

    const searchedJob = allJobs.find((job) => job.id == id);
    return searchedJob;
};

export default loadJobById;
