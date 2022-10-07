import React from 'react';
import Login from '../login-page/LoginForm';
import SignupForm from '../signup-page/SignupForm';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS } from '../utils/queries.js';
const Home = () => {
  const loading = true;
  return (
    <main className='container flex-row justify-center'>
      <div className=" form flex-row justify-center">
        <div className="col-12 col-md-8 mb-3" >

          <Login/>

        </div>
     

        <div className="col-12 col-md-8 mb-3 ">

          <SignupForm/>

        </div>
      </div>
    </main >
  );
};

export default Home;