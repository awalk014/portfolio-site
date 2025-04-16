// ContactForm.jsx
import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const response = await fetch("https://benwalkerbackend.site/send-email.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const resultText = await response.text();
            console.log("Raw response:", resultText);
            console.log("Status code:", response.status);
            setStatus(result);
        } catch (error) {
            console.error("Fetch error:", error);
            setStatus("Error sending message");
          }
          
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border p-2"
            />
            <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border p-2"
            />
            <textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border p-2"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Send
            </button>
            <p>{status}</p>
        </form>
    );
};

export default ContactForm;
