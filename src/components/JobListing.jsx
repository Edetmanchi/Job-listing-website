import { useState, useEffect } from 'react';
import JobListings from './JobListings';
import Spinner from './Spinner';
// import jobsData from "../jobs.json";
// import jobs from "../jobs.json"
const JobListing = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:8000/1"); // Correct URL
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
        const data = await res.json(); // Convert response to JSON
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Reducing the job grid to just three if isHome is true
  // const jobListing = isHome ? jobs.slice(0, 3) : jobs;

  return (
    <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
          {/* Conditionally render based on loading state  */}
          {loading ? (
            <Spinner loading={loading}/>
          ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
           {jobs.map((job) => (
              <JobListings key={job.id} job={job} />
            ))}
        </div>
       )}
      </div>
    </section>
  );
};
export default JobListing;
