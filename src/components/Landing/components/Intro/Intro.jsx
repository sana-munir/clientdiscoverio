import React from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import world from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const navigate = useNavigate();
  return (
    <div className="Intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hey! Welcome to</span>
          <span>Discoverio</span>
          <span>
            <h3>
          Discoverio is your gateway to exploration and adventure. 
          Dive into a world of captivating stories, unique experiences, 
          and hidden gems. Whether you're seeking travel inspiration or 
          connecting with fellow explorers, Discoverio has something for everyone.
          </h3>
          </span>
        </div>
          <button onClick={() => navigate('/')} className="button i-button" style={{marginTop:'5px', paddingBottom:'70px',paddingTop:'0px', height:'30px', alignItems:'center', justifyContent:'center' }}><h3>Explore Now!</h3></button>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={world} alt="" />

        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Share" text2="Content" />
        </motion.div>

        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >

          <FloatinDiv img={thumbup} text1="Engage" text2="With Posts" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
