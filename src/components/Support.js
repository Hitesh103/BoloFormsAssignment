import React from 'react'

export default function Support() {
    return (
        <div>
            <div className='support1'>
                <img className='star2' src="https://www.boloforms.com/_next/static/media/stars.6ce54309.png" alt="" />
                <h1 className='fw-bold  main'>Award-winning support.</h1>
                <p className='second'>Best-in-class support. We’re always here to help – here’s how to connect.</p>
            </div>
            <div className='d-flex supportboxes'>
                <div className="supportbox">
                    <center>
                    <img className='imagesupportbox' height="300px" width="300px" src="https://www.boloforms.com/_next/static/media/live-chat-support.8700dc17.png" alt="" />
                    <p className='fw-bold supporttext'>? Whatsapp chat</p>
                    <p className='supporttext'>Ask a question right now.</p>
                    <button  type="button" className=" btnsupport btn-outline">Start Chat</button>
                    </center>
                </div>
                <div className="supportbox">
                <center>
                <img className='imagesupportbox' height="300px" width="300px" src="https://www.boloforms.com/_next/static/media/support-email.d67bf660.png" alt="" />
                <p className='fw-bold supporttext '> Email ?</p>
                <p className='supporttext'>Get in touch by email.</p>
                <button  type="button" className="  btnsupport btn-outline">Write Email</button>
                </center>
                </div>
                <div className="supportbox">
                <center>
                <img className='imagesupportbox' height="300px" width="300px" src="https://www.boloforms.com/_next/static/media/helpcenter.1d93444b.png" alt="" />
                <p className='fw-bold supporttext'>Help center ?</p>
                <p className='supporttext' >In Depth Guides.</p>
                <button  type="button" className=" btnsupport btn-outline">Read Articles</button>
                </center>
                </div>
                <div className="supportbox">
                <center>
                <img className='imagesupportbox' height="300px" width="300px" src="https://www.boloforms.com/_next/static/media/book-time.934f28c8.png" alt="" />
                <p className='fw-bold supporttext'>? Google Meet</p>
                <p className='supporttext' >Guided support and Q&A</p>
                <button type="button" className="btnsupport btn-outline">Book Time</button>
                </center>
                
                </div>
            </div>
        </div>
    )
}
