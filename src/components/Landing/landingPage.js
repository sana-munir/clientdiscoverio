import React, { useEffect, useState } from 'react';
import './styles.css';
import bg4 from '../../assets/bg-4.mp4';
import bg2 from '../../assets/bg-2.png';
import bg3 from '../../assets/bg-3.png';
import grid1 from '../../assets/grid-1.jpg';
import grid2 from '../../assets/grid-2.jpg';
import grid3 from '../../assets/grid-3.jpg';
import grid4 from '../../assets/grid-4.jpg';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" >
      <Typography variant='h6' className="footer-button" component={Link} to={'/about'} style={{textDecoration:'none'}} >
        About
      </Typography>
      <Typography variant='h6' className="footer-button" component={Link} to={'/posts'} style={{textDecoration:'none'}} >
        Posts
      </Typography>
      <Typography variant='h6' className="footer-button" component={Link} to={'/contact'} style={{textDecoration:'none'}} >
        Contact
      </Typography>
      <Typography variant='h6' className="footer-button" component={Link} to={'/admin/login'} style={{textDecoration:'none'}} >
        Admin
      </Typography>
      <Typography variant="h6" style={{ color:"lightblue" }}>
      {"Copyright © "}
        Discoverio{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
    </footer>
  );
};

const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Adding event listener for scroll

  const calculateFontSize = () => 100 + scrollY * 0.5;
  const calculateTranslateY = (multiplier, offset = 0) => scrollY * multiplier + offset;
  const calculateOpacity = () => {
    const opacity = scrollY * 0.001;
    return opacity >= 0 && opacity <= 1 ? opacity : undefined;
  };

  return (
    <div className='global1'>
    <div className='body1'>
      <div className="parallax__container">
        <video
          src={bg4}
          autoPlay
          loop
          muted
          style={{ width: '100%' }} // Adjust the style as needed
        />
        <img id="bg-2" src={bg2} alt="parallax" style={{ top: `-${scrollY * 0.5}px` , width: '100%' , display: 'block'}} />
        <h1 id="title" style={{ fontSize: `${calculateFontSize()}px` }}>Welcome!</h1>
        <img id="bg-3" src={bg3} alt="parallax" style={{ top: `-${scrollY}px`, transform: `scale(${1 + scrollY * 0.001})`, width: '100%' , display: 'block' }} />
      </div>

      <section className="about">
        <div className="image__gallary">
          <div className="image__card" style={{ transform: `translateY(${calculateTranslateY(-0.5, 400)}px)`, opacity: calculateOpacity() }}>
            <img src={grid1} alt="grid" style={{width: '100%' , display: 'block'}} />
          </div>
          <div className="image__card" style={{ transform: `translateY(${calculateTranslateY(0.1, -50)}px)`, opacity: calculateOpacity() }}>
            <img src={grid2} alt="grid" style={{width: '100%' , display: 'block'}} />
          </div>
          <div className="image__card" style={{ transform: `translateY(${calculateTranslateY(-0.1, 100)}px)`, opacity: calculateOpacity() }}>
            <img src={grid3} alt="grid" style={{width: '100%' , display: 'block'}} />
          </div>
          <div className="image__card" style={{ transform: `translateY(${calculateTranslateY(0.2, -125)}px)`, opacity: calculateOpacity() }}>
            <img src={grid4} alt="grid" style={{width: '100%' , display: 'block'}} />
          </div>
        </div>

        <div className="details">
        "Discoverio is your gateway to exploration and adventure. Dive into a world of captivating stories, unique experiences, and hidden gems. Whether you're seeking travel inspiration or connecting with fellow explorers, Discoverio has something for everyone."
        </div>
        
        <div className="footer__btn">
        <button className='learn__more' onClick={() => navigate('/posts')}>Learn More</button>
        </div>
      </section>
      <Footer />
    </div>
    </div>
  );
};

export default LandingPage;


/*import "./styles.css";
import Plx from "react-plx";

const LandingPage = () => {
  return (
    <div>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 1.6,
                property: "scale"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 100
        }}
      >
        <img style={{ width: "100%" }} src="bg.png" alt="foreground" />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: "scale"
              }
            ]
          }
        ]}
        style={{  
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%"
        }}
      >
        <img style={{ width: "100%" }} src="background1.jpg" alt="background" />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "26vw",
          width: "100%"
        }}
      >
        <img
          style={{
            width: "30vw"
          }}
          src="/text-img.webp"
          alt="Goonies"
        />
      </Plx>
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 200,
          paddingTop: "56%",
          height: "400vh",
          width: "100%"
        }}
      >
        <div
          style={{
            background: "#000",
            height: "100%"
          }}
        ></div>
      </div>
    </div>
  );
};
export default LandingPage;*/