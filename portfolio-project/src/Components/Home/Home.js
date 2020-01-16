import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className='header-elements'>
        <div>
          <Link to='/'><span>01 : Home</span></Link>
        </div>
        <div>|</div>
        <div>
          <Link to='/projects'><span>02 : Projects</span></Link>
        </div>
        <div>|</div>
        <div>
        <Link to='/about'><span>03 : About</span></Link>
        </div>
        <div>|</div>
        <div>
        <Link to='/contact'><span>04 : Contact</span></Link>
        </div>
      </div>
    );
  }
}

export default Home;
