import React, { useContext } from "react";
import "./Works.css";
import Pinterest from "../../img/pinterest.png";
import My from "../../img/my.jpg";
import Trip from "../../img/trip.png";
import insta from "../../img/insta.png";
import Facebook from "../../img/Facebook.png";
import { motion } from "framer-motion";
const Works = () => {

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span>
            Not Satisfied With These?
          </span>
          <span>You are at the right place!</span>
          <spane>
            <h3>
          Discoverio stands out from existing travel platforms by offering a seamless
            <br />
            blend of personalized destination sharing and interactive engagement,
            <br />
            empowering travelers to not only explore but also deeply connect
            <br />
            with the world's beauty through authentic, user-generated content.
          </h3>
          </spane>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Pinterest} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={My} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Trip} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={insta} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
