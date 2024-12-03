import "./footer.css"

const Footer = (props) => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Poonam</h1>

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
                <a href="https://api.whatsapp.com/send?phone=9920733089&text=Hello%2C%20I'm%20Poonam.%20Could%20you%20please%20tell%20me%20something%20about%20your%20project!%3F" className="footer__social-icon" target="_blank">
                    <i class="bx bxl-whatsapp"></i>
                </a>
{/*                 <a href="https://github.com/DRN1999" className="footer__social-icon" target="_blank">
                    <i class="bx bxl-git"></i>
                </a> */}
                <a href="https://www.linkedin.com/in/poonam-mhaske-508499306/" className="footer__social-icon" target="_blank">
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
