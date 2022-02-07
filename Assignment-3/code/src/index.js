import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const employee = {
  name: 'Sourav Bera',
  description: 'If you want to start measuring performance in your app, pass a function',
  appoinment: '9:30 A.M 08:02:2022',
  email:'sample@gmail.com',
  phone:'+919807654321',
  status:'Active',
  door:'Mark',
  time:'11.00 A.M',
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
}

ReactDOM.render(
  <React.StrictMode>
    <App employee={employee} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
