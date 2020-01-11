import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <div className="wrapper">

    <div className="page-main">
      <div className="grid">
        <div className="">
          <div className="text-wrapper">
            <h1>Welcome to Devs Blog!</h1>
          </div>
          <div className="text-wrapper p-wrapper">
            <h2>Write Blogs for </h2>
          </div>
          <div className="text-wrapper p-wrapper">
            <h3>the world</h3>
          </div>
        </div>

      </div>
      <div className="buttons">
            <Link to="/register" className="btn btn-primary">Sign Up</Link>
            <Link to="/login" className="btn btn-light">Login</Link>
      </div>
    </div>
    </div>
  )
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);