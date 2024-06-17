import { Link } from 'react-router-dom';
import { useState } from "react";

const ViewAllJobs = ({recentJobs}) => {
    const [seeMoreJobs, setSeeMoreJobs] = useState(false)
    // if(seeMoreJobs){
    //     recentJobs
    // }
  return (
    <section className='m-auto max-w-lg my-10 px-6'>
      <Link
      onClick={()=>{setSeeMoreJobs((prevstate)=>!prevstate)}}
        to='/jobsPage'
        className='block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700'
      >
        { seeMoreJobs ? "View All Jobs" : "see less jobs"}
      </Link>
    </section>
  );
};
export default ViewAllJobs;