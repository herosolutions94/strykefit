import React, { useState } from "react";
import Link from "next/link";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });
import Testimonials from "../components/testimonials";

export default function Home() {
  const testi = [
    {
      id: "testi1",
      image: "/images/9.jpg",
      name: "Mickie",
      designation: "L Hotel",
      comment:
        "It was a pleasure to partner with the team at company name. The candidates they have provided me with are without question professional, experienced, reliable and I have been extremely happy with each candidate we hired through them.",
    },
    {
      id: "testi2",
      image: "/images/7.jpg",
      name: "Ali Gilbert",
      designation: "House Wife",
      comment:
        "It was a pleasure to partner with the team at company name. The candidates they have provided me with are without question professional, experienced, reliable and I have been extremely happy with each candidate we hired through them.",
    },
    {
      id: "testi3",
      image: "/images/9.jpg",
      name: "John Desoza",
      designation: "CEO-Marketing Agnecy",
      comment:
        "It was a pleasure to partner with the team at company name. The candidates they have provided me with are without question professional, experienced, reliable and I have been extremely happy with each candidate we hired through them.",
    },
  ];
  return (
    <>
      {" "}
      <section id="banner">
        <video loop muted autoplay>
          <source src="/images/banner2.mp4" type="video/mp4" />
        </video>
        <div className="bgOverlay"></div>
        <div className="flexDv">
          <div className="contain">
            <div className="text">
              <h1>WELCOME TO STRYKEFIT</h1>
              <p>UNLEASH YOUR INNER FIGHTER</p>
              <div className="btn_blk">
                <Link href="/" className="site_btn">
                  Join Us
                </Link>
                <Link href="/" className="site_btn color">
                  Book a Session
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <ul className="socialbar">
          <li>
            <a>
              <img src="images/facebook.webp"></img>
            </a>
          </li>
          <li>
            <a>
              <img src="images/twitter.webp"></img>
            </a>
          </li>
          <li>
            <a>
              <img src="images/instagram.webp"></img>
            </a>
          </li>
          <li>
            <a>
              <img src="images/youtube.webp"></img>
            </a>
          </li>
        </ul> */}
      </section>
      <section id="red_zone">
        <div className="contain">
          <div className="text">
            <h2>"UNLEASH YOUR INNER FIGHTER AND CONQUER YOUR FITNESS GOALS"</h2>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="contain">
          <div className="flex">
            <div className="col col1">
              <div className="image">
                <img src="images/about1.jpg"></img>
              </div>
            </div>
            <div className="col col2">
              <h2>EMBRACE THE FIGHTER'S SPIRIT</h2>
              <p>
                At Strykefit, we embody the fighter's spirit in everything we
                do. Our mission is to empower individuals to unleash their inner
                fighter and conquer their fitness goals. We believe in pushing
                boundaries and redefining limits, just like a true fighter.
              </p>
              <div className="btn_blk">
                <Link href="/" className="site_btn">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="server-setup">
        <div class="contain">
          <div class="sec_heading text-center">
            <h2>Professional StrykeFit built by Experienced Trainers</h2>
          </div>
          <div class="flex">
            <div class="col">
              <div class="inner">
                <div class="sm_icon">
                  <img src="images/check.png" alt="" />
                </div>
                <div class="cntnt">
                  <h3>Enhanced Mental Resilience</h3>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="inner">
                <div class="sm_icon">
                  <img src="images/check.png" alt="" />
                </div>
                <div class="cntnt">
                  <h3>Improved Physical Strength and Endurance</h3>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="inner">
                <div class="sm_icon">
                  <img src="images/check.png" alt="" />
                </div>
                <div class="cntnt">
                  <h3>Boosted Confidence and Self-Esteem</h3>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="inner">
                <div class="sm_icon">
                  <img src="images/check.png" alt="" />
                </div>
                <div class="cntnt">
                  <h3>Stress Relief and Mental Clarity</h3>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="inner">
                <div class="sm_icon">
                  <img src="images/check.png" alt="" />
                </div>
                <div class="cntnt">
                  <h3>Community and Support System</h3>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="inner">
                <div class="sm_icon">
                  <img src="images/check.png" alt="" />
                </div>
                <div class="cntnt">
                  <h3>Holistic Health and Wellness</h3>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="inner">
                <div class="sm_icon">
                  <img src="images/check.png" alt="" />
                </div>
                <div class="cntnt">
                  <h3>Goal-Oriented Training</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="choose">
        <div className="contain">
          <div className="flex">
            <div className="col col2">
              <div className="content_center">
                <h2>WHY CHOOSE US?</h2>
                <p>
                  It is a long estabas lished facts will be distracted by the
                  content looking at its layout.
                </p>
              </div>
              <div className="flex">
                <div className="col3">
                  <div className="inner">
                    <div className="icon">
                      <img src="images/c1.png"></img>
                    </div>
                    <h4>PROGRESSION</h4>
                    <p>
                      It is a long estabas lished facts will be distracted by
                      the content looking at its layout.
                    </p>
                  </div>
                </div>
                <div className="col3">
                  <div className="inner">
                    <div className="icon">
                      <img src="images/c2.png"></img>
                    </div>
                    <h4>WORKOUT</h4>
                    <p>
                      It is a long estabas lished facts will be distracted by
                      the content looking at its layout.
                    </p>
                  </div>
                </div>
                <div className="col3">
                  <div className="inner">
                    <div className="icon">
                      <img src="images/c3.png"></img>
                    </div>
                    <h4>NUTRITION</h4>
                    <p>
                      It is a long estabas lished facts will be distracted by
                      the content looking at its layout.
                    </p>
                  </div>
                </div>
                <div className="col3">
                  <div className="inner">
                    <div className="icon">
                      <img src="images/c4.png"></img>
                    </div>
                    <h4>SELF DEFENCE</h4>
                    <p>
                      It is a long estabas lished facts will be distracted by
                      the content looking at its layout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col col1">
              <div className="image">
                <img src="images/c11.jpg"></img>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* <section id="program">
        <div className="contain">
          <div className="content_center">
            <h2>OUR PROGRAMS</h2>
            <p>
              Choose from a range of dynamic online workout programs designed to
              elevate your fitness journey. Our programs are tailored to cater
              to various fitness goals, from strength and conditioning to boxing
              workouts, ensuring that you find the perfect fit for your fitness
              needs.
            </p>
          </div>
          <div className="flex">
            <div className="col1">
              <div className="inner">
                <h2>1</h2>
                <h3>PERSONAL TRAINING</h3>
              </div>
            </div>
            <div className="col1">
              <div className="inner">
                <h2>2</h2>
                <h3>BOXING WORKOUTS</h3>
              </div>
            </div>
            <div className="col1">
              <div className="inner">
                <h2>3</h2>
                <h3>STRENGTH & CONDITIONING</h3>
              </div>
            </div>
            <div className="col1">
              <div className="inner">
                <h2>4</h2>
                <h3>HIIT SESSIONS</h3>
              </div>
            </div>
            <div className="col1">
              <div className="inner">
                <h2>5</h2>
                <h3>WEIGHT MANAGEMENT</h3>
              </div>
            </div>
            <div className="col1">
              <div className="inner">
                <h2>6</h2>
                <h3>ONLINE COACHING</h3>
              </div>
            </div>
          </div>
          <div className="btn_blk">
            <Link href="/" className="site_btn">
              Explore Programs
            </Link>
          </div>
        </div>
      </section> */}
      <section id="trainer">
        <div className="contain">
          <div className="content_center">
            <h2>EXPERT TRAINERS</h2>
            <p>
              It is a long estabas lished facts will be distracted by the
              content looking at its layout.
            </p>
          </div>
          <div className="flex">
            <div className="col">
              <div className="inner">
                <div className="image">
                  <img src="images/t1.jpg"></img>
                </div>
                <div className="text">
                  <h4> Richard Steele</h4>
                  <p>Senior Trainer</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <div className="image">
                  <img src="images/t2.jpg"></img>
                </div>
                <div className="text">
                  <h4> Richard Steele</h4>
                  <p>Senior Trainer</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <div className="image">
                  <img src="images/t3.jpg"></img>
                </div>
                <div className="text">
                  <h4> Richard Steele</h4>
                  <p>Senior Trainer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="video">
        <div className="contain">
          <div className="outer">
            <div className="s1"></div>
            <div className="s2"></div>
            <div className="s3"></div>
            <div className="inner">
              <a href="">
                <img src="images/play.png"></img>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial_sec">
        <div className="contain">
          <div className="content_center">
            <h2>What Our Clients Say</h2>
          </div>
          <Testimonials data={testi} />
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
      <section id="partner">
        <div className="contain">
          <div className="flex">
            <div className="col">
              <div className="image">
                <img src="images/brand-1.png"></img>
              </div>
            </div>
            <div className="col">
              <div className="image">
                <img src="images/brand-2.png"></img>
              </div>
            </div>
            <div className="col">
              <div className="image">
                <img src="images/brand-4.png"></img>
              </div>
            </div>
            <div className="col">
              <div className="image">
                <img src="images/brand-3.png"></img>
              </div>
            </div>
            <div className="col">
              <div className="image">
                <img src="images/brand-5.png"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
