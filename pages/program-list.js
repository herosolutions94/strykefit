import Link from "next/link";
import React from "react";

const ProgramList = () => {
  return (
    <>
      <main>
        <section className="sec_program">
          <div className="contain">
            <div className="sec_heading">
              <h2>CHOOSE YOUR FITNESS PROGRAM</h2>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
            </div>
            <div className="flex">
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <img src="images/p-1.jpg" alt="" />
                  </div>
                  <div className="lower-content">
                    <h3>
                      Combat Fitness Mastery: Fusion of Boxing and Personal
                    </h3>
                    <p>Free</p>
                    <div className="cta">
                      <Link href="" className="site_btn">
                        Join
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <img src="images/p-2.jpg" alt="" />
                  </div>
                  <div className="lower-content">
                    <h3>
                      Combat Fitness Mastery: Fusion of Boxing and Personal
                    </h3>
                    <p>Free</p>
                    <div className="cta">
                      <Link href="" className="site_btn">
                        Join
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <img src="images/p-3.jpg" alt="" />
                  </div>
                  <div className="lower-content">
                    <h3>
                      Combat Fitness Mastery: Fusion of Boxing and Personal
                    </h3>
                    <p>Free</p>
                    <div className="cta">
                      <Link href="" className="site_btn">
                        Join
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <img src="images/p-4.jpg" alt="" />
                  </div>
                  <div className="lower-content">
                    <h3>
                      Combat Fitness Mastery: Fusion of Boxing and Personal
                    </h3>
                    <p>Free</p>
                    <div className="cta">
                      <Link href="" className="site_btn">
                        Join
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <img src="images/p-5.jpg" alt="" />
                  </div>
                  <div className="lower-content">
                    <h3>
                      Combat Fitness Mastery: Fusion of Boxing and Personal
                    </h3>
                    <p>Free</p>
                    <div className="cta">
                      <Link href="" className="site_btn">
                        Join
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <img src="images/p-6.jpg" alt="" />
                  </div>
                  <div className="lower-content">
                    <h3>
                      Combat Fitness Mastery: Fusion of Boxing and Personal
                    </h3>
                    <p>Free</p>
                    <div className="cta">
                      <Link href="" className="site_btn">
                        Join
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProgramList;
