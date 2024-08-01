import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <>
      <main>
        <section className="contact_us">
          <div className="contain">
            <div className="flex">
              <div className="cols col1">
                <div className="sec_heading">
                  <h2>VISIT US</h2>
                  <h4>STRYKEFIT FITNESS STUDIO</h4>
                </div>
                <div className="sec_content">
                  <ul>
                    <li>
                      <strong>Address: </strong>123 Main Street San Diego, CA
                      92101
                    </li>
                    <li>
                      <Link href="">
                        <strong>Phone: </strong> 123-456-7890
                      </Link>
                    </li>
                    <li>
                      <Link href="">
                        <strong>Email: </strong>info@strykefit.com
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="socials">
                  <ul>
                    <li>
                      <Link href="/" target="_blank" rel="noreferrer">
                        <img src="/images/facebook.svg" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/" target="_blank" rel="noreferrer">
                        <img src="/images/twitter.svg" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/" target="_blank" rel="noreferrer">
                        <img src="/images/instagram.svg" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/" target="_blank" rel="noreferrer">
                        <img src="/images/linkedin.svg" alt="" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="cols col2">
                <div className="inner">
                  <h3>GET IN TOUCH</h3>
                  <form>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="txtGrp">
                          <input
                            className="input"
                            type="text"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="txtGrp">
                          <input
                            className="input"
                            type="text"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="txtGrp">
                          <input
                            className="input"
                            type="text"
                            placeholder="Phone"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="txtGrp">
                          <input
                            className="input"
                            type="text"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="txtGrp">
                          <textarea
                            className="input"
                            placeholder="Message"></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="cta">
                          <button type="button" className="site_btn">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
