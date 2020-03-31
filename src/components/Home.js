import React, { Fragment } from "react";

export default ()=>{
  return (
    <React.Fragment>
      <img src="./images/bkgd.jpg" id="home-background"/>
      <section id="main" className="container">
          <div className="jumbotron">
                  <h1 className="display-5">Hi. My name is <span>Christian Lance.</span></h1>
                  <h1 className="display-5">I'm a full-stack web developer.</h1>
                  <a className="btn btn-primary btn-lg" href="/portfolio" role="button">Check out my portfolio!</a>
          </div>
      </section>
    </React.Fragment>
);
}
