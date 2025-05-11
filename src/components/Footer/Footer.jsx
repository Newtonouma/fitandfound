import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            {/* Main Footer Content */}
            <div className="footer-top">
                {/* Column 1: Brand Info */}
                <div className="footer-section about">
                    <h2>FitFound</h2>
                    <p>
                        Where craftsmanship meets elegance. We tailor clothes that define your unique style and fit with perfection.
                    </p>
                </div>

                {/* Column 2: Services */}
                <div className="footer-section links">
                    <h2>Services</h2>
                    <ul>
                        <li><a href="#">Custom Tailoring</a></li>
                        <li><a href="#">Clothing Alterations</a></li>
                        <li><a href="#">Wedding Attire</a></li>
                        <li><a href="#">Repairs</a></li>
                    </ul>
                </div>

                {/* Column 3: Support */}
                <div className="footer-section links">
                    <h2>Support</h2>
                    <ul>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Shipping & Delivery</a></li>
                        <li><a href="#">Return Policy</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                {/* Column 4: Contact Form */}
                <div className="footer-section message-form">
                    <h2>Get in Touch</h2>
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <textarea placeholder="Message"></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Fit&Found. All rights reserved. <br /> Built with care by Newton.</p>
            </div>
        </footer>
    );
}

export default Footer;
