import "./App.css";
import styled from "styled-components";
import { FaLinkedin, FaFacebook, FaInstagramSquare } from "react-icons/fa";
function App() {
  const linkedinUrl = "https://www.linkedin.com/in/pooja-shami-b183b7184/";
  const socialMediaLinks = [
    {
      icon: <FaFacebook />,
      url: "https://www.facebook.com/your-facebook-profile",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/pooja-shami-b183b7184/",
    },
    {
      icon: <FaInstagramSquare />,
      url: "https://www.instagram.com/your-instagram-profile",
    },
  ];
  const Container = styled.div``;

  const Navbar = styled.nav`
    background-color: #333;
    color: #fff;
    padding: 1rem;
    ${"" /* text-align: center; */}
  `;

  const Hero = styled.section`
    background-color: #f0f0f0;
    padding: 2rem;
    text-align: center;
  `;

  const About = styled.section`
    padding: 2rem;
  `;

  const Service = styled.section`
    background-color: #f0f0f0;
    padding: 2rem;
  `;

  const Contact = styled.section`
    padding: 2rem;
  `;
  const Work = styled.section`
    padding: 2rem;
  `;

  const Footer = styled.footer`
    background-color: #333;
    color: #fff;
    padding: 1rem;
    text-align: center;
  `;

  return (
    <div className="App">
      <Container>
        <nav
          className="navbar bg-dark border-bottom border-body"
          data-bs-theme="dark"
        >
          <div className="container-fluid font-style">
            <div className="branding">
              <img src="./images/logo.svg" alt="" />
            </div>
            <div className="navigation">
              <a className="#home" aria-current="page">
                Home
              </a>
              <a href="#about">About</a>
              <a href="#services">Skills</a>
              <a href="#work">Work</a>
              <a href="#blog">Projects</a>
            </div>
          </div>
        </nav>

        <Hero className="bg-black p-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src="./images/pooja.jpg" alt="" className="img-fluid" />
              </div>
              <div className="col-md-6 text-start text-white">
                <h6 className="text-info fs-2">Pooja Shami</h6>
                <h1 className="fs-1">
                  I’m a Front End <span className="text-info">Developer</span>
                </h1>
                <p>
                  My primary focus is on building visually appealing, responsive
                  and interactive website, Web App, that provide an excellent
                  user experience. I am committed to staying up to date with the
                  latest front-end technologies and trends, and I am always
                  looking for new and innovative ways to enhance the user
                  experience. It's been several years now that i'm working on
                  this area and I have done many project in it. I am familiar
                  with reactJS/Javascript/nextJS. In future I plan to enhance my
                  skills.
                </p>
                <div>
                  <a
                    href="/images/Pooja_Resume.pdf"
                    download="Pooja_Shami_Resume.pdf"
                    className="btn btn-secondary"
                  >
                    DOWNLOAD CV
                  </a>
                </div>
                <div className="social-links mt-5 justify-content-center fs-3 text-primary ">
                  {socialMediaLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon mx-1"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Hero>

        <About>
          <div className="container ">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img
                  style={{ height: "360px" }}
                  className="about-me-img img-fluid"
                  src="./images/pooja-2.jpg"
                  alt=""
                />
              </div>
              <div className="col-md-6 text-start">
                <h1>
                  About <span className="text-info">Me</span>
                </h1>
                <h3>Hello! i’m Pooja Shami.</h3>
                <p>
                  I have total experience 2.3 years and 1 year 8 months
                  experienced As a reactJS or nextJS Developer.
                </p>
                <h1>
                  About <span className="text-info">MyFamily</span>
                </h1>
                <p>
                  There are five member in my family including me, my mother is
                  good home maker, we are 4 siblings I have 1 younger sister 2
                  younger brother.
                </p>
                <div className="social">
                  <a
                    href="https://instagram.com/pooja_shami_20?igshid=NzZlODBkYWE4Ng=="
                    target="_blank"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pooja-shami-b183b7184/"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </About>

        <Service>
          <div className="container">
            <h1 className="section-heading">
              <span>Skills </span>Skills
            </h1>
            <p>
              We provide high standard clean websites for your business
              solutions.
            </p>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
              <div className="col mb-4">
                <div className="card">
                  <img
                    src="./images/react.svg"
                    alt=""
                    className="image-size"
                    height="100"
                  />
                  <h2>React JS</h2>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <p>As a react js developer I have 1.8 year experience</p>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card">
                  <img
                    src="./images/js.svg"
                    alt=""
                    className="image-size"
                    height="100"
                  />
                  <h2>Java Script</h2>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <p>I have 2 years of experience in Java Script.</p>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card">
                  <img
                    src="./images/html5.svg"
                    alt=""
                    className="image-size"
                    height="100"
                  />
                  <h2>HTML5</h2>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <p>I have 3 years of experience in html.</p>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card">
                  <img
                    src="./images/css3.svg"
                    alt=""
                    className="image-size"
                    height="100"
                  />
                  <h2>CSS3</h2>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <p>I have 3 years of experience in css.</p>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card">
                  <img
                    src="./images/bootstrap.svg"
                    alt=""
                    className="image-size"
                    height="100"
                  />
                  <h2>BOOTSTRAP</h2>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <p>I have 3 years of experience in bootstrap.</p>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card">
                  <img
                    src="./images/nextJS.png"
                    height="100"
                    alt=""
                    className="image-size"
                  />
                  <h2>Next JS</h2>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <p>I have 4 months of experience in Next JS.</p>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card">
                  <img
                    src="./images/axios2.png"
                    height="100"
                    alt=""
                    className="image-size"
                  />
                  <h2>Axios</h2>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <p>I have 4 months of experience in axios.</p>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card">
                  <img
                    src="./images/GitHub-logo.png"
                    height="100"
                    alt=""
                    className="image-size"
                  />
                  <h2>Git/Github</h2>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <p>I have 4 months of experience in github.</p>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card">
                  <img
                    src="./images/redux2.png"
                    height="100"
                    alt=""
                    className="image-size"
                  />
                  <h2>Redux</h2>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <p>I have 1 year of experience in redux.</p>
                </div>
              </div>
            </div>
          </div>
        </Service>
        <Work className="bg-black">
          <div class="container">
            <h1 class="section-heading text-white">
              <span className="text-info">Our</span> Projects
            </h1>
            <p className="text-white">
              I created high-standard, clean Projects
            </p>

            <div className="card-wrapper">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                <div className="col mb-4">
                  <div className="card">
                    <div className="img-wrapper mt-3">
                      <img
                        src="./images/world-map.jpg"
                        alt="World Map"
                        className="card-img-top"
                      />
                    </div>
                    <div className="card-content mt-3">
                      <div className="fs-2" style={{ fontWeight: "600" }}>
                        World Map
                      </div>

                      <a
                        href="https://github.com/poojashami/world-map"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-primary"
                      >
                        GitHub Repo Link
                      </a>

                      <p>
                        In this project, we have used world countries JSON data
                        to display country details. Clicking on any country
                        shows its details on the right side of the project.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                    <div className="img-wrapper mt-3">
                      {/* <img
                        src="./images/world-map.jpg"
                        alt="World Map"
                        className="card-img-top"
                      /> */}
                    </div>
                    <div className="card-content mt-3">
                      <div className="fs-2" style={{ fontWeight: "600" }}>
                        New project upcomming
                      </div>

                      <a
                        href="https://github.com/poojashami/world-map"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-primary"
                      >
                        GitHub Repo Link
                      </a>

                      {/* <p>
                        In this project, we have used world countries JSON data
                        to display country details. Clicking on any country
                        shows its details on the right side of the project.
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Work>
        <Contact>
          <div class="container">
            <h1 class="section-heading text-center mt-5 mb-5">
              Contact <span className="text-info">Us</span>
            </h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
              <div className="col mb-4">
                <div className="">
                  <img
                    src="./images/contact.png"
                    alt=""
                    height="70"
                    class="mb-3"
                  />
                  <h3 class="text-center">Call Us On</h3>
                  <h6 class="text-center">7088315365</h6>
                </div>
              </div>
              <div className="col mb-4">
                <div className="">
                  <img
                    src="./images/email.png"
                    alt=""
                    height="70"
                    class="mb-3"
                  />
                  <h3 class="text-center">Email Us At</h3>
                  <h6 class="text-center">poojashami6@gmail.com</h6>
                </div>
              </div>
              <div className="col mb-4">
                <div className="">
                  <img
                    src="./images/linkedin.png"
                    alt=""
                    height="70"
                    class="mb-3"
                  />
                  <h3 class="text-center">Linkedin</h3>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit my LinkedIn profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Contact>

        <Footer>
          <img
            class="footer-logo"
            src="./images/logo-2.svg"
            alt=""
            height="30"
          />

          <div class="copyright">Copyright 2023 © Pooja Shami</div>
        </Footer>
      </Container>
    </div>
  );
}

export default App;
