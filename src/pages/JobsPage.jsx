import React from 'react'
import JobListings from '../components/JobListings'
import jobs from "../jobs.json"

const JobsPage = () => {
  return (
   <div className='bg-blue-50 px-14 py-6'>
     <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
           {jobs.map((job) => (
              <JobListings key={job.id} job={job} />
            ))}
        </div> 
    </div>
  )
}

export default JobsPage




























// import { useState } from 'react';
// import {FaMapMarker} from "react-icons/fa"
// // import { FaMapMarker } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import job from "../jobs.json"

// // console.log(job))
// const JobListings = ({ job }) => {
//   const [showFullDescription, setShowFullDescription] = useState(false);


//   if (!job || !job.description) {
//     return <div>Error: Job information is incomplete.</div>;
//   }

//    let description = job.description; 

//   if (!showFullDescription) {
//     description = job.description.substring(0, 100) + '.....';
//   }
  
//   return (
//     <div className='bg-white rounded-xl shadow-md relative'>
//       <div className='p-4'>
//         <div className='mb-6'>
//           <div className='text-gray-600 my-2'>{job.type}</div>
//           <h3 className='text-xl font-bold'>{job.title}</h3>
//         </div>

//         <div className='mb-5'>{description}</div>

//         <button
//           onClick={() => setShowFullDescription((prevState) => !prevState)}
//           className='text-indigo-500 mb-5 hover:text-indigo-600'
//         >
//           {showFullDescription ? 'Less' : 'More'}
//         </button>

//         <h3 className='text-indigo-500 mb-2'>{job.salary} / Year</h3>

//         <div className='border border-gray-100 mb-5'></div>
//         <div className='flex flex-col lg:flex-row justify-between mb-4'>
//           <div className='text-orange-700 mb-3 '>
//             <FaMapMarker className='inline text-xl mr-1 mb-2 text-blue-600 font-bold'/>
//             {job.location}
//           </div>
//           <Link
//             to={`/jobs/${job.id}`}
//             className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'
//           >
//             Read More
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default JobListings;