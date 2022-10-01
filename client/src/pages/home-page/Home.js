import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';


const Home = () => {
  // const { loading, data } = useQuery(QUERY_MATCHUPS, {
  //   fetchPolicy: "no-cache"
  // });



  return (
    <div className="">
      <div className="">

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
          {/* this will allow you to look for a specific place and it will render all posts mentioning this location */}
          <li className="nav-item">
            <form className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Search For Place" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </li>

        </ul>



        {/* form to create posts, it contains options to upload a picture, add a caption or a piece of text and  option to add location  */}

        <form className="post-form" action='/api/images' method="post" enctype="multipart/form-data">

          <div className="form-group">

            <div className="custom-file">
              <input type="file" className="custom-file-input" id="inputGroupFile01" />


              <label className="custom-file-label" htmlFor="inputGroupFile01">upload file</label>
            </div>

          </div>

          {/* This will contain the caption/text */}
          <div className="form-group">

            <label htmlFor="exampleFormControlTextarea1">Add a caption</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>

          {/* this should add the location the post is related to */}
          <div className="form-group">

            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />

            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

          </div>

          <button type='submit'>Post</button>

        </form>




        {/* Timeline */}
        {/* posts will be rendered according the time and date they were added */}

        <div className='container-feed'>
          <figure className="figure">
            <img src="..." className="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure.">
            </img>
            <figcaption className="figure-caption">The caption will go here.</figcaption>
          </figure>
        </div>






      </div>



    </div >



  );
};

export default Home;