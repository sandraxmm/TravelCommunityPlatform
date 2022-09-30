import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';


const User = () => {
    const { loading, data } = useQuery(QUERY_MATCHUPS, {
        fetchPolicy: "no-cache"
    });



    return (
        <div className="">
            <div className="">

                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <img class="" src="#" alt=''></img>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Profile</a>
                    </li>
                    <li class="nav-item">
                        <form class="form-inline">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search For Place" aria-label="Search"></input>
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </li>
                </ul>



                {/* form to create posts, it contains options to upload a picture, add a caption or a piece of text and an option to add location  */}

                <form class="post-form">

                    <div class="form-group">

                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile01">
                                <label class="custom-file-label" for="inputGroupFile01">upload file</label>
                            </input>
                        </div>

                    </div>



                    <div class="form-group">

                        <label for="exampleFormControlTextarea1">Add a caption</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <div class="form-group">

                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Add Location</button>
                        </input>

                    </div>

                    <button type='submit'>Post</button>

                </form>













                {/* my posts will appear here */}

                <div className='container-feed'>


                    <figure class="figure">
                        <img src= {{}} class="figure-img img-fluid rounded" alt={{}}>
                        </img>


                        {/* caption goes here */}
                        <figcaption class="figure-caption">{{}}</figcaption>
                        {/* button to edit the post */}
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Edit</button>

                    </figure>
                    
                </div>






            </div>


















        </div >



    );
};

export default User;
