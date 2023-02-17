import React from 'react'
import './Navbar.css';

export default function Footer() {
  return (
    <div>
        <footer>
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h4>Contact Us</h4>
        <ul className="list-unstyled">
          <li>💬Live Chat</li>
          <li>📨Support Email</li>
          <li>📚Help Center</li>
          <li>📅Video Call</li>
        </ul>
      </div>
      <div className="col-md-4">
        <h4>Pages</h4>
        <ul className="list-unstyled">
          <li>Home</li>
          <li>Pricing</li>
          <li>Blogs</li>
          <li>About us</li>
          <li>Products</li>
        </ul>
      </div>
      <div className="col-md-4">
        <h4>Our Products</h4>
        <ul className="list-unstyled">
          <li>Forms Approval</li>
          <li>Signature</li>
          <li>Sheetgod</li>
          <li>Google Form UI Enhancer</li>
          <li>BoloForms Document Generator</li>
          <li>Timer + Proctor</li>
          <li>Google Meet Attendence Tracker</li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <hr/>
        <p>&copy; 2023 Your Company. All Rights Reserved.</p>
        <ul className="list-inline">
          <li className="list-inline-item"><a href="#">Terms of Service</a></li>
          <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
          <li className="list-inline-item"><a href="#">Refund Policy</a></li>
          <li className="list-inline-item"><a href="#">Data Security & Policy</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>


    </div>
  )
}
