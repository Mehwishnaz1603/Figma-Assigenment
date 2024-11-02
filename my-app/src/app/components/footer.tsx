import { FaTwitter, FaFacebookF, FaTiktok, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
      <footer className="footer">
        <div className="footerSection">
          <h2>cyber</h2>
          <p>
            We are a residential interior design firm located in <br /> Portland. Our boutique-studio
            offers more than
          </p>
        <br /> <br /> <br /> <br /> <br />
          <div className="socialIcons">
        <FaTwitter />
        <FaFacebookF />
        <FaTiktok />
        <FaInstagram />
          </div>
        </div>
  
        <div className="footerSection">
          <h3>Services</h3>
          <ul>
            <li>Bonus program</li>
            <li>Gift cards</li>
            <li>Credit and payment</li>
            <li>Service contracts</li>
            <li>Non-cash account</li>
            <li>Payment</li>
          </ul>
        </div>
  
        <div className="footerSection">
          <h3>Assistance to the buyer</h3>
          <ul>
            <li>Find an order</li>
            <li>Terms of delivery</li>
            <li>Exchange and return of goods</li>
            <li>Guarantee</li>
            <li>Frequently asked questions</li>
            <li>Terms of use of the site</li>
          </ul>
        </div>
      </footer>
    );
  }
  