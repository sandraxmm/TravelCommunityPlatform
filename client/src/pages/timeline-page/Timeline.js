// import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY_POSTS } from '../../utils/queries';


import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBriefcase, faSchool, faStar, faFaceKissWinkHeart ,faDrum} from '@fortawesome/free-solid-svg-icons';
import * as Icon from '@fortawesome/free-solid-svg-icons';

import React, {Component} from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const workIcon = {
  icon: <FontAwesomeIcon icon={Icon.faBriefcase} />,
  iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' }
};
const schoolIcon = {
  icon: <FontAwesomeIcon icon={Icon.faSchool} />,
  iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' }
};
const starIcon = {
  icon: <FontAwesomeIcon icon={Icon.faStar} />,
  iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' }
};
const kissyFaceIcon = {
  icon: <FontAwesomeIcon icon={Icon.faFaceKissWinkHeart} />,
  iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' }
};
const drumIcon = {
  icon: <FontAwesomeIcon icon={Icon.faDrum} />,
  iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' }
};




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


          {/* this will allow you to look for a specific place and it will render all posts mentioning this location */}
          <li className="nav-item">
            <form className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Search For Location" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
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


















            {/* This will contain the caption/text */}
            <div className="form-group">

              <label htmlFor="exampleFormControlTextarea1">Add a caption</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            {/* this should add the location the post is related to */}
            <div className="form-group">

              <input className="form-control mr-sm-2" type="search" placeholder="Add Location to your Post" aria-label="Search" />

              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

            </div>

            <button type='submit'>Post</button>

          </form>











          {/* Timeline */}
          {/* posts will be rendered according the time and date they were added */}

          {/* return ( */}
          <div className="App">
            <h3>TIMELINE </h3>
            <VerticalTimeline>
              {timeline.map((t, i) => {
                const contentStyle = i === 0 ? { background: 'rgb(33, 150, 243)', color: '#fff' } : undefined;
                const arrowStyle = i === 0 ? { borderRight: '7px solid  rgb(33, 150, 243)' } : undefined;

                return <VerticalTimelineElement
                  key={i}
                  className="vertical-timeline-element--work"
                  contentStyle={contentStyle}
                  contentArrowStyle={arrowStyle}
                  date={t.date}
                  {...t.icon}
                >
                  {t.title ? <React.Fragment>
                    <h3 className="vertical-timeline-element-title">{t.title}</h3>
                    {t.subtitle && <h4 className="vertical-timeline-element-subtitle">{t.subtitle}</h4>}
                    {t.desc && <p>{t.desc}</p>}
                  </React.Fragment> : undefined}
                </VerticalTimelineElement>
              })}
            </VerticalTimeline>
          </div>
          {/* ) */}








          {/* <div className='container-feed'>
            <figure className="figure">
              <img src="..." className="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure.">
              </img>
              <figcaption className="figure-caption">The caption will go here.</figcaption>
            </figure>
          </div> */}
        </div>






      </div>



    </div >



  );
};

export default Timeline;
