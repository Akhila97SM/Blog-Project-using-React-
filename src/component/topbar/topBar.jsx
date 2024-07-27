import "./topbar.css";

export default function TopBar() {
  return (
    <div className="container">
      
      <div className="topNav">
        <div className="topleft">
          <i className="fa-solidLogo fa-b"></i>
          <h4 className="topLeftSm">Meta</h4>
          <h5 className="topLeftLg">Blog</h5>
        </div>

        <div className="topcentre">
          <ul className="navbarMenu ">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Single Post</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* <div className="topright">
          <input type="search" className="search" placeholder="Search" />
          <i class="fa fa-search  search-button"></i>
        </div> */}
      </div>
      

      <div className="title">
        <div className="toptitle">
          <h4>Page TItle</h4>
        </div>
        <div className="titleLf">
          <h6>Home</h6>
          <h5 className="titleRt">Link One</h5>
        </div>
      </div>
    </div>
  );
}
