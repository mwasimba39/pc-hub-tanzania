import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h1>About <span className="highlight">TechHub</span></h1>
        <div className="about-content">
          <section>
            <h2>Our Story</h2>
            <p>
              Founded in 2023, <strong>TechHub</strong> brings premium computing solutions to Tanzania. 
              From gaming desktops to professional laptops, we focus on quality, performance, and local support.
            </p>
          </section>
          <section>
            <h2>Our Mission</h2>
            <p>
              To deliver high-quality PCs and accessories with reliable after-sales service, warranties, 
              and fast delivery across Dar es Salaam — making cutting-edge technology accessible and local.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
