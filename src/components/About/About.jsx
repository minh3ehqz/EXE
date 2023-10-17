import aboutImg from "../../assets/about-img.jpg";
import { FiCheck } from "react-icons/fi";
import "./about.css";
const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__grid container grid">
        <div className="about__img-wrapper">
          <img src={aboutImg} alt="" />
        </div>
        <div className="about__content">
          <h2 className="section__title title-left" data-title="About Us">
            Fresh Quality and Organic Tasty Coffee House For You
          </h2>
          <p>
            Hooks are a mechanism to reuse stateful logic (such as setting up a
            subscription and remembering the current value), but every time you
            use a custom Hook, all state and effects inside of it are fully
            isolated. How does a custom Hook get isolated? Each call to a Hook
            gets an isolated state.
          </p>
          <div className="about__details grid">
            <p className="about__details-description">
              <FiCheck />
              Hooks are a mechanism to reuse stateful logic
            </p>
            <p className="about__details-description">
              <FiCheck />
              Hooks are a mechanism to reuse stateful logic
            </p>{" "}
            <p className="about__details-description">
              <FiCheck />
              Hooks are a mechanism to reuse stateful logic
            </p>
          </div>
          <a href="#team" className="btn">
            Our Experts
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
