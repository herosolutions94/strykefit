import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {" "}
      <section id="smallbanner">
        <div className="contain">
          <div className="text">
            <h1>Services</h1>
          </div>
        </div>
      </section>
      <section id="servcies">
        <div className="contain">
          <div className="content_center">
            <h2>Our Classes</h2>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
          <div className="flex">
            <div className="col">
              <div className="inner">
                <div className="image">
                  <img src="images/s1.jpeg"></img>
                </div>
                <h4>Personal Training</h4>
                <p>Tailored fitness coaching for your ultimate goals</p>
                <Link className="link" href="">
                  Book Now
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <div className="image">
                  <img src="images/s2.jpg"></img>
                </div>
                <h4>Personal Training</h4>
                <p>Tailored fitness coaching for your ultimate goals</p>
                <Link className="link" href="">
                  Book Now
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <div className="image">
                  <img src="images/s3.jpg"></img>
                </div>
                <h4>Personal Training</h4>
                <p>Tailored fitness coaching for your ultimate goals</p>
                <Link className="link" href="">
                  Book Now
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <div className="image">
                  <img src="images/s4.jpg"></img>
                </div>
                <h4>Personal Training</h4>
                <p>Tailored fitness coaching for your ultimate goals</p>
                <Link className="link" href="">
                  Book Now
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <div className="image">
                  <img src="/images/s5.jpg"></img>
                </div>
                <h4>Personal Training</h4>
                <p>Tailored fitness coaching for your ultimate goals</p>
                <Link className="link" href="">
                  Book Now
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <div className="image">
                  <img src="images/s6.jpg"></img>
                </div>
                <h4>Personal Training</h4>
                <p>Tailored fitness coaching for your ultimate goals</p>
                <Link className="link" href="">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pricing_sec">
        <div className="contain">
          <div className="content_center">
            <div className="sec_heaing">
              <h2>Choose Your Pricing Plan</h2>
            </div>
            <p>
              By offering a range of pricing plans and flexible billing options,
              our platform ensures that SMEs and self-employed individuals can
              find a plan that fits their budget and business needs.
            </p>
          </div>
          <div className="flex">
            <div className="col">
              <div className="inner">
                {/* <div className="icon">
                  <div className="inner_icon">
                
                  </div>
                </div> */}
                <h4>Standard</h4>
                <p>For the basics</p>
                <h1>$15</h1>
                <ul>
                  <li>All Free Plan features</li>
                  <li>Bank account integration</li>
                  <li>Customizable financial reports</li>
                  <li>Multi-currency support</li>
                  <li>Live chat support</li>
                </ul>
                <div className="btn_blk text-center">
                  <Link href="" className="site_btn color2">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <h4>Unlimited</h4>
                <p>For the professionals</p>
                <h1>$99</h1>
                <ul>
                  <li>All Free Plan features</li>
                  <li>Bank account integration</li>
                  <li>Customizable financial reports</li>
                  <li>Multi-currency support</li>
                  <li>Live chat support</li>
                </ul>
                <div className="btn_blk text-center">
                  <Link href="" className="site_btn color2">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <h4>Premium</h4>
                <p>For small team</p>
                <h1>$55</h1>
                <ul>
                  <li>All Free Plan features</li>
                  <li>Bank account integration</li>
                  <li>Customizable financial reports</li>
                  <li>Multi-currency support</li>
                  <li>Live chat support</li>
                </ul>
                <div className="btn_blk text-center">
                  <Link href="" className="site_btn color2">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="join_now">
        <div className="contain">
          <div className="flex">
            <div className="colL">
              <div className="image">
                <img src="/images/jj.webp" alt="" />
              </div>
            </div>
            <div className="colR">
              <div className="inner">
                <div className="sec_heading">
                  <h2>JOIN OUR TRAINING CENTER</h2>
                  <p>
                    We believe in transparency, and we're committed to providing
                    you with a platform you can trust. Your convenience and
                    peace of mind are our top priorities.
                  </p>
                </div>

                <ul>
                  <li>
                    Strykefit is designed with your needs in mind, offering a
                    user-friendly experience.
                  </li>
                  <li>
                    Enjoy the convenience of finding, booking, and communicating
                    with service providers in one place.
                  </li>
                </ul>
                <div className="mini_br"></div>
                <div className="btn_blk">
                  <Link href="" className="site_btn">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
