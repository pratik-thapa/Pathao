import React from 'react'

export default function Banner() {
    return (
        <>
            <div className="banner position-relative">
                <div className="container">
                    <div className="text position-absolute">
                        <h1>#1 Platform for  <br /> Ride & Food</h1>
                        <p className='mt-3'>Get to your destination safely and on time with Pathao Rides. Let Pathao Food indulge you in a yummy experience!</p>
                        <div className="buttons">
                            <button className='btn btn-danger py-2 px-4 mt-5 mb-4 fs-5'> Earn with Pathao</button>
                            <button className='btn2 py-2 px-4 fs-5 '> Download App</button>
                        </div>

                    </div>
                    <div className="tag d-flex  justify-content-between p-5">
                        <div className="one">
                            <h3>3 Million+</h3>
                            <p>App Downloads</p>
                        </div>
                        <div className="one">
                            <h3> 150,000+</h3>
                            <p>Daily Rides/Deliveries</p>
                        </div>
                        <div className="one">
                            <h3>5,000,000+</h3>
                            <p>Lives impacted</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
