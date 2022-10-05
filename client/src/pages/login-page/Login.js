import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

const Login = () => {
  // const { loading, data } = useQuery(QUERY_MATCHUPS, {
  //   fetchPolicy: "no-cache"
  // });









  return (
    <div class="card bg-white card-rounded w-50">
      <div class="card-header bg-dark text-center">


        {/* login form  */}
        <h1>Login Form</h1>

        <form class='form'>
          <div class=''>
            <img src='' alt=''>
            </img>
          </div>

          <div class='container'>
            <span>Username</span>
            <input type="text" placeholder="Enter Username"></input>

            <span>Password</span>
            <input type="password" placeholder="Enter Password"></input>

            <button type='submit'>Login</button>
            <input type="checkbox"></input>

          </div>
        </form>




        {/* sign up form, it will appear on page once the sign up text is clicked on */}


        <h1>sign up Form</h1>

        <form>
          <div className=''>
            <img src='' alt=''>
            </img>
          </div>

          <div className='container'>
            <span>Username</span>
            <input type="text" placeholder="Enter Username"></input>

            <span>Email</span>
            <input type="text" placeholder="Enter Email"></input>

            <span>Password</span>
            <input type="password" placeholder="Enter Password"></input>

            <button type='submit'>sign up</button>
            <input type="checkbox"></input>

          </div>
        </form>
      </div>
    </div>







  );
};

export default Login;
