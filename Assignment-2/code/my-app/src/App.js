import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div className="container">
  {/* Start your React code here */}
  <img src={employee.profileImg} alt="react alt img" width="100" height="100"/>
  <h1>{employee.name}</h1>
  <div className="content">
    <label>Location</label>
    <b>{employee.location}</b>
  </div>
  <div className="content">
    <label>Blood Group</label>
    <b>{employee.bloodGroup}</b>
  </div>
  <div className="content">
    <label>Age</label>
    <b>{employee.age}</b>
  </div>
</div>
)
}



export default App;
