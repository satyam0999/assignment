import React, { useEffect } from 'react';
import './Snackbar.css';

const Snackbar = ({ message, onClose }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 3000); // Close the snackbar after 3 seconds
    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <div className="Snackbar" onClick={onClose}>
      <span>{message}</span>
    </div>
  );
};

export default Snackbar;

