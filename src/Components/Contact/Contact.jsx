import React, { useState, useRef } from "react";
import "./Contact.css";
import { useInView } from "react-intersection-observer";
import emailjs from "emailjs-com";

export const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
    threshold: 0,
  });
  const [isHidden, setIsHidden] = useState(false);
  const toggleParagraphs = () => {
    setIsHidden(!isHidden);
  };

  const form = useRef();
  const [sent, setSent] = useState(false);

  const [confirmLoading, setConfirmLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setConfirmLoading(true);
    setTimeout(() => {
      setConfirmLoading(false);
    }, 2000);
    emailjs
      .sendForm(
        "Email from Darrenrevans",
        "template_4d687l3",
        form.current,
        "user_waq5Ii9uVZSpVEiDZ8TGu"
      )
      .then((result) => {
        console.log("form current: ", form.current);
        setSent({
          mailSent: true,
        });
        console.log(result.text);
      })
      .catch((error) => console.log(error.text));
    e.target.reset();
  };

  return (
    <section id="contact" ref={ref} className={inView ? "show" : "hidden"}>
      <h2 onClick={toggleParagraphs}>
        Contact me <span className={isHidden ? "rotate" : "unrotate"}>▼</span>
      </h2>
      <div className={`fade-out ${isHidden ? "hidden" : "show"}`}>
        <p>
          Please feel free to contact me with any business or career related
          enquiries.
        </p>
        <form ref={form} id="contactForm" onSubmit={sendEmail}>
          <div className="form-layout">
            <div>
              <input
                type="text"
                className="form-control"
                id="fname"
                name="firstname"
                placeholder="Your first name.."
                required
              />
            </div>

            <div>
              <input
                type="text"
                className="form-control"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
                required
              />
            </div>

            <div>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                placeholder="example@email.co.uk"
                required
              />
            </div>

            <div>
              <textarea
                id="message"
                className="form-control"
                name="message"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>
            <input
              type="submit"
              id="submitBtn"
              className="btn btn-primary"
              disabled={confirmLoading}
              value="Submit"
            />
          </div>
        </form>
        <div id="thankYou">
          {sent && <p>Thank you for contacting me!</p>}
        </div>
      </div>
    </section>
  );
};
