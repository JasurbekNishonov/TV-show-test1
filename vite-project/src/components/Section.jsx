// eslint-disable-next-line no-unused-vars
import React from 'react'
import img27 from "../assets/images/Big.Buck.Bunny.-.Opening 1.png"
import img28 from "../assets/images/2021 2.png"



function Header() {
  return (
    <>
    <section>
      <div className="container">
          <div className="row row6">
          <div className="col-6">
              <img src={img27} id='bunny' alt="" />
            </div>
            <div className="col-6">
              <img src={img28} id='year2021' alt="" />
              <h2>Coming Soon...</h2> 
            </div>
          </div>
      </div>
      <div className="container">
        <div className="row row7">
          <h3>Are You New Here ?<br /> Don’t wait, Register Now. </h3>
          <button className='uniqueBtn1'>Register Now</button>
        </div>
      </div>
    </section>
    </>
  )
}

export default Header