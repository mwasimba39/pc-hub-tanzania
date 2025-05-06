import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h1>Contact Us</h1>
        <div className="contact-container">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone" />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>

          <div className="contact-info">
            <h3>Reach Us Directly</h3>
            <p><strong>Email:</strong> sales@techhub.co.tz</p>
            <p><strong>Phone:</strong> +255 655 750 791</p>
            <p><strong>Address:</strong> Sinza, Dar es Salaam</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;