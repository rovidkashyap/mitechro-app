import React from 'react'
import bannerBackground from '../../assets/img/Banner.jpg';
import './_banner.css';

const Banner = () => {
  return (
    <section className="banner"
      style={{ backgroundImage: `url(${bannerBackground})` }}>
      <div className="banner-content">
        <h3 cassName="small-heading">
          IT Solution Agency in India
        </h3>
        <h1 className="big-heading">
          Innovate, Elevate, Dominate - New Gateway for Digital India
        </h1>
        <p className="description">
          At MITechRo Solutions, 'MI' represents the Modern India and 'Tech' represent the Technology we deliver cutting-edge software services that help businesses scale and succeed in the digital era. 
          Let's collaborate to transform your ideas into reality.
        </p>
      </div>
    </section>
  )
}

export default Banner