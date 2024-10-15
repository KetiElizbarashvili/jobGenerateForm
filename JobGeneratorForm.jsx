import React, { useState } from "react";
import "./JobGeneratorForm.css";


const JobGenerateForm = ({ setJobs }) => {
    const [newJob, setNewJob] = useState({
        companyName: "",
        role: "",
        time: "",
        place: "",
        skills: "",
    });

    const handleChange = (e) => {
        setNewJob(prevValues => ({ ...prevValues, [e.target.name]: e.target.value }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setJobs(prevJobs => ([...prevJobs, { ...newJob, skills: newJob.skills.split(",") }]));
    }



    return (

        <form onSubmit={handleSubmit}>

            <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={newJob.companyName}
                onChange={handleChange}
            />
            <input
                type="text"
                name="role"
                placeholder="Job Role"
                value={newJob.role}
                onChange={handleChange}
            />
            <input
                type="text"
                name="time"
                placeholder="Job Type (e.g., Full Time)"
                value={newJob.time}
                onChange={handleChange}
            />
            <input
                type="text"
                name="place"
                placeholder="Location"
                value={newJob.place}
                onChange={handleChange}
            />
            <input
                type="text"
                name="skills"
                placeholder="Skills (comma-separated)"
                value={newJob.skills}
                onChange={handleChange}
            />
            <button type="submit">Add Job</button>
        </form>
    );
}



export default JobGenerateForm;

