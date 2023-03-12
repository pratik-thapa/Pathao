import React from 'react'

export default function Earn() {
  return (
    <>
    <div className="container">
        <div className="earn text-center lh-lg">
            <h1>Earn with your Bike and Car</h1>
            <p>Become a Rider or Captain on the highest-earning platform!</p>
            <button className='btn btn-danger fs-6 px-5 py-2'>Start Earning</button>
        </div>
    </div>
    <div className="illustration mt-5">
    <img src={require('../img/illustration.jpg')} alt="" className='w-100' />
    </div>
    </>
  )
}
