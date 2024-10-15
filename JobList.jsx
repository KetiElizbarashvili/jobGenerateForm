import React, { useState } from 'react'
import Job from "./Job";
import "./JobList.css";

const JobList = ({jobs,setJobs}) => {

  const deleteJob = (id) => {
    let filteredJobs = jobs.filter(job => job.id !== id)
    setJobs(filteredJobs)
  }

  return (
    <main>
      {jobs.map((job, index) => (
        <Job key={index} job={job} onDelete={(id) => deleteJob(id)} />
      ))}
    </main>
  );
};



export default JobList;
