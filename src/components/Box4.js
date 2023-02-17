import React from 'react'
import './Navbar.css';

export default function Box4() {
  return (
    <div>
      <div className='box d-flex'>
      <img className='img11' src="https://www.boloforms.com/_next/static/media/raman.e5477e92.jpeg" alt="" height="200" width="200" />
      <div className="right">
        <img className='img12' src="https://www.boloforms.com/_next/static/media/Stars.885edd0c.svg" alt="" />
        <p className='d-flex'>"I recently started using Boloforms for my Google Forms and it has been an absolute game-changer. The software is intuitive and user friendly, so I was able to set up my forms quickly & easily. It also provides powerful analytics to understand and act on the data collected from my forms in real-time. Overall, it's been a great experience using Boloforms and I highly recommend it!"</p>
        <p className='fw-bold'>Raman R</p>
      </div>
    </div>

    <div className="d-flex two-button">
            <button type="button" className="installbtn btn btn-primary">Install For Free</button>
            <button type="button" className="btn btn2 btn-outline">BoloForms Premium</button>
            </div>

    </div>
  )
}
