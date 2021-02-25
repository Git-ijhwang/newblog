import React from "react";
import Sub from "./subPortfolio";
import Title from "./title";
import laravel from "../imgs/laravelblog.png";
import react from "../imgs/reactblog.png";
import TextBlog1 from "../imgs/blog.png";
import JobFair_Project from "../imgs/jobfair.png";
import TextBlog from "../imgs/myblog.png";
import Django from "../imgs/Django.jpg";
import Golang from "../imgs/golang.jpg";
import Wordpress from "../imgs/wordpress.jpg";


import "../css/styles.css";

class Portfolio extends React.Component {
  render() {
    const windowSize = this.props.windowWidth;
  return (

    <section className="page-section pf-primary" id="portfolio" >
      <div className="container-fluid p-0">
        <div className="col-12 text-center">

          <Title title="What I did"/>

          <div className="row justify-content-center">

            <Sub
              name="Language: React, NodeJS, MongoDB"
              category="Project: Simple Text Blog"
              //description="It was very meaningful project that developed for NSCC Job fair event. I had taken the role to make Student Information Managing"
              src={TextBlog1}
              // src2={laravel}
              // size={this.props.windowWidth}
              size={windowSize}
              />

            <Sub
              name="Language: PHP and Laravel"
              category="Job Fair Project"
              // description="It was very meaningful project that developed for NSCC Job fair event. I had taken the role to make Student Information Managing"
              src={JobFair_Project}
              // size={this.props.windowWidth}/>
              size={windowSize}
              />

            <Sub
              name="Language: Laravel"
              category="Project: NSCC Fullstack blog"
              //description="It was very meaningful project that developed for NSCC Job fair event. I had taken the role to make Student Information Managing"
              src={laravel}
              // size={this.props.windowWidth}/>
              size={windowSize}
              />

            <Sub
              name="Language: React, NodeJS"
              category="Project: NSCC React FullStack Project"
              //description="I learned how to use OKTA for user authentication."
              src={react}
              // size={this.props.windowWidth}/>
              size={windowSize}
              />

            <Sub
              name="Language: React, NodeJS, Okta"
              category="Project: Basic CRUD App "
              //description="I learned how to use OKTA for user authentication."
              url="https://github.com/Git-ijhwang/CRUD_blog.git"
              src={TextBlog}
              // size={this.props.windowWidth}/>
              size={windowSize}
              />

            <Sub
              name="Language: Django"
              category="Project: Sample Pizza order page"
              description="Linkedin eLearning Course"
              url="https://github.com/Git-ijhwang/Django_example.git"
              src={Django}
              // size={this.props.windowWidth}/>
              size={windowSize}
              />

            <Sub
              name="Language: Go Language"
              category="Project: Excersize many type of short projects"
              //description="I learned how to use OKTA for user authentication."
              url="https://github.com/Git-ijhwang/Golan-Playground.git"
              src={Golang}
              // size={this.props.windowWidth}/>
              size={windowSize}
              />

            <Sub
              name="CMS: WordPress"
              category="I learned the WP REST API to Create Custom & Interactive WordPress Websites"
              description="UDEMY eLearning Course"
              // url="https://github.com/Git-ijhwang/Golan-Playground.git"
              src={Wordpress}
              // size={this.props.windowWidth}/>
              size={windowSize}
              />

          </div>
        </div>
      </div>
    </section>
  );
}
}
export default Portfolio;