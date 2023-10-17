import chooseImg from "../../assets/choose.jpg";
import coffeeMug from "../../assets/coffee-mug.svg";
import coffeeBean2 from "../../assets/coffee-beans-2.svg";
import coffeebean3 from "../../assets/coffee-beans-3.svg";
import "./choose.css";
const Choose = () => {
  return (
    <section className="choose section">
      <div className="choose__grid container grid">
        <div className="choose__content">
          <h2
            data-title="Why Choose Us ?"
            className="section__title title-left"
          >
            Coffee DalaVibe most out of Yours favorites & tastt coffee House
          </h2>
          <p className="choose__description">
            Hooks are a mechanism to reuse stateful logic (such as setting up a
            subscription and remembering the current value), but every time you
            use a custom Hook, all state and effects inside of it are fully
            isolated. How does a custom Hook get isolated? Each call to a Hook
            gets an isolated state.
          </p>

          <div className="choose__details grid">
            <div className="choose__details-item">
              <div className="choose__details-img-wrapper">
                <img src={coffeeMug} alt="" className="choose__details-img" />
              </div>
              <div>
                <h3 className="choose__details-title">Pure gradel </h3>
                <p className="choose__details-description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industorem Ipsum passages, and more recently with
                  desktop p
                </p>
              </div>
            </div>

            <div className="choose__details-item">
              <div className="choose__details-img-wrapper">
                <img src={coffeeBean2} alt="" className="choose__details-img" />
              </div>
              <div>
                <h3 className="choose__details-title"> Awesome Aroma </h3>
                <p className="choose__details-description">
                  Lorem Ipsum is simpever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a tyet
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop p
                </p>
              </div>
            </div>
            <div className="choose__details-item">
              <div className="choose__details-img-wrapper">
                <img src={coffeebean3} alt="" className="choose__details-img" />
              </div>
              <div>
                <h3 className="choose__details-title">Healthy Coffee </h3>
                <p className="choose__details-description">
                  Lorem Ipsum is simply du type and scrambled it to make a tyet
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop p
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={chooseImg} alt="" className="choose__img" />
      </div>
    </section>
  );
};

export default Choose;
