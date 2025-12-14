import linked from "../assets/linkedin.png";
import github from "../assets/github.png";
import Email from "../assets/Email.png";
import phone from "../assets/phone.png";
import "../App.css"; 

export default function Contact() {
  return (
    <div>
      <h1 style={{textAlign:"center", marginTop:"2rem"}}>Contact Me</h1>
      <div className="contact-container">
        <div className="contact-card">
          <img src={linked} alt="LinkedIn" />
          <div className="contact-title">LinkedIn</div>
          <div className="contact-detail">
            <a href="https://www.linkedin.com/in/abirami-b-897530299/" target="_blank" rel="noopener noreferrer">
              abirami-b-897530299
            </a>
          </div>
        </div>
        <div className="contact-card">
          <img src={github} alt="GitHub" />
          <div className="contact-title">GitHub</div>
          <div className="contact-detail">
            <a href="https://github.com/abiramib267" target="_blank" rel="noopener noreferrer">
              abiramib267
            </a>
          </div>
        </div>
        <div className="contact-card">
          <img src={Email} alt="Email" />
          <div className="contact-title">Email</div>
          <div className="contact-detail">
            <a href="mailto:abiramib267@gmail.com">
              abiramib267@gmail.com
            </a>
          </div>
        </div>
        <div className="contact-card">
          <img src={phone} alt="Phone" />
          <div className="contact-title">Contact No</div>
          <div className="contact-detail">
            +91 6382984479
          </div>
        </div>
      </div>
    </div>
  );
}
