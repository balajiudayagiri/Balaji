// src/components/Router.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      dsfdds
      <Router>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/page2" component={Page2} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      {/* Add your home page content here */}
    </div>
  );
};

const Page2 = () => {
  return (
    <div>
      <h1>Page 2</h1>
      {/* Add your second page content here */}
    </div>
  );
};
