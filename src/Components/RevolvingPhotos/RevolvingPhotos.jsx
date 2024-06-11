import React from 'react'
import "./RevolvingPhotos.css"
import r1 from "../../Assets/comp1.jpg";
import r2 from "../../Assets/comp2.jpg";
import r3 from "../../Assets/comp3.jpg";
import r4 from "../../Assets/comp4.jpg";
import r5 from "../../Assets/comp5.jpg";
import r6 from "../../Assets/comp6.jpg";
import r7 from "../../Assets/comp7.jpg";
import r8 from "../../Assets/comp8.jpg";
import r9 from "../../Assets/comp5.jpg";
import r10 from "../../Assets/comp10.jpg";
const RevolvingPhotos = () => {
  return (
    <div className="w-1/2 flex justify-center items-center">
        <div className="box">
          <span style={{ "--i": 1 }}><img src={r1} alt="image1" /></span>
          <span style={{ "--i": 2 }}><img src={r2} alt="image2" /></span>
          <span style={{ "--i": 3 }}><img src={r3} alt="image3" /></span>
          <span style={{ "--i": 4 }}><img src={r4} alt="image4" /></span>
          <span style={{ "--i": 5 }}><img src={r5} alt="image5" /></span>
          <span style={{ "--i": 6 }}><img src={r6} alt="image6" /></span>
          <span style={{ "--i": 7 }}><img src={r7} alt="image7" /></span>
          <span style={{ "--i": 8 }}><img src={r8} alt="image8" /></span>
          <span style={{ "--i": 9 }}><img src={r9} alt="image9" /></span>
          <span style={{ "--i": 10 }}><img src={r10} alt="image10" /></span>
        </div>
      </div>
  )
}

export default RevolvingPhotos
