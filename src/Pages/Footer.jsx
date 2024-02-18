import "./CSS/footer.css";
const Footer = () => {
  return (
    <>
      <div id="footer">
        <div id="footerDiv">
          <div id="footerLeft">
            <input id="footerEmail" placeholder="Email" type="email" />
            <textarea id="footerMesage" placeholder="Message"></textarea>
            <button id="foolterButton">Send</button>
          </div>
          <div id="footerRight">
            <p id="header">Connect With Me</p>
            {/* <p>Linked In</p>
            <p>Instagram</p>
            <p>GitHub</p> */}
            <div class="homeLinks">
              <div id="socialMedia1">
                <a
                  id="contact-github"
                  href="https://github.com/Vinay-the-dev-bot"
                  target="_blank"
                >
                  <p>GitHub</p>
                </a>
              </div>
              <div id="socialMedia2">
                <a href="https://www.instagram.com/ig_vinaymm" target="_blank">
                  <p>Instagram</p>
                </a>
              </div>

              <div id="socialMedia3">
                <a
                  href="https://www.linkedin.com/in/vinayagoud-meti/"
                  target="_blank"
                >
                  <p>LinkedIn</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
