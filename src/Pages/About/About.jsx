import React from "react";
import "./About.css";
import Navbar from "../../Components/Navbar/Navbar";
import aboutbg from "../../Assets/blueMultiverse.jpg";
import comp1 from "../../Assets/comp1.jpg";
import flaming from "../../Assets/flaming-circle.gif";
const About = () => {
  return (
    <>
      <div
        className="w-full h-full  min-h-screen bg-center flex justify-center items-center  bg-fixed bg-cover"
        style={{ backgroundImage: `url(${aboutbg})` }}
      >
        <div className="w-full  min-h-screen bg-black bg-opacity-35  ">
          <Navbar />
          <div className=" w-full zoom  p-7  flex flex-wrap  justify-evenly ">
            <div
              className="  min-h-56  bg-center bg-cover hover:rounded-xl hover:h-64 hover:w-64  rounded-full w-56 "
              style={{ backgroundImage: `url(${comp1})` }}
            >
              <img
                className="rotate-animation rounded-full hover:opacity-0 hover:h-64 hover:w-64 hover:transform-none w-56 opacity-65"
                src={flaming}
                alt=""
              />
            </div>
            <div
              className="  h-56  bg-center bg-cover hover:rounded-xl hover:h-64 hover:w-64  rounded-full  w-56 "
              style={{ backgroundImage: `url(${comp1})` }}
            >
              <img
                className="rotate-animation rounded-full hover:opacity-0 hover:transform-none w-56 opacity-65"
                src={flaming}
                alt=""
              />
            </div>{" "}
            <div
              className="  h-56  bg-center bg-cover hover:rounded-xl hover:h-64 hover:w-64  rounded-full w-56 "
              style={{ backgroundImage: `url(${comp1})` }}
            >
              <img
                className="rotate-animation rounded-full hover:opacity-0 hover:transform-none w-56 opacity-65"
                src={flaming}
                alt=""
              />
            </div>{" "}
            <div
              className="  h-56  bg-center bg-cover hover:rounded-xl hover:h-64 hover:w-64 rounded-full w-56 "
              style={{ backgroundImage: `url(${comp1})` }}
            >
              <img
                className="rotate-animation rounded-full hover:opacity-0 hover:transform-none w-56 opacity-65"
                src={flaming}
                alt=""
              />
            </div>
            <div
              className="  h-56  bg-center bg-cover hover:rounded-xl hover:h-64 hover:w-64  rounded-full w-56 "
              style={{ backgroundImage: `url(${comp1})` }}
            >
              <img
                className="rotate-animation rounded-full hover:opacity-0 hover:transform-none w-56 opacity-65"
                src={flaming}
                alt=""
              />
            </div>{" "}
          </div>
          <div className=" w-full h-fit text-center justify-center flex">
           <p className="rounded-xl bg-black p-3 mb-3 bg-opacity-40 font-avenger text-yellow-500 text-3xl gap-3">MULTIVERSE <p>shadow matters</p> </p>
          </div>
          <div className=" zoom  w-full h-1/2 flex justify-center items-center">
            <p className="about-text-container text-black border-green-500 border  rounded-lg bg-green-600 p-5 hover:bg-opacity-100 bg-opacity-50 text-2xl h-fit text-justify leading-relaxed font-avenger tracking-widest w-3/4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Cupiditate mollitia inventore quod magni cum quibusdam libero
              earum eius quam temporibus fugiat consequatur necessitatibus
              expedita porro, ratione veritatis provident incidunt repellat
              laborum reprehenderit est molestiae? Quod minus ad esse, nobis
              amet, optio neque nam perspiciatis, blanditiis facilis id
              dignissimos alias fuga consectetur quo dolor molestias beatae.
              Iste ea sequi voluptates quo nulla quam tempore culpa magni
              dolores consequuntur quidem eaque placeat facere inventore eum
              adipisci ullam impedit odit sunt, voluptas asperiores ducimus
              cumque rerum ratione. Repudiandae voluptate sed ex voluptatum
              aliquam libero assumenda in aliquid id. Nobis ad ullam ab magni.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
