import ClipLoader from 'react-spinners/ClipLoader';
import {useEffect, useState} from 'react'

const override = {
  display: 'block',
  margin: '100px auto',

};

const Spinner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000); // Set the timer for 5 seconds (5000 milliseconds)

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);




  return (
    <ClipLoader
      color='#4338ca'
      loading={loading}
      cssOverride={override}
      size={100}
    />
  );
};
export default Spinner;
