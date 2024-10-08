import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";


const Contact = () => {
const[isFormProcessing, setiIsFormProcessing] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm();

  const handleContactFormSubmit = async (data) => {
    setiIsFormProcessing(true);
   // sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

console.log(data);
   
   const htmlContent = `
   <h2>Contact Query</h2>
   <p><strong>Name:</strong> ${data.name}</p>
   <p><strong>Email:</strong> ${data.email}</p>
   <p><strong>Phone:</strong> ${data.phone}</p>
   <p><strong>Subject:</strong> ${data.subject}</p>
   <p><strong>Message:</strong> ${data.msg}</p>
 `;


 try{

  const response = await fetch('/api/sendEmail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to: 'justinlu10@gmail.com',
      subject: 'Contact form query',
      html: htmlContent,
    }),
  });

  const datanew = await response.json();
  toast.success(datanew.message);


 } catch {
  toast.success(datanew.message);
 }

  setiIsFormProcessing(false);
  };

  

  return (
    <>
    <Toaster position="bottom-right" />
      <main>
        <section className="contact_us">
          <div className="contain">
            <div className="flex">
              <div className="cols col1">
                <div className="sec_heading">
                  <h2>VISIT US</h2>
                  <h4>STRYKEFIT FITNESS STUDIO </h4>
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
                    {/* <li>
                      <Link href="/" target="_blank" rel="noreferrer">
                        <img src="/images/facebook.svg" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/" target="_blank" rel="noreferrer">
                        <img src="/images/twitter.svg" alt="" />
                      </Link>
                    </li> */}
                    <li>
                      <Link href="/" target="_blank" rel="noreferrer">
                        <img src="/images/instagram.svg" alt="" />
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/" target="_blank" rel="noreferrer">
                        <img src="/images/linkedin.svg" alt="" />
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="cols col2">
                <div className="inner">
                  <h3>GET IN TOUCH</h3>
                  <form method="POST" onSubmit={handleSubmit(handleContactFormSubmit)}>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="txtGrp">
                          <input
                            className="input"
                            type="text"
                            placeholder="Name"
                            {...register("name", {
                          required: "Name is required.",
                          minLength: {
                            value: 2,
                            message: "Name should contains atleast 2 letters.",
                          },
                        })}
                          />
                          <div className="validation-error" style={{ color: "red" }}>
                      {errors.name?.message}
                    </div>
                        </div>
                        
                      </div>
                      <div className="col-md-12">
                        <div className="txtGrp">
                          <input
                            className="input"
                            type="text"
                            placeholder="Email"
                            {...register("email", {
                          required: "Email is required.",
                          pattern: {
                            value:
                              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "Please enter a valid email",
                          },
                        })}
                          />
                          <div className="validation-error" style={{ color: "red" }}>
                      {errors.email?.message}
                    </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="txtGrp">
                          <input
                            className="input"
                            type="text"
                            placeholder="Phone"
                            {...register("phone", {
                          required: "Phone Number is Required",
                        })}
                          />
                          <div className="validation-error" style={{ color: "red" }}>
                      {errors.phone?.message}
                    </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="txtGrp">
                          <input
                            className="input"
                            type="text"
                            placeholder="Subject"
                            {...register("subject", {
                          required: "Subject is Required",
                        })}
                          />
                          <div className="validation-error" style={{ color: "red" }}>
                      {errors.subject?.message}
                    </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="txtGrp">
                          <textarea
                            className="input"
                            placeholder="Message" {...register("msg", {
                          required: "Message is required.",
                        })}></textarea>
                        <div className="validation-error" style={{ color: "red" }}>
                      {errors.msg?.message}
                    </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="cta">
                          <button type="submit" disabled={isFormProcessing} className="site_btn">
                            Submit {isFormProcessing && (
                    <i
                      className={isFormProcessing ? "spinner" : "spinnerHidden"}
                    ></i>
                  )}
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
