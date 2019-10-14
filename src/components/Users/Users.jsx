// core
import React from 'react';

// components
import UserCard from '../UserCard';

const Users = ({ users }) => (
  <div className="row">
    {
      users.map(user => (
        <UserCard key={user.id.value} user={user} />
      ))
    }
  </div>
);

export default Users;
