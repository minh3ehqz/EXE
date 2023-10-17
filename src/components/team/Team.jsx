import chef1 from "../../assets/team-1.jpg";
import chef2 from "../../assets/team-2.jpg";
import chef3 from "../../assets/team-3.jpg";
import chef4 from "../../assets/team-4.jpg";

import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import "./team.css";
export const Team = () => {
  return (
    <section className="team section" id="team">
      <h2 className="section__title" data-title="Chefs">
        Meet Our Experts
      </h2>

      <div className="team__grid grid container">
        <div className="team__item">
          <img src={chef1} alt="" className="team__img" />
          <div className="team__data">
            <h3 className="team__title">Christian Fir</h3>
            <p className="team__job">Senior</p>
          </div>
          <div className="team__socials">
            <a href="/" className="team__social-link">
              <FaFacebook />
            </a>
            <a href="/" className="team__social-link">
              <FaLinkedin />
            </a>{" "}
            <a href="/" className="team__social-link">
              <FaTwitter />
            </a>{" "}
            <a href="/" className="team__social-link">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="team__item">
          <img src={chef2} alt="" className="team__img" />
          <div className="team__data">
            <h3 className="team__title">Christian Fir</h3>
            <p className="team__job">Senior</p>
          </div>
          <div className="team__socials">
            <a href="/" className="team__social-link">
              <FaFacebook />
            </a>
            <a href="/" className="team__social-link">
              <FaLinkedin />
            </a>{" "}
            <a href="/" className="team__social-link">
              <FaTwitter />
            </a>{" "}
            <a href="/" className="team__social-link">
              <FaYoutube />
            </a>
          </div>
        </div>{" "}
        <div className="team__item">
          <img src={chef3} alt="" className="team__img" />
          <div className="team__data">
            <h3 className="team__title">Christian Fir</h3>
            <p className="team__job">Senior</p>
          </div>
          <div className="team__socials">
            <a href="/" className="team__social-link">
              <FaFacebook />
            </a>
            <a href="/" className="team__social-link">
              <FaLinkedin />
            </a>{" "}
            <a href="/" className="team__social-link">
              <FaTwitter />
            </a>{" "}
            <a href="/" className="team__social-link">
              <FaYoutube />
            </a>
          </div>
        </div>{" "}
        <div className="team__item">
          <img src={chef4} alt="" className="team__img" />
          <div className="team__data">
            <h3 className="team__title">Christian Fir</h3>
            <p className="team__job">Senior</p>
          </div>
          <div className="team__socials">
            <a href="/" className="team__social-link">
              <FaFacebook />
            </a>
            <a href="/" className="team__social-link">
              <FaLinkedin />
            </a>{" "}
            <a href="/" className="team__social-link">
              <FaTwitter />
            </a>{" "}
            <a href="/" className="team__social-link">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
