import React from 'react';
import logo from './logo.svg';
import './App.css';


/*var arrow="<"*/
function App(props) {
  const {employee}=props;
  return (
    <div className="site-container">
    {/* Start Your code here */}
    <div className="row customer_info">
      <div className="content">
        <p>Appoinment: {employee.appoinment}</p>
        
      </div>
      
      <div className="content">
            <p>Email: {employee.email}</p>
      </div>
      <div className="content">
            <p>Phone: {employee.phone}</p> 
      </div>
      
      

    </div>
    <div className="row order_info">
      <div className="content">
        <label>Status :</label>
        <p>{employee.status}</p>
      </div>
      <div className="content">
        <label>Door :</label>
        <p>{employee.door}</p>
      </div>
      <div className="content">
        <label>Time :</label>
        <p>{employee.time}</p>
      </div>

    </div>
    <div className="row product_list">
    <div className="content">
        <img src={employee.profileImg} alt="profile-img" width="100" height="100" />
      </div>
      <div className="content">
        <label>{employee.name} </label>
        <p>{employee.description}</p>
      </div>
      

    </div>
    </div>
  );
}

export default App;
