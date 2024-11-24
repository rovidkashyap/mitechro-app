import React, { useState } from 'react'
import '../PricingSection/_pricing.css';
import { backgroundImage } from '../../assets/img/pricing/pricing-bg.jpg';

const Pricing = () => {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="pricing" className="service-section">
      <div className="container">
        {/* Headings */}
        <div className="service-headings">
          <h3 className="small-heading">Pricing Plans</h3>
          <h1 className="large-heading">
            Our Best Affordable Pricing Plan<br />
            Choose Your Plans
          </h1>
        </div>
        <div class="container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
          <div class="card card_red text-center">
            <div class="title">
              <i class="fa fa-paper-plane" aria-hidden="true"></i>
              <h2>Basic</h2>
            </div>
            <div class="price">
              <h4><sup>Rs.</sup>5000</h4>
            </div>
            <div class="option">
              <ul>
                <li><i class="fa fa-check" aria-hidden="true"></i>5 Pages</li>
                <li><i class="fa fa-check" aria-hidden="true"></i>Static Design</li>
                <li><i class="fa fa-check" aria-hidden="true"></i>Free Logo</li>
                <li><i class="fa fa-times" aria-hidden="true"></i>SEO Optimized</li>
                </ul>
            </div>
            <a href="#">Buy Now</a>
          </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card card_violet text-center">
                            <div class="title">
                                <i class="fa fa-plane" aria-hidden="true"></i>
                                <h2>Startup</h2>
                            </div>
                            <div class="price">
                                <h4><sup>Rs.</sup>15000</h4>
                            </div>
                            <div class="option">
                                <ul>
                                    <li><i class="fa fa-check" aria-hidden="true"></i>10 Pages Static</li>
                                    <li><i class="fa fa-check" aria-hidden="true"></i>Free Graphics & Logo</li>
                                    <li><i class="fa fa-check" aria-hidden="true"></i>SEO Optimized</li>
                                    <li><i class="fa fa-times" aria-hidden="true"></i>No Database</li>
                                </ul>
                            </div>
                            <a href="#">Buy Now</a>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card card_three text-center">
                            <div class="title">
                                <i class="fa fa-rocket" aria-hidden="true"></i>
                                <h2>Business</h2>
                            </div>
                            <div class="price">
                                <h4><sup>Rs.</sup>20000</h4>
                            </div>
                            <div class="option">
                                <ul>
                                    <li><i class="fa fa-check" aria-hidden="true"></i>15 Pages</li>
                                    <li><i class="fa fa-check" aria-hidden="true"></i>Dynamic Design</li>
                                    <li><i class="fa fa-check" aria-hidden="true"></i>SEO Optimized</li>
                                    <li><i class="fa fa-check" aria-hidden="true"></i>Database & Free Logo</li>
                                </ul>
                            </div>
                            <a href="#">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing