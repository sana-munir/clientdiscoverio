import React from "react";
import "./Places.css";
import Card from "../Card/Card";
import Grid4 from '../../../../assets/grid-1.jpg';
import Grid2 from '../../../../assets/grid-2.jpg';
import Grid3 from '../../../../assets/grid-3.jpg';
import Grid1 from '../../../../assets/grid-4.jpg';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const Places = () => {
  const navigate = useNavigate();
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      <div className="awesome">
        <span>Explore the</span>
        <span>World</span>
        <spane>
          <h3>
        The world is a beautiful tapestry of breathtaking destinations and 
          <br />
          unforgettable memories, and Discoverio brings this beauty to your fingertips, 
          <br />
          allowing travelers to share their journeys and explorers to discover and 
          <br />
          engage with every kind of beauty the world has to offer.
          </h3>
        </spane>
         <button onClick={() => navigate('/auth')} className="button s-button" style={{marginTop:'5px', paddingBottom:'70px',paddingTop:'0px', height:'30px', alignItems:'center', justifyContent:'center' }}><h3>Register Now!</h3></button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      <div className="cards">

        <motion.div
          initial={{ left: "15rem", top: "-4rem" }}
          whileInView={{ left: "15rem", top: "7rem" }}
          transition={transition}
        >
          <Card
            grid={Grid1}
          />
        </motion.div>

        <motion.div
          initial={{ left: "-6rem", top: "12rem" }}
          whileInView={{ left: "2rem", top: "12rem" }}
          transition={transition}
        >
          <Card
            grid={Grid2}
          />
        </motion.div>

        <motion.div
          initial={{ top: "12rem", left: "35rem" }}
          whileInView={{ left: "28rem", top: "12rem" }}
          transition={transition}
        >
          <Card
            grid={Grid3}
          />
        </motion.div>

        <motion.div
          initial={{ top: "35rem", left: "15rem" }}
          whileInView={{ left: "15rem", top: "25rem" }}
          transition={transition}
        >
          <Card
            grid={Grid4}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Places;
