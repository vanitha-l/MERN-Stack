import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("Thank you for contacting me!");
  };

  return (
    <section id="contact" style={{ padding: "60px", textAlign: "center" }}>
      <h2>Contact</h2>
      <p>Email: vanithal@email.com</p>
      <p>Phone: +1234567890</p>

      <button onClick={handleClick}>Send Message</button>

      {message && <p>{message}</p>}
    </section>
  );
}

export default Contact;