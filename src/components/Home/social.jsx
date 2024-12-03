

const Social = (props) => {
  return (
    <div className="home__social">
      <a href="https://api.whatsapp.com/send?phone=9920733089&text=Hello%2C%20I'm%20Poonam.%20Could%20you%20please%20tell%20me%20something%20about%20your%20project!%3F" className="home__social-icon" target="_blank">
      <i class="uil uil-whatsapp"></i>
      </a>
      <a href="https://github.com/" className="home__social-icon" target="_blank">
      <i class="uil uil-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/poonam-mhaske-508499306/" className="home__social-icon" target="_blank">
      <i class="uil uil-linkedin"></i>
      </a>
    </div>
  )
};

export default Social;
