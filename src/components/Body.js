import React from 'react'
import './Navbar.css'

export default function Body() {
    return (
        <div>
            <div className='d-flex body' >
                <div className="text1">
                    <h1 className='fw-bold'>Transform Google Forms Into Interactive Workflows</h1>
                    <h4>BoloForms is a Google Forms add on that allows you to add conditional logic to your forms. With BoloForms, you can create interactive workflows, approval flows & automate processes</h4>
                </div>
                <div className="video-container">
                    <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/riiUkCRpIio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            <div className='d-flex'><button type="button" className="installbtn btn btn-primary">Install For Free</button></div>
            <br />
            <br />
            <br />
            <div className="d-flex justify-content-center">
                <h1>BoloForms Is Used By</h1>
            </div>
        </div>
    )
}
