export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand" href="#home">
            {" "}
            Hasnain<span>.Dev</span>
          </a>
          <p>
            {" "}
            © <span id="year"></span> Hasnain.Dev. Built with React mindset
            &amp; clean frontend principles.{" "}
          </p>
          <div className="footer-social">
            <a
              href="https://github.com/Hasnainpali"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              GitHub{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/hasnain-frontend-developer/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              LinkedIn{" "}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
