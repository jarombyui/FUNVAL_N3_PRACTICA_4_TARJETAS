// src/components/UserCard.jsx
import React from 'react';
import '../Components/UseCard.css';

const UserCard = ({ name, username, email, image, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={name} className="card-img" />
      <div className="card-info">
        <h2>{name}</h2>
        <p>@{username}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default UserCard;
