import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListing from '../components/JobListing'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
        <Hero  title = 'Become a React Dev Anywhere'
          subtitle = 'Find the React job that fits your skill set'/>
        <HomeCards/>
        <JobListing isHome='true'/>
        <ViewAllJobs/>
    </>
    
  )
}

export default HomePage