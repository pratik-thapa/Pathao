import React from 'react'

export default function Download() {
    return (
        <div>
            <div className="container">
                <div className="download-box d-flex justify-content-evenly column-gap-3 mb-5">
                    <div className="first">
                        <div className="download-info">
                            <h1 className='mt-5'>Download our app</h1>
                            <p>Download now & avail our service through the app</p>
                        </div>
                        <div className="mt-2 download-button">
                            <h4 className='lh-lg fs-5'>Pathao User App</h4>
                            <a href="https://play.google.com/store/apps/details?id=com.pathao.user&hl=en&pli=1"><img src={require('../img/Google-Play.png')} alt="" /> </a>  
                            <a href="https://apps.apple.com/us/app/pathao/id1201700952" target="blank">
                                <img src={require('../img/App-Store.png')} alt="" />
                            </a>
                        </div>
                        <div className="mt-2 download-button">
                            <h4 className='lh-lg fs-5'>Pathao Drive App</h4>
                            <img src={require('../img/Google-Play.png')}alt="" />
                        </div>
                    </div>
                    <div className="second">
                        <img src={require('../img/mobile.jpg')} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}
