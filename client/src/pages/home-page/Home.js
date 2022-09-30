import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';


const Home = () => {
  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    fetchPolicy: "no-cache"
  });



  return (
    <div className="">
      <div className="">

        <ul class="nav nav-pills">
          {/* this will contain our icon */}
          <li class="nav-item">
            <img class="" src="#" alt=''></img>
          </li>
          {/* anchor tag will take you to home page to see everybody elses posts */}
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          {/* anchor tag will take you to users page  */}
          <li class="nav-item">
            <a class="nav-link" href="#">Profile</a>
          </li>
          {/* this will allow you to look for a specific place and it will render all posts mentioning this location */}
          <li class="nav-item">
            <form class="form-inline">
              <input class="form-control mr-sm-2" type="search" placeholder="Search For Place" aria-label="Search"></input>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </li>

        </ul>



        {/* form to create posts, it contains options to upload a picture, add a caption or a piece of text and  option to add location  */}

        <form class="post-form">

          <div class="form-group">

            <div class="custom-file">
              <input type="file" class="custom-file-input" id="inputGroupFile01">
                <label class="custom-file-label" for="inputGroupFile01">upload file</label>
              </input>
            </div>

          </div>

          {/* This will contain the caption/text */}
          <div class="form-group">

            <label for="exampleFormControlTextarea1">Add a caption</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>

          {/* this should add the location the post is related to */}
          <div class="form-group">

            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </input>

          </div>

          <button type='submit'>Post</button>

        </form>




        {/* Timeline */}
        {/* posts will be rendered according the time and date they were added */}

        <div className='container-feed'>
          <figure class="figure">
            <img src="..." class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure.">
            </img>
            <figcaption class="figure-caption">The caption will go here.</figcaption>
          </figure>
        </div>






      </div>



    </div >



  );
};

export default Home;
