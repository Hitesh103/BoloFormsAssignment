import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <img src="https://www.boloforms.com/_next/static/media/logo-text.e6f7617c.svg" alt="" width="110" height="100" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Form Aprovel</a></li>
            <li><a className="dropdown-item" href="#">Sheet God</a></li>
            <li><hr className="dropdown-divider"/>Signature</li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="https://www.boloforms.com/form-approval/pricing/">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="https://approval-docs.boloforms.com/" tabindex="-1" aria-disabled="true">Guides</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="https://www.boloforms.com/workflow-templates/" tabindex="-1" aria-disabled="true">Templets</a>
        </li>
      </ul>
      <form className="d-flex button">
        <ul>
       <button className="btn-second btn-outline " type="submit" onClick={() => { window.location.href = 'https://workspace.google.com/marketplace/app/form_approvals_publisher_notifications_d/674195424545?ref=website'; }}>Install Now</button></ul>
       <ul>
        <button className="btn-second btn-outline" type="submit">BoloForms Premium</button>
        </ul>
      </form>
    </div>
  </div>

</nav>
    </div>
  );
}
