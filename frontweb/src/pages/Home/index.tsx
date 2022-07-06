import './styles.css';
import CarMainImage from 'assets/images/main-car-image.png';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-top-card">
        <img src={CarMainImage} alt="Imagem do carro na tela principal" />
        <div className="home-top-card-text">
          <h2>O carro perfeito para você</h2>
          <p>
          Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
      </div>
      <div className="base-card home-bottom-card">
        <button className="btn btn-primary">Ver catálogo</button>
        <p>Comece agora a navegar</p>
      </div>
    </div>
  );
};

export default Home;
