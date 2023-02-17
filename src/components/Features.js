import React from 'react'

export default function Features() {
  return (
    <div className='Feature'>
        <h2 className='fw-bold feature' >Features</h2>
        <h6 className='feat'>Everything that your organisation will love, & more.</h6>
        <br />
        <br />

        <div className="d-flex">
            <div className='col1'>
                <img src="https://www.boloforms.com/_next/static/media/pr_agiledeploy.b988c9c8.svg" alt="" />
                <p className='fw-bold'>Get started in less than 5 minutes</p>
                <h6 className="feature-desc">Just use an existing Google Form, add approvers, and we'll notify them via email when submissions are made.</h6>
            </div>
            <div className='col2'>
                <img src="https://www.boloforms.com/_next/static/media/pr_dyncaseroute.02285ff2.svg" alt="" />
                <p className='fw-bold'>Multi-level workflows</p>
                <h6 className="feature-desc">To ensure that your executives do not approve a document until it has been reviewed and accepted by other employees, you can set up multi-level approval processes.</h6>
            </div>
            <div className='col3'>
                <img src="https://www.boloforms.com/_next/static/media/pr_dynbusrules.572419de.svg" alt="" />
                <p className='fw-bold'>Dynamic Reciepients</p>
                <h6 className="feature-desc">Just use an existing Google Form, add approvers, and we'll notify them via email when submissions are made.</h6>
            </div>
        </div>


        <div className="d-flex">
            <div className='col11'>
                <img src="https://www.boloforms.com/_next/static/media/pr_socialtask.06e17c13.svg" alt="" />
                <p className='fw-bold'>Role Based Workflows</p>
                <h6 className="feature-desc">Assign the following roles to your recipients: Approver, Receive a Copy, and Send Final Email Only.</h6>
            </div>
            <div className='col12'>
                <img src="https://www.boloforms.com/_next/static/media/pr_visualprcdesign.0ff90171.svg" alt="" />
                <p className='fw-bold'>Conditional Logic</p>
                <h6 className="feature-desc">To prevent unnecessary work for approvers, set logic with your approvals to ensure approvers only receive the requests that are relevant to them.</h6>
            </div>
            <div className='col13'>
                <img src="https://www.boloforms.com/_next/static/media/pr_instaaccess.e822dad7.svg" alt="" />
                <p className='fw-bold'>One-click Approvals</p>
                <h6 className="feature-desc">Notification emails are sent to users and can be approved with a single click.</h6>
            </div>
        </div>



        <div className="d-flex">
            <div className='col21'>
                <img src="https://www.boloforms.com/_next/static/media/pr_intuserinter.41c7f4bc.svg" alt="" />
                <p className='fw-bold'>Responsive design</p>
                <h6 className="feature-desc">It is designed to be mobile-first, and seamlessly works on desktop and tablet as well.</h6>
            </div>
            <div className='col22'>
                <img src="https://www.boloforms.com/_next/static/media/pr_processoptim.f6216ec3.svg" alt="" />
                <p className='fw-bold'>Enterprise grade security</p>
                <h6 className="feature-desc">Majority of data stored in your spreadsheet. This ensures you have the complete control of your data with end to end encryption.</h6>
            </div>
            <div className='col23'>
                <img src="https://www.boloforms.com/_next/static/media/pr_dashboard.64597267.svg" alt="" />
                <p className='fw-bold'>Custom Dashboard</p>
                <h6 className="feature-desc">Track approvals of various forms from a single place! See the approval process for each request in real-time.</h6>
            </div>
        </div>

    </div>
  )
}
