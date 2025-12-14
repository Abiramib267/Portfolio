import "../App.css"; 

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Abirami B. All Rights Reserved.</p>
        <div className="links">
          <a href="https://www.linkedin.com/in/abirami-b-897530299/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/abiramib267" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
