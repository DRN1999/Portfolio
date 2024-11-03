import "./footer.css"

const Footer = (props) => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Rahul</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://discord.com/channels/@drahul.7057" className="footer__social-icon" target="_blank">
                    <i class="bx bxl-discord"></i>
                </a>
                <a href="https://github.com/DRN1999" className="footer__social-icon" target="_blank">
                    <i class="bx bxl-github"></i>
                </a>
                <a href="http://linkedin.com/in/rahul-n-dethe1999" className="footer__social-icon" target="_blank">
                    <i class="bx bxl-linkedin"></i>
                </a>
            </div>

            <span className="footer__copy">
                &#169; RadicalScript. All rights reserved
            </span>  

        </div>

    </footer>
  )
};

export default Footer;
