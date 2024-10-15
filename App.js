import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import JobList from "./components/JobList.jsx";
import Counter from "./components/Counter.jsx";
import JobGenerateForm from "./components/JobGeneratorForm.jsx";

const App = () => {

  let isCounterVisible = false

  const [jobs, setJobs] = useState(
    [
      {
        id: 1,
        companyName: "Photosnap",
        isNew: true,
        isFeatured: true,
        role: "Senior Frontend Developer",
        dateAdded: "1d ago",
        time: "Full time",
        place: "USA only",
        skills: ["Frontend", "Senior", "HTML", "CSS", "JavaScript"],
      },
      {
        id: 2,
        companyName: "Manage",
        isNew: true,
        isFeatured: true,
        role: "Fullstack Developer",
        dateAdded: "1d ago",
        time: "Part time",
        place: "Remote",
        skills: ["Fullstack", "Midweight", "Python", "React"],
      },
      {
        id: 3,
        companyName: "Account",
        isNew: true,
        isFeatured: false,
        role: "Junior Frontend Developer",
        dateAdded: "2d ago",
        time: "Part time",
        place: "USA only",
        skills: ["Frontend", "Junior", "React", "SASS", "JavaScript"],
      },
      {
        id: 4,
        companyName: "MyHome",
        isNew: false,
        isFeatured: false,
        role: "Junior Frontend Developer",
        dateAdded: "5d ago",
        time: "Contract",
        place: "USA only",
        skills: ["Frontend", "Junior", "CSS", "JavaScript"],
      },
      {
        id: 5,
        companyName: "Loop Studios",
        isNew: false,
        isFeatured: false,
        role: "Software Engineer",
        dateAdded: "1w ago",
        time: "Full time",
        place: "Worldwide",
        skills: ["Midweight", "Fullstack", "Ruby", "Sass", "JavaScript"],
      },
      {
        id: 6,
        companyName: "Faceit",
        isNew: false,
        isFeatured: false,
        role: "Junior Backend Developer",
        dateAdded: "2w ago",
        time: "Full time",
        place: "UK only",
        skills: ["Backend", "Junior", "Ruby", "RoR"],
      },
      {
        id: 7,
        companyName: "Shortly",
        isNew: false,
        isFeatured: false,
        role: "Junior Developer",
        dateAdded: "2w ago",
        time: "Full time",
        place: "Worldwide",
        skills: ["Frontend", "Junior", "HTML", "Sass", "JavaScript"],
      },
      {
        id: 8,
        companyName: "Insure",
        isNew: false,
        isFeatured: false,
        role: "Junior Developer",
        dateAdded: "2w ago",
        time: "Full time",
        place: "USA only",
        skills: ["Frontend", "Junior", "Vue", "Sass", "JavaScript"],
      },
      {
        id: 9,
        companyName: "Eyecam Co.",
        isNew: false,
        isFeatured: false,
        role: "Full Stack Engineer",
        dateAdded: "3w ago",
        time: "Full time",
        place: "Worldwide",
        skills: ["Fullstack", "Midweight", "Django", "Python", "JavaScript"],
      },
      {
        id: 10,
        companyName: "The Air Filter Company",
        isNew: false,
        isFeatured: false,
        role: "Front-end Dev",
        dateAdded: "1mo ago",
        time: "Part time",
        place: "Worldwide",
        skills: ["Fullstack", "Junior", "React", "Sass", "JavaScript"],
      },
    ]
  )
 

  return (
    <div>
      <Header />
      <JobGenerateForm  setJobs={setJobs}/>
      <JobList setJobs={setJobs} jobs={jobs}/>
      {/* conditional rendering */}
      {isCounterVisible && <Counter />}
    </div>
  );
};



export default App;
