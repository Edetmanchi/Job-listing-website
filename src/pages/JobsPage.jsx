import React from 'react'
import JobListing from '../components/JobListing'
import jobs from '../db.json'

const JobsPage = () => {
  return (
   <div className='bg-blue-50 px-14 py-6'>
     <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
           {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
        </div> 
    </div>
  )
}

export default JobsPage


























