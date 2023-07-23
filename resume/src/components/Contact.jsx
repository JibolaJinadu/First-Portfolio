import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import "../styling/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const form = useRef();
  const [toasterMessage, setToasterMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const sendEmail = async (data) => {
    try {
      const isValid = await trigger();

      if (!isValid) {
        setToasterMessage(
          "Please fix the errors in the form before sending the message."
        );
        return;
      }

      await emailjs.sendForm(
        "service_nkfaiwe",
        "template_5af1nwg",
        form.current,
        "t7cZtN2SxTI1RKa_b"
      );

      console.log("Message sent");
      setToasterMessage("Message sent successfully!");
      reset();
      clearToasterMessage();
    } catch (error) {
      console.log(error);
      setToasterMessage(
        "An error occurred while sending the message. Please try again later."
      );
      clearToasterMessage();
    }
  };

  const clearToasterMessage = () => {
    setTimeout(() => {
      setToasterMessage("");
    }, 5000); // Clear toaster message after 5 seconds (adjust as needed)
  };

  return (
    <div className="contact-container">
      <div className="project-header">
        <div className="project-header-icon"></div>
        <h2 className="underline-transition contact-me">Contact-Me</h2>
      </div>
      <div className="contact-body">
        <div className="other-contact-info">
          <h3>Get in touch</h3>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} />  Lagos, Nigeria</p>
          <p><FontAwesomeIcon icon={faPhone} /> (+234) 8180302629, 9022204232</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> Jibolajinadus8@gmail.com</p>
          <p>
            <FontAwesomeIcon icon={faLinkedin} /> <a href="https://www.linkedin.com/in/jibola-jinadu-890a59148" target="_blank" rel="noopener noreferrer" className="contact-href">Jibola Jinadu</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faFacebook} /> <a href="https://www.facebook.com/ajibsonjibola.jinadu?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="contact-href">Jibola Jinadu</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faTwitter} /> <a href="https://twitter.com/AjibolaOluwa1?t=-3ycYybp1_KKq8ha2DsRlw&s=09" target="_blank" rel="noopener noreferrer" className="contact-href">@AjibolaOluwa1</a>
          </p>
        </div>
        <div className="email-container">
          <h3>Send me an email</h3>
          <form ref={form} onSubmit={handleSubmit(sendEmail)}>
            <div className="form-group">
              <label>Name</label>
              <input
                placeholder="Type your name."
                type="text"
                name="user_name"
                {...register("user_name", { required: "Name is required" })}
                className={`no-background ${
                  errors.user_name ? "error-input" : ""
                }`}
                autoComplete="off" 
              />
              {errors.user_name && (
                <span className="error">{errors.user_name.message}</span>
              )}
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                placeholder="Type your email address."
                type="email"
                name="user_email"
                {...register("user_email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`no-background ${
                  errors.user_email ? "error-input" : ""
                }`}
                autoComplete="off"
              />
              {errors.user_email && (
                <span className="error">{errors.user_email.message}</span>
              )}
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                placeholder="Type your message."
                name="message"
                {...register("message", { required: "Message is required" })}
                className={`no-background ${
                  errors.message ? "error-input" : ""
                }`}
                autoComplete="off"
              />
              {errors.message && (
                <span className="error">{errors.message.message}</span>
              )}
            </div>
            <button type="submit" className="contact-bttn">
              Send Message
            </button>
          </form>
          <div className={`toaster ${toasterMessage ? "show" : ""}`}>
            {toasterMessage}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
