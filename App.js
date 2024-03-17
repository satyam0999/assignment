import React, { useState } from 'react';
import './App.css';
import data from './data.json';
import Snackbar from './Snackbar';

function App() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const openPopup = (rowData) => {
    setSelectedRow(rowData);
  };

  const closePopup = () => {
    setSelectedRow(null);
  };

  const handleSubmit = () => {
    closePopup();
    setSnackbarOpen(true);
  };

  const closeSnackbar = () => {
    setSnackbarOpen(false);
  };

  const totalRecords = data.length > 0 ? data[data.length - 1].id : 0;

  return (
    <div className="App">
      <h1 className="title">User Table</h1>
      <div className="records-count">Total Records: {totalRecords}</div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.email}</td>
              <td>{row.city}</td>
              <td>
                <button onClick={() => openPopup(row)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedRow && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            <h2 className="popup-title">Row Details</h2>
            <p>ID: {selectedRow.id}</p>
            <p>Name: {selectedRow.name}</p>
            <p>Age: {selectedRow.age}</p>
            <p>Email: {selectedRow.email}</p>
            <p>City: {selectedRow.city}</p>
            <div className="popup-submit">
              <div className="submit-button">
               <button onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {snackbarOpen && (
        <Snackbar message="Thank you for submitting" onClose={closeSnackbar} />
      )}
    </div>
  );
}

export default App;

