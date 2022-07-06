import './styles.css';
import { ReactComponent as CarMainImage } from 'assets/images/car-home.svg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-top-card">
        <div className="row">
          <div className="col-xl-6">
            <CarMainImage />
          </div>
          <div className="col-xl-6">
            <h2>Lorem ipsum dolor sit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia,
              maxime!
            </p>
          </div>
        </div>
      </div>
      <div className="base-card home-bottom-card">
        <div className="row">
          <div className="col-xl-6">
            <button className="btn btn-primary">Ver catlálogo</button>
          </div>
          <div className="col-xl-6">
            <p>Comece agora a navegar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
