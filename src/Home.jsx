import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  console.log('process', process.env.NODE_ENV);

  return (
    <div>
      Home8
      <Link to="/child">123</Link>
    </div>
  );
};

export default Home;
