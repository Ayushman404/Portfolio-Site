import { useState, useRef } from "react";
import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Contact() {
  const [formData, setFormData] = useState({name: "", email: "", message: ""})
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef(null);
  const headRef = useRef(null);
  const inputsRef = useRef([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [result, setResult] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted((prev)=> !prev);
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_FORM_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  useGSAP(() => {
    gsap.from(containerRef.current, {
      opacity: 0.8,
      scale: 0.4,
      y: 100,
      duration: 1,
      ease: "power3.out",
      scrollTrigger:{
        trigger: headRef.current,
        scroller: window,
        start: "top 95%",
        end: "top 80%",
        scrub: 2,
      }
    });

    gsap.from(headRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.5,
      ease: "power2.out",
      
    });
  }, []);

  return (
    <div id="contact" className="min-h-screen bg-secondary-bg flex items-center justify-center px-4 py-10 sm:py-16">
      <div
        ref = {containerRef}
        className="w-full max-w-5xl bg-primary-bg/40 rounded-3xl shadow-xl p-6 sm:p-10"
      >
        <h2 ref={headRef} className="text-3xl sm:text-4xl font-bold text-center text-primary-text mb-10">
          Let's Connect!
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 text-primary-text text-base sm:text-lg">
            <div className="flex items-center space-x-4 transition-transform hover:scale-105">
              <FaEnvelope className="text-2xl" />
              <span>ayushmankumar790333@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4 transition-transform hover:scale-105">
              <FaPhoneAlt className="text-2xl" />
              <span>+91 9905000603</span>
            </div>
            <div className="flex items-center space-x-4 transition-transform hover:scale-105">
              <FaGithub className="text-2xl" />
              <a
                href="https://github.com/Ayushman404"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                  Github/Ayushman
              </a>
            </div>
            <div className="flex items-center space-x-4 transition-transform hover:scale-105">
              <FaLinkedin className="text-2xl" />
              <a
                href="https://www.linkedin.com/in/ayushman-kumar-116aa7328/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn/Ayushman
              </a>
            </div>
            <p className="mt-6 text-sm text-secondary-text">
              Feel free to reach out for collaboration, freelance projects, or just to say hi!
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 justify-center text-secondary-text">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              ref={(el) => (inputsRef.current[0] = el)}
              className="w-full px-4 py-3 rounded-xl border border-primary-text/50 focus:ring-2 focus:ring-primary-text/70 outline-none transition-transform duration-200 focus:scale-[1.01] placeholder:text-secondary-text/30"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              ref={(el) => (inputsRef.current[1] = el)}
              className="w-full px-4 py-3 rounded-xl border border-primary-text/50 focus:ring-2 focus:ring-primary-text/70 outline-none transition-transform duration-200 focus:scale-[1.01]  placeholder:text-secondary-text/30"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              ref={(el) => (inputsRef.current[2] = el)}
              className="w-full px-4 py-3 rounded-xl border border-primary-text/50 focus:ring-2 focus:ring-primary-text/70 outline-none resize-none transition-transform duration-200 focus:scale-[1.01] placeholder:text-secondary-text/30"
            ></textarea>
            <div className="pt-2">
              <button
                type="submit"
                className="bg-primary-text/80 hover:bg-primary-text/90 text-white px-6 py-3 rounded-xl w-full font-semibold transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                Send Message
              </button>
              {submitted && (
                <p className="text-green-600 text-sm mt-2 text-center animate-pulse">
                  Thank you for reaching out! I’ll get back to you soon ✨
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
