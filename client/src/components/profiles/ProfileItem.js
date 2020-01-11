import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    location
  }
}) => {
  return (
    <div className='profile bg-light'>
      <div className="profile-grid">
      <img src={avatar} alt='' className='round-img' />
      <h2>{name}</h2>
      </div>
  
      <div>
        
        <p className='my-1'>{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;