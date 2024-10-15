import React from "react";
import "./Job.css";
import image from "../assets/black.jpg";

const Job = ({ job, onDelete }) => {

  return (
    <section>
      <div>
        <div className="imgDiv">
          <img src={image} alt="Logo" />
        </div>
        <div className="aboutContainer">
          <div className="name">
            <p>{job.companyName}</p>
            {job.isNew && <p className="new">NEW!</p>}
            {job.isFeatured && <p className="featured">FEATURED</p>}
          </div>
          <div className="title">{job.role}</div>
          <div className="about">
            <p>{job.dateAdded}</p>
            <div className="dots"></div>
            <p>{job.time}</p>
            <div className="dots"></div>
            <p>{job.place}</p>
          </div>
        </div>
      </div>

      <div className="skills">
        {job.skills.map((skill, index) => (
          <p key={index}> {skill} </p>
        ))}
      </div>
      <button onClick={() => onDelete(job.id)} className="deleteBtn">
        Delete
      </button>
    </section>
  );
};

export default Job;
