import './contactus.css';
import contactImage from '/contactusimages/1.jpg'; // Replace with actual image path

const ContactUs = () => {
  return (
    <div className="contact-page">
      {/* Left Image */}
      <div className="contact-image">
        <img src={contactImage} alt="Contact Visual" />
      </div>

      {/* Middle Section */}
      <div className="contact-middle">
        {/* Contact Info (Left Side) */}
        <div className="contact-info">
          <h2>We’re here for you!</h2>
          <p>Reach out to us anytime – we're just a message away.</p>
          <p><strong>Phone:</strong> +2547 1445 3669</p>
          <p><strong>Email:</strong> armstrongnewton02@gmail.com</p>
          <p><strong>Address:</strong> 123 Biashara Street, Nairobi, Kenya</p>
        </div>

        {/* Contact Form (Right Side) */}
        <div className="contact-form">
          <table>
            <tbody>
              <tr>
                <td><input type="text" placeholder="First Name" /></td>
                <td><input type="text" placeholder="Last Name" /></td>
              </tr>
              <tr>
                <td><input type="email" placeholder="Email" /></td>
                <td><input type="tel" placeholder="Phone" /></td>
              </tr>
              <tr>
                <td colSpan="2">
                  <textarea placeholder="Write your message here..."></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit">Submit</button>
        </div>
      </div>

      {/* Map Section */}
      <div className="contact-map">
        <iframe
            className="map-iframe"
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.872471460726!2d36.82194637578446!3d-1.2920657356228635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10ca6e755555%3A0x3a055b97c5375e12!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1616596592767!5m2!1sen!2ske"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
