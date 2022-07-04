import { ReactComponent as CarMainImage } from 'assets/images/car-home.svg';

const Home = () => {
  return (
    <div className="home-card">
      <div className="base-card home-card-top">
        <div className="car-image">
          <CarMainImage />
        </div>
      </div>
      <div className="base-card home-card-bottom">
        <div>
          <p>Texto aqui</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
