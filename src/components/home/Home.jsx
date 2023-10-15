import "./home.css"

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__container container">
        <div className="home__content">
          <span className="home__subtitle">Welcome to DalaVibe</span>
          <h1 className="home__title">Discovre Amazing coffe House in Dalat</h1>
          <p className="home__description">
            there are many awesome coffe in my house and fucking dogs and not
            except you hahahahaha
          </p>
          <div className="home__btns">
            <a href="#menu" className="btn">
              Check Menu
            </a>
            <a href="#reservation" className="btn home__btn">
              Book Table
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
