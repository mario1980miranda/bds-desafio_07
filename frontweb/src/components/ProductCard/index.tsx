import CarCard from 'assets/images/car-card.png';

import './styles.css';

const ProductCard = () => {
  return (
    <div className="base-card product-item">
      <img src={CarCard} alt="Car card" />
      <h1>Audi Supra TT</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
        expedita.
      </p>
      <button>
        <h6>Comprar</h6>
      </button>
    </div>
  );
};

export default ProductCard;
