import { FaRegBookmark } from "react-icons/fa";
import shapeTwo from "../../assets/shape-2.png";
import shapeThree from "../../assets/shape-3.png";
import "./reservation.css";
const Reservation = () => {
  return (
    <section className="reservation section" id="reservation">
      <h2 className="section__title" data-title="Reservation">
        Book Table
      </h2>
      <form className="reservation__form grid">
        <div className="form__input-div">
          <input className="form__input" type="text" placeholder="Your Name" />
        </div>
        <div className="form__input-div">
          <input
            className="form__input"
            type="text"
            placeholder="Your email address"
          />
        </div>{" "}
        <div className="form__input-div">
          <input className="form__input" type="text" placeholder="Your Phone" />
        </div>{" "}
        <div className="form__input-div">
          <input
            className="form__input"
            type="text"
            placeholder="Date Ex: DD/MM/YYYY"
          />
        </div>
        <div className="form__input-div">
          <input
            className="form__input"
            type="text"
            placeholder="Time Ex: 12:00 AM"
          />
        </div>
        <div className="form__input-div">
          <input
            className="form__input"
            type="text"
            placeholder="Number of People"
          />
        </div>
        <div className="form__input-div form__input-textarea">
          <textarea
            placeholder="Your Message"
            className="form__input"
          ></textarea>
        </div>
        <button type="submit" className="btn btn--flex reservation__btn">
          <FaRegBookmark /> Book A Table
        </button>
      </form>
      <img className="shape__two" src={shapeTwo} alt="" />
      <img className="shape__three" src={shapeThree} alt="" />
    </section>
  );
};

export default Reservation;
