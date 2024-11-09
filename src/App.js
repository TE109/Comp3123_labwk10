import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { /* Components of React Router */
    BrowserRouter as Router, // BrowserRouter: Uses the HTML5 history API to keep your UI in sync with the URL.
    Routes, // Routes: A container for all your route definitions.
    Route,  // Route: Defines a single route with a path and the component to render.
    Link, // Link: Creates navigational links in your application.
    useNavigate, //useNavigate(): Handling User Interactions: Redirect users after certain actions, such as form submissions or login.
    Outlet, // outLet : a placeholder within a parent route's component that tells React Router where to render the child routes.
  } from "react-router-dom";


  function App() {
    const [data, setData] = useState({
      email: "",
      name: "",
      address: "",
      city: "",
      province: "",
      postal: ""
    })
    const [submit, setsubmitData] = useState({
      email: "",
      name: "",
      address: "",
      city: "",
      province: "",
       postal: ""
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setData((prevData) => ({
    ...prevData,
    [name]: value
  }));
};

const handleDropChange = (e) => {

  setData(e.target.value);

};

const handleSubmitFun = (e) => {
  e.preventDefault();
  setsubmitData(data);
};




return (
  <div className="App">
    <h1>Data Entry Form</h1>
    <form onSubmit={handleSubmitFun}>
      <label>Email: </label>
      <input
        type="text"
        name="email"
        value={data.email}
        placeholder='Enter Email'
        onChange={handleChange}
      />
      <br />
      <label>Name: </label>
      <input
        type="text"
        name="name"
        value={data.name}
        placeholder='Full Name'
        onChange={handleChange}
      />
      <br />
      <label>Address: </label>
      <input
        type="text"
        name="address"
        value={data.address}
        placeholder='1234 main street'
        onChange={handleChange}
      />
      <label>Address 2: </label>
      <input
        type="text"
        placeholder='Aparment, Studio, etc'
        onChange={handleChange}
      />
      <br />
      <label>City: </label>
      <input
        type="text"
        name="city"
        value={data.city}
        placeholder=''
        onChange={handleChange}
      />
      <br />
      <label>Province: </label>
      <select value={data.province} onChange={handleChange} name="province">
        <option value="Alberta">Alberta</option>
        <option value="British Columbia Manitoba">British Columbia Manitoba</option>
        <option value="New Brunswick">New Brunswick</option>
        <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
        <option value="Nova Scotia">Nova Scotia</option>
        <option value="Ontario">Ontario</option>
        <option value="Prince Edward Island">Prince Edward Island</option>
        <option value="Quebec">Quebec</option>
        <option value="Saskatchewan">Saskatchewan</option>

       </select>
      <br />
      <label>Postal Code: </label>
      <input
        type="text"
        name="postal"
        value={data.postal}
        placeholder=''
        onChange={handleChange}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
    <div className='submit'>
      <h2><i>Email:</i> {submit.email}</h2>
      <h2><i>Full Name: </i>{submit.name}</h2>
      <h2><i>Address:</i> {submit.address}</h2>
      <h2><i>City:</i> {submit.city}</h2>
      <h2><i>Province:</i> {submit.province}</h2>
      <h2><i>Postal Code:</i> {submit.postal}</h2>
    </div>
    
  </div>

  
);

  
}



export default App;
