import React from 'react';
import { useQuery } from '@apollo/client';



 import Login from '../../components/LoginForm.js';
import SignupForm from '../../components/SignupForm';




import { QUERY_THOUGHTS } from '../../utils/queries';


const Home = () => {
   //const { loading, data } = useQuery(QUERY_THOUGHTS);
  // const thoughts = data?.thoughts || [];
const loading = true;
  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <Login />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <SignupForm
              // thoughts={thoughts}
              // title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
