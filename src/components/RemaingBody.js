import React from 'react'
import './Navbar.css'

export default function RemaingBody() {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <h1 className="fw-bold">How does Boloforms Work?</h1>
            </div>
            <div className="d-flex justify-content-center">
                <h5>
                    setup workflow in just 3 easy steps.
                </h5>
            </div>

            <div className="d-flex" >
                <div className="step-container">
                    <img className='slider-image' src="https://www.boloforms.com/_next/static/media/1.b2cc23b0.svg" alt="" />
                    <p className="step-text fw-bold">Step 1:</p>
                    <p className='text-img'>Choose a template or add questions to create your Google Form.</p>
                </div>
                <div className="step-container">
                    <img className='slider-image' src="https://www.boloforms.com/_next/static/media/1.b2cc23b0.svg" alt="" />
                    <p className="step-text fw-bold">Step 2:</p>
                    <p className='text-img'>Enable Single/Multi Step approval and add necessary approvers!</p>
                </div>
                <div className="step-container">
                    <img className='slider-image' src="https://www.boloforms.com/_next/static/media/3.1a7ec00e.svg" alt="" />
                    <p className="step-text fw-bold">Step 3:</p>
                    <p className='text-img'>Now you can enable the workflow and share the Google Form.</p>
                </div>
            </div>
        </div>
    )
}
