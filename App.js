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
