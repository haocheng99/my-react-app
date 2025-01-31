import React from "react";

const Contact = () => {
  return (
    <div style={{ padding: "50px 20px", backgroundColor: "#f9f9f9" }}>
      <h2 style={{ textAlign: "center", fontSize: "36px", marginBottom: "30px", color: "#333" }}>Contact Us</h2>
      <form
        action="https://formspree.io/f/xjkgrwyw" // 您的表单链接
        method="POST"
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ddd",
            height: "100px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#FFD700",
            color: "#333",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
