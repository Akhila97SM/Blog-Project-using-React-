import "./footer.css";

export default function footer() {
  return (
    <div className="container">
      <div className="footer">
        <div className="footerTopLf">
          <div>
            <h6 className="abt">About</h6>
            <p className="para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>

          <div className="contactInfo">
            <ul className="contact">
              <li>
                <a href="#">phone:789-456-1234</a>
              </li>
              <li>
                <a href="#">Email:info@jstemplate.net</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footerTopCn">
          <ul className="footerList">
            <h5>Quick Link</h5>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Blog</a>
            <a href="">Archived</a>
            <a href="">Author</a>
            <a href="">Contact</a>
          </ul>

          <ul className="footerList">
            <h5>Category</h5>
            <a href="">Lifestyle</a>
            <a href="">Technology</a>
            <a href="">Travel</a>
            <a href="">Business</a>
            <a href="">Economy</a>
            <a href="">Sports</a>
          </ul>

          <ul className="footerList">
            <h5>Clients</h5>
            <a href="">Team</a>
            <a href="">About</a>
            <a href="">Career</a>
            <a href="">Testimonials</a>
            <a href="">Author</a>
            <a href="">Journal</a>
          </ul>

          <ul className="footerList">
            <h5>Social</h5>
            <a href="">Facebook</a>
            <a href="">Twitter</a>
            <a href="">Instagram</a>
            <a href="">Googleplus</a>
            <a href="">watsapp</a>
            <a href="">threads</a>
          </ul>
        </div>
      </div>

      <div className="footerBottom">
        <div className="footerleft">
          <div className="logo">
            <i className="fa-solidLogo fa-b"></i>
            <h4 className="footerLeftSm">Meta</h4>
            <h5 className="footerLeftLg">Blog</h5>
          </div>
          <p className="copyright">© JS Template 2023. All Rights Reserved.</p>
        </div>

        <div className="footerRight">
          <h6>Terms of Use</h6>
          <h6>Privacy Policy</h6>
          <h6>Cookie Policy</h6>
        </div>
      </div>
    </div>
  );
}
