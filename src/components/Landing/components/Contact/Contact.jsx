import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Get the form data
    const formData = new FormData(form.current);
    const formObject = Object.fromEntries(formData.entries());

    // Prepare the template parameters
    const templateParams = {
      user_name: formObject.user_name,
      user_email: formObject.user_email,
      message: formObject.message,
      to_email: "sana.munir2902@gmail.com", // This field is not used in the template but kept for reference
    };

    emailjs
      .send(
        "service_55sib7f", // Your service ID
        "template_zqo2x09", // Your template ID
        templateParams,
        "HEkx0K-xwPvX1JGET" // Your user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.reset();
          alert("Email sent successfully!"); // Alert to show email sent
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          <span>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" placeholder="Name" required />
          <input type="email" name="user_email" className="user" placeholder="Email" required />
          <textarea name="message" className="user" placeholder="Message" required />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for contacting me!"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
