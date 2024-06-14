import React from 'react';

const GoogleButton = ({ onClick }) => {
  return (
    <button className="google-button" onClick={onClick}>
      Continue with Google
    </button>
  );
};

export default GoogleButton;
