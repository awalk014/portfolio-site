import React, { useState } from "react";
import "../ContactForm.css"; // import the css file

function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("https://benwalkerbackend.site/send-email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent!");
        e.target.reset();
      } else {
        setStatus("Error sending message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error sending message.");
    }
  };

  return (
    <main className="contact-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Contact Me</h2>

        <label>Name</label>
        <input type="text" name="name" required />

        <label>Email</label>
        <input type="email" name="email" required />

        <label>Message</label>
        <textarea name="message" required></textarea>

        <button type="submit">Send</button>
        <p>{status}</p>
      </form>
    </main>
  );
}

export default ContactForm;
