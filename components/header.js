import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const ToggleAction = () => {
    setToggle(!toggle);
  };
  const [userDrop, setUserDrop] = useState(false);
  const ToggleUserDrop = () => {
    setUserDrop(!userDrop);
  };
  return (
    <header>
      <div className="contain">
        <div className="logoflx">
          <h3>StrykeFit</h3>
          <div className="logo">
            <Link href="/">
              <img src="/images/logo.svg" alt="" />
            </Link>
          </div>
        </div>
        <div
          className={toggle ? "toggle active" : "toggle"}
          onClick={ToggleAction}>
          <span></span>
        </div>
        <nav id="nav" className={toggle ? "active" : ""}>
          <ul>
            <li>
              <Link href="/" onClick={ToggleAction}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={ToggleAction}>
                About
              </Link>
            </li>
            <li>
              <Link href="/services" onClick={ToggleAction}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/program-list" onClick={ToggleAction}>
                Program List
              </Link>
            </li>
            <li>
              <Link href="/Book-now" onClick={ToggleAction}>
                Book Now
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={ToggleAction}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li className="btn_blk">
              <Link href="/signup" className="site_btn">
                Register
              </Link>
            </li>
          </ul>
        </nav>

        <div className="clearfix"></div>
      </div>
    </header>
  );
}
