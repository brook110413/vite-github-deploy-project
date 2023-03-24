import React from 'react';
import process from 'process';

const Home = () => {
  console.log('process', process.env.NODE_ENV);

  return <div>Home1</div>;
};

export default Home;
