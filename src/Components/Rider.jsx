import React from 'react'

export default function Rider() {
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-evenly column-gap-3 p-5 rider">
            <div className="rider-profile">
                <img src={require('../img/rider.jpg')} alt="" />
            </div>
            <div className="rider-info mt-5">
            <h1 className='lh-lg'>Earn with your Bike & Car </h1>
            <ul className='lh-lg fs-5'>
                <li>Earn with your Bike & Car</li>
                <li>Scope to earn more with bonus.</li>
                <li>Get your payment on time with Pathao</li>
            </ul>
            <button className='btn btn-danger mt-2'>Become a Rider </button>
            </div>
        </div>
      </div>
    </div>
  )
}
