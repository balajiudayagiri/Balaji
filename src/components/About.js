import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <p>This is the about page.</p>
      <Link to="/">home</Link>
    </div>
  );
};

export default About;
