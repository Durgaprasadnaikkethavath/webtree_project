import React from "react";

const Card = ({ user }) => {
  const { name, picture, gender, phone } = user;
  return (
    <>
      <div className="cart_container">
        <div className="image_container">
          <img
            src={picture.large}
            alt={`${name.first} ${name.last}`}
            className="user_image"
          />
        </div>
        <div className="user_details">
          <div className="name">
            <h2>FirstName: {name.first}</h2>
            <h2>LastName: {name.last}</h2>
          </div>
          <p className="gender">Gender: {gender}</p>
          <p className="gender">phoneNumber: {phone}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
