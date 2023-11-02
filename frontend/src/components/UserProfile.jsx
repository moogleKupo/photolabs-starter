import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <img src={user.avatar} alt={user.username} />
      <span>{user.username}</span>
    </div>
  );
};

export default UserProfile;
