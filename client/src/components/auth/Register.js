import React, { Fragment , useState} from 'react'
import {connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { setAlert } from '../../actions/alert'
import { register } from '../../actions/auth'
import PropTypes from 'prop-types'
import Moment from 'react-moment';
import moment from 'moment';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData

  const onChange = e => 
    setFormData({ ...formData, [e.target.name]: e.target.value })
  const onSubmit = e => {
    e.preventDefault()
    if(password !== password2){
      setAlert('Passwords do not match', 'danger' )
    }
    else{
      register({ name, email, password })
    }
  }

  if(isAuthenticated){
    return <Redirect to='/dashboard'/>
  }

  return (
    <Fragment>
      <div className = 'padded'>
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
        <form className="form" onSubmit={e => onSubmit(e)} action="create-profile.html">
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name" 
              value = {name}
              onChange = {e => onChange(e)}
              // required 
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              placeholder="Email Address" 
              name="email"
              value = {email}
              onChange = {e => onChange(e)}
              // required
            />
            <small className="form-text"
              >This site uses Gravatar so if you want a profile image, use a
              Gravatar email</small
            >
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value = {password}
              onChange = {e => onChange(e)}
              // minLength="4"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value = {password2}
              onChange = {e => onChange(e)}
              // minLength="4"
            />
          </div>
          <div className="form-group">
          <h4>Date of birth</h4>
            <input
              type='date'
              name='from'
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </Fragment>
  )
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}
export default connect(
  mapStateToProps, 
  { setAlert, register }
)(Register)
