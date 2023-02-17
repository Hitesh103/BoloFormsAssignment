import React from 'react'
import leftImage from '../asset/image.png'

export default function Image() {
  return (
    <div className='d-flex'>
    <div className='leftImage'>
        <img src={leftImage} alt="" />
    </div>

    <div className='sidetext'>
            <h1 className='fw-bold'>An End-To-End Workflow Platform For All Your Business Needs</h1>
            <h6>1000+ companies-from Startups to Fortune 500s use BoloForms Approvals to build and manage business processes across departments.</h6>
            <div className="buttonn">
            <button  type="button" className="btnimage btn-outline">BoloForms Premium</button>    
            </div>
            </div>
    </div>
  )
}
