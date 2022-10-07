
import React from 'react';
import PostList from '../../components/PostList/index'
import PostForm from '../../components/PostForm/index'



const Timeline = () => {


  return (
    <div className="container">
      <div className="navbar navbar-light bg-light">
        <ul className="nav nav-pills">

          {/* this will contain our icon */}
          <li className="nav-item">
            <img className="" src="#" alt=''></img>
          </li>


          {/* anchor tag will take you to home page to see everybody elses posts */}
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>


          {/* anchor tag will take you to users page  */}
          <li className="nav-item">
            <a className="nav-link" href="#">Profile</a>
          </li>

        </ul>
      </div>



      {/* form to create posts, it contains options to upload a picture, add a caption or a piece of text and  option to add location  */}
      <div className='card text-center  '>
        <div className="flex-row justify-center">
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}
          >
            <PostForm />
          </div>

        </div>


        {/* Timeline */}
        {/* posts will be rendered according the time and date they were added */}


        <div className="flex-row justify-center">
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}
          >
            {/* <PostList /> */}
          </div>

        </div>
      </div>

    </div>












  );
};

export default Timeline;