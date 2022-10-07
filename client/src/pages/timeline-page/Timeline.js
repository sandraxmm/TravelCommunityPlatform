
import React from 'react';
import PostList from '../../components/PostList/index'
import PostForm from '../../components/PostForm/index'



const Timeline = () => {
  // const { loading, data } = useQuery(QUERY_MATCHUPS, {
  //   fetchPolicy: "no-cache"
  // });

  const uploadImage = (files) => {
    console.log(files[0]);
  }


  const timeline = [
    { icon: kissyFaceIcon, date: '2000- present', title: 'Creative Director', subtitle: 'Miami, FL', desc: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading' },
    { icon: drumIcon, date: '2010 - 2011', title: 'Art Director', subtitle: 'San Francisco, CA', desc: 'Creative Direction, User Experience, Visual Design, SEO, Online Marketing' },
    { icon: workIcon, date: '2008 - 2010', title: 'Web Designer', subtitle: 'Los Angeles, CA', desc: 'User Experience, Visual Design' },
    { icon: workIcon, date: '2006 - 2008', title: 'Web Designer', subtitle: 'San Francisco, CA', desc: 'User Experience, Visual Design' },
    { icon: schoolIcon, date: 'April 2013', title: 'Content Marketing for Web, Mobile and Social Media', subtitle: 'Online Course', desc: 'Strategy, Social Media' },
    { icon: schoolIcon, date: 'November 2012', title: 'Agile Development Scrum Master', subtitle: 'Certification', desc: 'Creative Direction, User Experience, Visual Design' },
    { icon: schoolIcon, date: '2002 - 2006', title: 'Bachelor of Science in Interactive Digital Media Visual Imaging', subtitle: 'Bachelor Degree', desc: 'Creative Direction, Visual Design' },
    { icon: starIcon }
  ];


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

      <div className='card text-center  '>
        {/* form to create posts, it contains options to upload a picture, add a caption or a piece of text and  option to add location  */}
        <div>
          <h1>Create a new post</h1>
          <form className="post-form">

            <div className="form-group">

              <div className="custom-file">
                <input type="file" className="custom-file-input" id="inputGroupFile01" 
                onChange={(event)=> {
                  uploadImage(event.target.files);
                  }} 
                  />


                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">upload picture</button>
              </div>

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
